# Grok Bot 实战案例库独立站（grokbot.itis.chat）同步规范

定版日期：2026-11-16。规格与 muse.itis.chat 同款（狗爸爸指示：Grok Bot 看板发挥独立站作用，和 Muse 那个一样）。

## 生产环境
- **正式域名**：`https://grokbot.itis.chat/`
- **托管**：GitHub 仓库 `ai717/grokbot.itis.chat`（public，默认分支 `main`）+ GitHub Pages + 自定义域名（CNAME 文件已含 `grokbot.itis.chat`，DNS 由狗爸爸维护）
- **主题**：近黑底 + 电光柠檬绿，与 Grok Bot 看板同款配色，与 Muse 站（暖纸色）区分

## 站点如何读数据（app.js，与 Muse 站同构）
- 启动时并行 fetch `data.json`（中文）与 `data-en.json`（英文）；`/en/` 路径下用 `../` 前缀。
- fetch 失败时回退 `data-fallback.js` 的 `window.FALLBACK_DATA` 与 `data-en-fallback.js` 的 `window.FALLBACK_DATA_EN`。
- 语言：`/` = 中文，`/en/` = 英文整页副本；localStorage 键 `grokbot_site_lang_v1`、收藏键 `grokbot_case_favorites_v1`。
- 英文难度：en 文件 `difficulty` 保留中文，另加 `difficultyEn`（Beginner/Intermediate/Advanced）。

## 每期更新交付（全量累积版）
1. `data.json` — 中文全量：site/subject/exportedAt/source + categories（9 个，id 不许改：factcheck/news/image/video/content/coding/study/work/play）+ issues（新增一期：id 递增、date、caseCount、status=done）+ cases（全量累积，id 全局连续递增、不复用）。
2. `data-en.json` — 英文全量，结构与中文完全一致：id/category/score/heat/featured/issueDate/source.url 逐条对齐；其余文案英文化，每条带 difficultyEn；keyPrompt 原文英文保留、中文译英。
3. `UPDATE-NOTES-YYYY-MM-DD.md` — 本期变更清单（可放同步包目录，不入仓库根目录亦可）。

## 案例字段规范（每条 case）
id、title、valueLine、category、difficulty（入门/进阶/高阶）、score、heat、featured（全量仅最新一期头条为 true）、issueDate、background、steps（字符串数组）、keyPrompt（可空）、outputDesc、outputUrl（可空）、reproduceTips、pitfalls（可空）、source{name, platform, grade(A/B/C), url, publishedAt(可空)}。
- 看板 steps 为带序号的整段字符串，组包时按行拆分并去掉序号前缀；段落式 steps 按分号切分。
- 看板 reproduceTips 为空时，组包填标准说明句（中：原报道未单列复现要点；按上方步骤操作即可，涉及支付、验证码与对外发布等环节请本人确认后再执行。英：对应译句），不得编造原报道没有的复现细节。
- 数字纪律：标题与文案里的数字必须有 source 原文支撑。

## 同步流程（v1，与 Muse 站 v3 同款：直发 + 发后通知）
1. 看板每周二、五 12:00 刷新后，Muse 从看板 getState 全量导出，组双语同步包；英文初稿走 Pi 免费模型，Muse 逐条核数字/链接后定版。
2. 组包后本地实跑仓库版 `node sync-site-seo.js`，门禁 100% 通过才发布（门禁：id 连续、中英对齐、分类白名单、必填齐全、信源完整）。
3. 发布前复读仓库 data 文件 sha，与组包基准不一致就停下重组包，不硬推。
4. 经 GitHub API 提交 data.json + data-en.json 到 main（优先 Git Data API 单提交，避免双语中间态）；仓库 Actions 自动跑 sync-site-seo.js 再生 fallback/详情页/sitemap 并以 bot 身份回提交；Pages 随之发布。
5. 发布后验收：查 Actions 成功、线上 `/`、`/en/`、`/case/<新id>/`、sitemap、data-en.json 均为新版且 200；再发通知邮件到 evergreen333@gmail.com（主题「✅ Grok Bot 案例库第 N 期已同步（M月d日）」，含新增条数、全站总数、提交号、线上核验结果）。
6. 邮箱/手动投稿的 case：投稿本身即批准，免审核直发（与 Muse 站、羊毛站同一规矩），手动投稿日期不得用看板刷新日（防按 issueDate 整期覆盖）。

## 写入口分工
- 数据生产只有 Muse 一个写入口（看板采集 → 组包 → 直发）。本地 Antigravity 只优化网站本身，不跑入库、不手改生成物（fallback、case/、sitemap、en 预渲染卡片均为 sync-site-seo.js 生成）。
- GTM：grokbot 暂无独立 GTM 容器，sync-site-seo.js 的 GA_SNIPPET 为空、injectGA 为空操作；建好容器后填回片段即可（参考 muse 站 GTM-5GG9VBGS 的做法，GSC 验证可走 GTM）。
