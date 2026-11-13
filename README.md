# 孟歆玮 · UI/UX 设计作品集

个人作品集网站，包含首页、4 个项目详情页、49 页完整作品集、独立履历与原始 PDF 下载。

## 网站结构

- `index.html`：首页
- `resume.html`：个人履历
- `rice.html`、`assets.html`、`website.html`、`starbite.html`：项目详情
- `portfolio.html`：完整作品集
- `style.css`、`app.js`：样式和交互
- `assets/`：作品画面及个人照片
- `downloads/`：两份原始 PDF

## 本地查看

在此目录运行 `python3 -m http.server 8000`，然后打开 http://localhost:8000。

## GitHub Pages

仓库 Settings → Pages，Source 选择 Deploy from a branch，分支选择 main，目录选择 / (root)，点击 Save。

纯静态网页，无需构建或第三方运行时依赖。页面采用相对路径。

视觉参考 diffuspace.ai 的黑色背景、胶囊导航与点阵标题；首页使用参考站同款背景视频与封面图，来源：https://diffuspace.ai/assets/homepage/background.mp4 。媒体版权归原权利人所有。内容来自本人提供的作品集和简历，指标分别保留各自来源口径。

作品与照片版权归原权利人所有，不附带开源再使用授权。
