# 孟歆玮 · UI/UX 设计作品集

纯静态网站，无需安装依赖。包含首页、4 个项目详情页、49 页完整作品集、独立履历页和两份原始 PDF。

## 本地查看

在项目目录运行 `python3 -m http.server 8000 --directory dist`，打开 http://localhost:8000。

## GitHub Pages

1. 在 GitHub 创建仓库，例如 `portfolio`。
2. 将本文件、`dist/` 和 `.github/` 上传至仓库的 `main` 分支，保持目录结构。
3. 仓库 Settings → Pages → Build and deployment → Source 选择 GitHub Actions。
4. 在 Actions 中运行 Deploy portfolio to GitHub Pages。完成后，访问 `https://你的用户名.github.io/仓库名/`。

网站使用相对路径，可直接部署到 GitHub Pages 子目录。所有字体采用系统字体，无第三方 CDN、分析脚本或运行时依赖。

## 修改内容

- 首页：`dist/index.html`
- 履历：`dist/resume.html`
- 项目：`dist/rice.html`、`assets.html`、`website.html`、`starbite.html`
- 全部原稿：`dist/portfolio.html`
- 样式及交互：`dist/style.css`、`dist/app.js`
- PDF：`dist/downloads/`

视觉参考 diffuspace.ai 的黑色背景、胶囊导航与点阵标题；光效由本网站 CSS 和 Canvas 绘制，未复制参考站的媒体素材。个人信息与项目原稿来自用户提供的两份 PDF。简历中的成果指标按简历原文呈现，各项目图稿保留原始口径。

作品及照片版权归其原权利人所有，不附带开源再使用授权。
