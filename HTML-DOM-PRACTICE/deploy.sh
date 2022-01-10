# 确保脚本抛出遇到的错误
set -e

commitInfo='init'

yarn docs:build

cd docs

git config --local user.name Melonvin
git config --local user.email 1176891456@qq.com

git add .
git commit -m ${commitInfo}
git push

cd .vuepress/dist

git init 

git config --local user.name Melonvin
git config --local user.email 1176891456@qq.com

git add .
git commit -m 'deploy'
git push -f git@github.com:Melonvin/HTML-DOM-PRACTICE.git master:gh-pages

cd ..

rm -rf dist

cd ../../..

git config --local user.name Melonvin
git config --local user.email 1176891456@qq.com

git add .
git commit -m ${commitInfo}
git push

cd -



