"""Check the generated site's meaningful publishing contracts; no dependencies."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
from hashlib import sha256
import json

ROOT=Path(__file__).resolve().parent.parent
class Page(HTMLParser):
    def __init__(self,path):
        super().__init__(); self.path=path; self.ids=[]; self.refs=[]; self.h1=0; self.lang=None; self.description=False; self.images=0
        self.feed(path.read_text())
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'id' in a: self.ids.append(a['id'])
        if tag=='html': self.lang=a.get('lang')
        if tag=='h1': self.h1+=1
        if tag=='meta' and a.get('name')=='description': self.description=bool(a.get('content'))
        if tag=='img':
            assert a.get('alt'), f'{self.path}: missing image description'
            self.images+=1
        for attr in ['href','src']:
            if attr in a: self.refs.append(a[attr])

pages={p.resolve():Page(p) for p in [ROOT/'index.html',*sorted((ROOT/'projects').glob('*.html'))]}
for path,page in pages.items():
    assert page.h1==1 and page.description and page.lang=='en',f'{path}: missing metadata/heading'
    assert len(page.ids)==len(set(page.ids)),f'{path}: duplicate IDs'
    for ref in page.refs:
        assert ref, f'{path}: empty link'
        url=urlsplit(ref)
        if url.scheme or url.netloc: continue
        dest=(path.parent/unquote(url.path)).resolve() if url.path else path
        assert dest.is_relative_to(ROOT), f'{path}: link escapes site'
        if dest.is_dir(): dest=dest/'index.html'
        assert dest.is_file(),f'{path}: missing file {dest}'
        if url.fragment and dest in pages: assert url.fragment in pages[dest].ids,f'{path}: missing anchor {ref}'
projects=json.loads((ROOT/'content/projects.json').read_text())
visible=[p for p in projects if p.get('visible',True)]
assert 1<=len(visible)<=3,'Keep the personal selection to at most three projects; use the showroom for the full collection.'
assert len({p['slug'] for p in projects})==len(projects),'Duplicate project slug'
for project in visible:
    assert project['url'].startswith('https://husseinabozina.github.io/app-showroom/projects/')
    for image in project['screens']: assert (ROOT/image[0]).is_file()
pdf=ROOT/'assets/docs/Hussein_Abozina_CV.pdf'
assert pdf.read_bytes().startswith(b'%PDF-'),'CV link must serve a real PDF'
expected=json.loads((ROOT/'docs/asset-integrity.json').read_text())
for name,digest in expected.items(): assert sha256((ROOT/name).read_bytes()).hexdigest()==digest,f'Original asset was altered: {name}'
print(f'PASS: {len(pages)} pages; unique headings/IDs, local assets/anchors, {len(visible)} curated projects, original CV and supplied Mushaf image.')
