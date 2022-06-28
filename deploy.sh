# 1.发布到master分支
git add .
git commit -m '🐛 fix(compiler): master' --no-verify
git remote add gitee https://gitee.com/zhoubichuan/antdpro-demo.git
git pull gitee master
git push gitee master

# 2.打包
npm run build

cd dist
# 3.发布到gh-pages分支
git init
git checkout --orphan gh-pages
git add .
git commit -m '🐛 fix(compiler): gh-pages' --no-verify
git remote add gitee https://gitee.com/zhoubichuan/antdpro-demo.git
git push -f gitee gh-pages

# 4.返回初始目录
cd -

# # 1.发布到master分支
git add .
git commit -m '🐛 fix(compiler): master' --no-verify
git remote add github https://github.com/zhoubichuan/antdpro-demo.git
git pull github master
git push github master