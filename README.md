# Grok Bot 实战案例库 · grokbot.itis.chat

xAI Grok Bot（@bot / @grok）真实用户实战案例库独立站，与 Muse 空间「Grok Bot 实战案例库」看板同源，
规格与 [Muse 实战案例库](https://muse.itis.chat/) 同款：中英双语、每条案例独立落地页、SEO 全量同步。

- 数据：`data.json`（中文全量）/ `data-en.json`（英文全量），由 Muse 看板导出组包，见 `SYNC-SPEC.md`
- 同步：`node sync-site-seo.js` 一键再生 fallback、详情页与 sitemap；推送 data 文件后 GitHub Actions 自动执行
- 托管：GitHub Pages（仓库 ai717/grokbot.itis.chat，分支 main）
