#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 显示执行过程
set -x

echo "开始构建..."
# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 自定义域名配置（取消注释并修改为您的域名）
# echo 'your-domain.com' > CNAME

# 创建.nojekyll文件，防止GitHub Pages使用Jekyll处理
touch .nojekyll

echo "准备Git提交..."
git init
git add -A
git config user.name "Travis CI"
git config user.email "deploy@travis-ci.org"
git commit -m "自动部署: $(date '+%Y-%m-%d %H:%M:%S')"

# 部署到GitHub Pages
echo "开始部署到GitHub Pages..."
git push -f git@github.com:guanyuhao/guanyuhao.github.io.git master
# 如果使用HTTPS方式（适用于CI环境）
# git push -f https://${GITHUB_TOKEN}@github.com/guanyuhao/guanyuhao.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

echo "部署完成!"
cd -
