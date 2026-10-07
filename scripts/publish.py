"""Rebuild, verify and export only visitor-facing files for a static host."""
from pathlib import Path
import runpy
import shutil

ROOT = Path(__file__).resolve().parent.parent
runpy.run_path(str(ROOT / 'scripts/build.py'), run_name='__main__')
runpy.run_path(str(ROOT / 'scripts/verify.py'), run_name='__main__')
output = ROOT / 'dist'
if output.exists():
    shutil.rmtree(output)
output.mkdir()
for name in ['index.html', 'robots.txt']:
    shutil.copy2(ROOT / name, output / name)
for name in ['assets', 'projects']:
    shutil.copytree(ROOT / name, output / name)
assert not (output / 'content').exists()
assert not (output / 'docs').exists()
print('Exported static site to dist; source and review documents are excluded.')
