window.FALLBACK_DATA = {
  "site": "Grok Bot 实战案例库",
  "subject": "xAI Grok Bot（@bot / @grok）真实用户实战案例",
  "exportedAt": "2026-11-16T10:30:00+08:00",
  "source": "Muse 空间 grok-bot-shi-zhan-an-li-ku 的 getState 结构化导出",
  "categories": [
    {
      "id": "factcheck",
      "name": "事实核查与辟谣",
      "hint": "@grok 核实真假、拆穿谣言"
    },
    {
      "id": "news",
      "name": "新闻与热点解读",
      "hint": "热点背景、舆论梳理"
    },
    {
      "id": "image",
      "name": "图片生成与编辑",
      "hint": "画图、改图、风格转换"
    },
    {
      "id": "video",
      "name": "视频生成",
      "hint": "文生视频、图生视频"
    },
    {
      "id": "content",
      "name": "内容创作与文案",
      "hint": "帖子、标题、脚本"
    },
    {
      "id": "coding",
      "name": "编程与技术问答",
      "hint": "写代码、解报错、讲原理"
    },
    {
      "id": "study",
      "name": "学习与研究",
      "hint": "查资料、读论文、学概念"
    },
    {
      "id": "work",
      "name": "工作效率与生意",
      "hint": "比价、商家运营、多 Bot 协作"
    },
    {
      "id": "play",
      "name": "趣味整活与高阶玩法",
      "hint": "Primary Bot、Bot 组合、跨工具集成"
    }
  ],
  "issues": [
    {
      "id": 1,
      "date": "2026-11-08",
      "caseCount": 12,
      "status": "done"
    },
    {
      "id": 2,
      "date": "2026-11-09",
      "caseCount": 1,
      "status": "done"
    },
    {
      "id": 3,
      "date": "2026-11-10",
      "caseCount": 11,
      "status": "done"
    },
    {
      "id": 4,
      "date": "2026-11-13",
      "caseCount": 8,
      "status": "done"
    }
  ],
  "cases": [
    {
      "id": 1,
      "title": "三人 Bot 团队三天把一个产品想法做成上线应用 Quiet Desk",
      "valueLine": "照着 PM/Design/QA 三 Bot 分工和现成角色 prompt，一个人也能把想法推到上线，只需回 yes/no 做审批。",
      "category": "coding",
      "difficulty": "进阶",
      "score": 92,
      "heat": 78,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "作者 Adam Faik 的 Markdown 笔记散落在多个 GitHub 仓库里、很难连起来读，他想做一个把仓库文件像书一样阅读、还能自动推荐相关文件和关系图谱的应用，但不想自己全程写代码盯进度。",
      "steps": [
        "从 x.ai/bot 下载 Grok Bot，用 Cursor 账号登录，确认套餐包含 Grok Bot（Premium 或旧版付费 Cursor 套餐）",
        "在 Cursor 仪表盘 Cloud Agents 里把默认模型设为 Grok 4.7 并关掉 Fast（默认开着、按两倍 token 计费）",
        "新建 PM Bot，只跟它对话：发角色说明让它负责到底、写 brief、调度其他 Bot，合并/部署/发布前必须先问作者，并在设置里加 Ask first 规则兜底",
        "再建 Design Bot（先定设计方向、每版评审截图）和 QA Bot（只测试不改代码，像新用户一样用并尝试弄坏它）",
        "把产品想法发给 PM Bot，它逐个提问澄清后写出 brief 并转给 Design Bot 定风格",
        "需要写代码时 PM Bot 启动 Cursor 云端编程 agent 干活，QA Bot 逐版测试回报问题",
        "作者三天里给 PM Bot 发了 42 条消息，一半只是 yes/OK/done，第三天晚上应用上线"
      ],
      "keyPrompt": "From now on, you are my PM Bot. Remember this role.",
      "outputDesc": "应用 Quiet Desk 已上线公开运行：可把 GitHub 仓库的 Markdown 按书页方式阅读，在示例仓库上识别出 248 对原文并无链接的相关文件对并画成关系图；Bots 借 Cursor agent 写的全部代码已公开在 GitHub 仓库 The-AI-Thinker/quiet-desk（原文给出仓库名与上线截图为证）。从发想法到首个构建启动只用了 20 分钟，作者本人只投入了几小时碎片时间。",
      "outputUrl": "",
      "reproduceTips": "需要含 Grok Bot 的套餐（文中 Premium 为每月 30 美元，旧付费 Cursor 套餐也可）；全程用量装进了一个 Premium 套餐的每周额度，托管免费。角色 prompt 作者在文中完整公开了 PM/Design/QA 三份，可直接改自己的产品名套用。",
      "pitfalls": "原文提醒：只写在 Bot 记忆里的规则只是引导，真正能拦住合并/部署的是 Auto-review 里的 Ask first 设置；第一个构建耗时超过两小时，别指望每步都快；每个 Bot 的每次回复（含 Bot 之间互发）都计用量，所以让 Design/QA 只在被 @ 时回复。",
      "source": {
        "name": "Adam Faik（The AI Thinker）",
        "platform": "Substack",
        "grade": "B",
        "url": "https://www.theaithinker.com/p/how-to-ship-an-app-with-a-team-of",
        "publishedAt": "2026-11-02"
      }
    },
    {
      "id": 2,
      "title": "非程序员 Uber 司机让 Grok Bot 建了自己的接单数据库：1.1 万张报价截图可自然语言查询",
      "valueLine": "把平台报价截图和收入导出喂给 Grok Bot 建库去重配对，普通司机也能用大白话查哪个时段、哪类单真正赚钱。",
      "category": "work",
      "difficulty": "入门",
      "score": 90,
      "heat": 58,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "作者 Levi 是纽约中部的 Uber 司机、不会编程。平台算法什么都知道，他却对报价规律一无所知：他想把接过和拒过的报价截图与实际收入记录配到一起，弄清哪些单跑完比看上去值、哪些不值。",
      "steps": [
        "用 GigU 自动截下每一张 Uber 报价卡（接单拒单都截），记录票价、接驾时间距离、行程时间距离、乘客评分等",
        "从 drivers.uber.com 按周导出收入与行程数据，并向 Uber 索取自 2020 年 2 月开车以来的历史个人数据",
        "把截图和数据交给 Grok Bot，说明目标：建报价与完成行程的数据库、识别重复记录、在信息足够可靠时把报价与实际行程配对",
        "告诉它自己的口径：车辆成本约每英里 30 美分、看重落点（别把自己扔到要空驶 30 英里回来的地方）",
        "建成后用自然语言提问，如哪些时段扣掉车辆成本后收入最高、哪类行程最容易拿到小费、今晚 GigU 的每英里/每小时/评分门槛怎么设",
        "设 Grok Bot 定时例行：检查新截图入库存、找新的完成行程记录，持续更新"
      ],
      "keyPrompt": "I drive Uber in [your market]. I want to build a database that helps me make better decisions about which trips to accept, when to drive, and where to drive.",
      "outputDesc": "数据库现状（原文给出具体规模）：约 11,722 张报价截图、6,909 条较新的行程记录、2,157 条报价已与完成行程成功配对，另有覆盖 13,384 趟行程、约 300 周汇总的历史数据；作者现在出车前先问库里该时段该区域的建议再去更新 GigU 设置。",
      "outputUrl": "",
      "reproduceTips": "需要 Grok Bot 账号；数据侧只需 GigU 截图（2026 年内免费）加 Uber 官方导出，不需要会写代码；作者建议先攒几周报价再开建，几个月后门槛设置才有统计意义。",
      "pitfalls": "原文提醒：截图和行程数据含敏感信息，只给 agent 限定文件夹、绝不给密码/银行截图/验证码；agent 会看错截图、配错记录或样本太小时下结论，重要结论要问样本量并回原始数据核对；别把营业额当利润，要扣车辆成本、等待和空驶。",
      "source": {
        "name": "Levi Spires",
        "platform": "博客",
        "grade": "B",
        "url": "https://www.levispires.com/uber-driver-blog/algorithm-so-do-i-heres-how-to-build-your-own",
        "publishedAt": "2026-10-23"
      }
    },
    {
      "id": 3,
      "title": "让 Grok Bot 读代码库批量生图：两小时生成 74 张游戏卡牌素材并接回游戏",
      "valueLine": "把占位图清理这种逐张手活整包交给 Bot：它自己读代码搞清每张图是什么、逐张写 prompt 生图、裁成透明 PNG 再接回工程。",
      "category": "image",
      "difficulty": "进阶",
      "score": 89,
      "heat": 85,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "独立游戏开发者 Danny Limanseta 在做一款第一人称 roguelike 卡组构筑游戏，工程里堆满占位图，以前靠他一张一张手动生成替换。他拿到 Grok Bot 早期内测约一周，想先拿这件最烦的活开刀。",
      "steps": [
        "把自己已有的美术生成工具网页指给 Grok Bot，让它通过该页面干活（而不是换一个新模型）",
        "让 Bot 读游戏代码库，自己弄清每个占位图对应的用途",
        "Bot 为每个素材逐个撰写定制生图 prompt 并生成图片",
        "Bot 把成品裁剪、清理成透明背景 PNG",
        "Bot 把 74 张素材全部接回游戏工程，作者在游戏里统一验收"
      ],
      "keyPrompt": "",
      "outputDesc": "原文（作者 X 原帖，经 Agents In Use 逐项核对原帖后整理）称：约两小时产出 74 张清理裁剪完毕的卡牌素材并全部接入游戏，替代了原来逐张手动的流程，作者之后所有美术素材活都走 Grok Bot；同帖还提到它建了加速试玩的技能、GitHub 推送自动上传 itch.io 的流水线、经 Figma MCP 从 PRD 出 UX 流程与线框图。原帖在 X 上约 992 个点赞、37.5 万浏览（grokbot.dev 用例页数据）。",
      "outputUrl": "https://x.com/DannyLimanseta/status/2087228218797617404",
      "reproduceTips": "需要 Grok Bot 账号和一个可网页访问的自有生图工具/页面；原帖没有公开逐字 prompt，复现时按步骤把工具地址和代码库给 Bot、让它先列占位图清单再批量执行；本条来源页的 suggested prompt 是整理方自拟、非作者原文，故关键提问留空。",
      "pitfalls": "原文附带提及的边界：Bot 顺手做的退订营销邮件清理漏掉了几封，批量自动活仍要抽查；试玩加速技能的速度作者还在继续调。",
      "source": {
        "name": "Danny Limanseta（@DannyLimanseta），经 Agents In Use 整理核对",
        "platform": "X",
        "grade": "B",
        "url": "https://agentsinuse.com/use-cases/grok-bot-to-generate-and-wire-in-game-art-assets/",
        "publishedAt": "2026-08-11"
      }
    },
    {
      "id": 4,
      "title": "16 个 Grok Bot 编排编程 agent 一周合并 78 个 PR，又因烧钱停用",
      "valueLine": "学会用 webhook+例行把编程线程的盯梢工作交给 Bot 团队：作者一周合并 PR 数从历史最佳 35 个涨到 78 个，也学到了成本失控的边界。",
      "category": "coding",
      "difficulty": "高阶",
      "score": 88,
      "heat": 72,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "作者写代码用 T3 Code（并排跑 Claude Code 与 Codex 线程），真正磨人的是编程之外的事：哪些 PR 在等评审、昨晚跑完了什么、接下来做什么。他想把这份心智负担交给一支常驻 Bot 团队。",
      "steps": [
        "在 Grok Bot 里按工作领域建 16 个 Bot（Inbox、GitHub、Bugs、Blog、Research 等），另设 Config Bot 专门配置其他 Bot、Vault Bot 独占笔记写入权",
        "项目需要多人协作时把相关 Bot 拉进群聊，声明本群只做这个项目",
        "本地写一个无 AI 的小脚本：编程线程完成/失败/需要人时 ping GrokBot 的 webhook，唤醒 T3 Code Bot 来通知或反向操作，避免把本机经公网隧道暴露",
        "设两条例行扛主力：GitHub Bot 盯 PR，评审一通过就通知对应编程线程去落地（它自己从不合并，有个 PR 在通过后 2 分钟就落地）",
        "每个工作日三次，Inbox/日历/日志 Bot 汇总所见，Vault Bot 整理成排好序的优先级看板"
      ],
      "keyPrompt": "",
      "outputDesc": "一周内作者与 Bot 团队配合合并了 78 个 pull request（其历史最佳是 35 个）；优先级看板落在文档应用里随时可查，原文配有 10 月 9 日当天 24 个编程线程的通知送达情况图（17 个准时、3 个迟到、4 个从没通知）。",
      "outputUrl": "",
      "reproduceTips": "需要 Grok Bot 付费套餐（作者当时已升到 200 美元档）加自己的编程 agent 工具；关键技巧是事件走 webhook 唤醒、不要用定时轮询，且先给事件加一层普通代码过滤器再唤醒 Bot。",
      "pitfalls": "原文重点踩坑：周末无人时通知器每个事件都唤醒 Bot、Bot 思考后决定没什么可说的，一周末烧掉 100 美元并撞停支出上限、所有例行和 webhook 随之失效；设计好的过滤器（可砍约 80% 流量）Bot 建好了却没人启用，事件继续每天唤醒 Bot 500–750 次；云电脑闲置会休眠，定时任务迟到 12–80 分钟；10 月 9 日 24 个线程完成只通知了 20 个。作者最终停用整套系统。",
      "source": {
        "name": "Builder.io 博客（作者为 Builder 团队成员）",
        "platform": "博客",
        "grade": "B",
        "url": "https://site.builder.io/blog/grokbot-review",
        "publishedAt": "2026-10-15"
      }
    },
    {
      "id": 5,
      "title": "五周实战：从 Chief of Staff 到 Bot 团队，把品牌合作邮件和内容例行交给 Grok Bot",
      "valueLine": "照七级路线搭：先一个会反问的首席幕僚 Bot、再关发送权、设 ask first、把重复活存成技能上例行，小生意就能稳稳外包一块运营。",
      "category": "work",
      "difficulty": "进阶",
      "score": 87,
      "heat": 64,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "创作者 Brooke（Wright Mode）用 Grok Bot 跑了五周自己生意的一部分：周一简报、品牌合作邮件初筛、会员运营、社媒选题。她把从单 Bot 到团队的完整搭建顺序复盘成七级，供新手照做。",
      "steps": [
        "先建 Chief of Staff Bot：填好客户、产品、工作习惯和卡点，最后一句让它反问 5 个问题把业务背景问透（原文 prompt 见关键提问）",
        "只连两个应用（邮箱+日历），在 Gmail 权限里开创建草稿、关发送——Bot 天生主动，发送开着它真会把邮件发出去",
        "在 Settings → General → Auto-review 写四条 ask first：发送、发布、删除、购买前都要先问我",
        "把重复活变技能：干完满意就说 Save this as a skill，或用 Teach a Task 自己演示一遍（最长录 10 分钟）让它照着学",
        "把技能上例行交给 Chief of Staff 安排：每天查日历和邮件只标真正要紧的，品牌合作邮件打标签转给邮箱经理 Jerry 先核品牌是否靠谱、是否合受众，过了才给作者看",
        "再加专职 Bot 并设中层：Skool Concierge 和新会员引导 Bot 向会员运营主管汇报，只有需要 yes/no 时才打扰作者；社媒经理 Bot 每周一研究 AI 新闻与 X/Reddit 热点，把选题丢进 Slack 待拍"
      ],
      "keyPrompt": "You're my Chief of Staff. I run my business. Here's who my customers are. Here's what I sell. Here's how I like to work. Here's things that I get stuck on. Ask me 5 questions so you understand my business context properly and so you can actually be an effective Chief of Staff for me.",
      "outputDesc": "运行五周后的日常产出（原文及截图为证）：Chief of Staff 每周一给简报并调度下属 Bot；邮箱按 High Priority/Promotional/Brand Deals 分类打标，周二到周五每天两次分诊；品牌合作先经 Jerry 核查才到作者面前；社媒经理每周一交短视频选题到 Slack。",
      "outputUrl": "",
      "reproduceTips": "需要付费套餐（2026-10-12 起新订阅为 X 订阅 Premium 30 美元/月起，已有 SuperGrok 或 Cursor 套餐也可）；录屏素材拍于 2026-09-17，价格与功能作者于 2026-10-23 对照 xAI 与 Cursor 官方页核过。",
      "pitfalls": "原文踩坑：审批请求约 10 分钟不答就过期、任务直接不跑，早上发现昨晚的活没干先查审批队列；多个 Bot 在群聊里互聊会飞快烧用量（论坛有人五 Bot 聊了 7 小时），要设中层主管且用 @ 点名单个 Bot；所有 Bot 共享一台电脑和登录态，分名分工不等于权限隔离，别连第一周就不敢交给新外包的东西、更别连银行；密码绝不粘进聊天，走接管屏幕或安全表单。",
      "source": {
        "name": "Brooke Wright（Wright Mode）",
        "platform": "博客",
        "grade": "B",
        "url": "https://www.wrightmode.com/blog/how-to-use-grok-bot",
        "publishedAt": ""
      }
    },
    {
      "id": 6,
      "title": "用一队 Grok Bot 运营个人博客一周：发 2 篇带计算器的文章和一条 34 秒视频",
      "valueLine": "给 Bot 团队里专门留一个唱反调的角色，能在一周内稳稳产出可直接上线的文章、封面和视频，且错误在发布前被同伴揪出。",
      "category": "content",
      "difficulty": "进阶",
      "score": 86,
      "heat": 55,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "博主 Cristian Gómez 工作线多于时间，想验证 Grok Bot 团队能不能真正替他跑一周博客：不是出草稿，而是把成品直接上线并自我核验。",
      "steps": [
        "建一个 chief of staff Bot 统筹全局，另建 content writer、branding lead、researcher 三个专职 Bot（外加几个处理个人事务的 Bot，不在评测内）",
        "各 Bot 角色、记忆、对话相互独立，彼此直接发消息交接，共享同一台云电脑但各有桌面",
        "把一周的写作、改稿、配图、视频、加分享按钮等任务交给团队推进，博主只做最终把关人",
        "改稿上线后让执行 Bot 自己去抓线上页面和 RSS 验证生效，而不是默认合并成功",
        "专门保留一个会唱反调的 Bot：回溯一手来源核对数字与状态，发现同伴错了直接指出"
      ],
      "keyPrompt": "",
      "outputDesc": "一周（2026 年 10 月 26–30 日）成果（原文逐项列明）：合并 6 个 PR、上线 2 篇各带可用计算器的文章、用代码生成 2 张封面、渲染一条 34 秒带字幕视频（数字变了还重渲了一遍）、给全部文章加上分享按钮；其中一篇把创始人自报数字误改成 107，被内容 Bot 回溯原帖后当天改回。",
      "outputUrl": "",
      "reproduceTips": "需要 Grok Bot 付费套餐（作者当时 30 美元/月档，文中说升 Premium 为 50 美元）；前提是有人愿意逐条核查产出再发布，不适合无人值守直接上线。",
      "pitfalls": "原文记录的失败模式都是过度自信：一个修好的测试其实根本测不到出问题格式却报通过；一个 Bot 把昨晚已合并的 PR 说成未合并（用了过期状态）；推送成功但部署因提交邮箱未验证而没跑；视频画面里出现编造的算术数字、被迫两度标注为示意。结论：必须设专职唱反调的 Bot，上线前由人复核。",
      "source": {
        "name": "Cristian Gómez（mrgomez.net）",
        "platform": "博客",
        "grade": "B",
        "url": "https://www.mrgomez.net/reviews/grokbot/",
        "publishedAt": ""
      }
    },
    {
      "id": 7,
      "title": "官方指南：一个项目一个频道，用 projects Manager Bot 统管多支 Grok Bot 团队",
      "valueLine": "多项目并行时照这套一项目一频道一名单的结构搭，Bot 卡住会自己标 Blocked 并在频道里 @ 你，不用挨个聊天窗口巡逻。",
      "category": "play",
      "difficulty": "进阶",
      "score": 84,
      "heat": 60,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "xAI 官网 Grok Bot Guides 的作者 Eric Zakariasson 平时把 Coder、Writer、Researcher 放在不同聊天里单跑，一旦同时推进几个项目就分不清信号与噪声、Bot 之间也难同步，于是把人类团队的项目制搬了过来（他注明这仍是实验中的模式）。",
      "steps": [
        "在 Notion 建两个数据库：Projects 和 Tasks",
        "创建一个 projects Manager Bot 负责元工作，给它装 Project Ops 技能：建项目、开频道、按需配人",
        "定三条配人规则：优先复用已有 Bot（Coder/Researcher/Writer 等）；每个频道除 PM 外最多再提 5 个 Bot（频道上限 6 个）；台上没有合适的才新建 Bot，且必须先经作者同意",
        "每个项目对应 Grok Bot 里一个频道和 Notion 里一条项目记录，频道成员就是该项目的 Bot 名单",
        "在频道里和名单一起拆任务，PM Bot 常驻频道盯进度、保持数据库更新",
        "Bot 卡住或缺输入时把任务标成 Blocked 并在频道里 ping 作者，其余时间作者只需看任务卡在看板上移动"
      ],
      "keyPrompt": "",
      "outputDesc": "产出是一套可直接照搬的多团队协作结构：项目频道+成员名单截图、Notion Projects 数据库与 Tasks 看板截图均在原文中展示，任务卡会随 Bot 干活在看板上移动。",
      "outputUrl": "",
      "reproduceTips": "需要 Grok Bot 账号并连接 Notion；这是 xAI 官网指南栏目的一手玩法（A 级信源），但作者明确说仍属实验模式、频道 6 个 Bot 上限是他自定的经验值。",
      "pitfalls": "",
      "source": {
        "name": "Eric Zakariasson（xAI Grok Bot Guides）",
        "platform": "xAI 官网",
        "grade": "A",
        "url": "https://x.ai/bot/guides/how-i-run-multiple-teams-of-grok-bots",
        "publishedAt": ""
      }
    },
    {
      "id": 8,
      "title": "给 Grok Bot 建一个 Learning Scout：按水平和每周 4 小时自动拼学习计划",
      "valueLine": "把选课这种反复查页面的活做成专职 Bot：给它学员画像和时间预算，它逐页核对级别与时长后交一份不超时的学习计划，还能存成每周例行。",
      "category": "study",
      "difficulty": "入门",
      "score": 83,
      "heat": 48,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "DataCamp 教程团队实测 Grok Bot 的技能/例行/审批机制，选了一个真实学习场景落地：学员会 Python、懂基本 LLM 概念、刚接触 agent 编排，每周只有 4 小时，而目标轨道总时长 6 小时装不下，需要有人替他挑、排序并卡总时长。",
      "steps": [
        "从 Grok Bot 入口页下载桌面端，用 Cursor 账号登录（Grok Bot 无永久免费档，付费走合资格 Cursor 套餐或 SuperGrok）",
        "New 新建 Bot 命名 Scout，在 Edit Profile 写长期规则：只做 DataCamp 学习内容策展并匹配水平与时间预算；把画像当背景而不是任务、等单独消息再开工；每个候选必须打开它自己的课程页才能推荐；级别和时长照页面原文引用、页面没写就写 not listed；保留来源链接、绝不编课程信息",
        "把易变的学员信息写进云电脑上的 /workspace/learner-profile.md 作为每周运行的事实源（目标、预算、背景、偏好、已学完清单）",
        "发本周任务（原文见关键提问）：要求打开每个候选页核对、总时长不超过 4 小时、从基础到实操排序、每项给标题/类型/级别/时长/链接/适配理由/顺序，最后给总时长和本周目标，做完即停、不许擅自报名",
        "在 Agent Computer 里盯它真的逐页打开核对而不是抄搜索摘要，逐行验收链接、级别、先修和总时长",
        "验收通过后把流程存成技能并挂每周例行，下周只更新画像文件即可重跑"
      ],
      "keyPrompt": "Build me a weekly DataCamp learning plan. The learner is comfortable with Python, understands basic LLM concepts, is new to AI agent orchestration, and has 4 hours available this week.",
      "outputDesc": "实测产出：Scout 返回了一份通过逐页核对的学习计划，含每项资源的标题、类型、页面原文级别与时长、链接、适配理由和学习顺序，总时长卡在 4 小时内并给出本周目标；过程中它打开了 Introduction to AI Agents 页面（页面标 Basic、1 小时 30 分），时长对上了但级别抄错，被作者在验收环节抓出并纠正（原文截图与过程记录为证）。",
      "outputUrl": "",
      "reproduceTips": "需要 Grok Bot 付费访问（Cursor Pro/Pro+/Ultra、Teams 或 SuperGrok 等，文中称最新公告后 SuperGrok 与 Cursor Pro 均含）；注意 Grok Bot 要求云端数据存储，Cursor 账号开着 Legacy Privacy Mode 会启动不了；研究环节只查公开页面、不需要 DataCamp 登录。",
      "pitfalls": "原文实测踩坑：第一次建 Scout 时它把画像描述当成任务直接开跑、跑出一份无关的 ETL 计划，要重建并补两条等待规则（目标含糊先提问、不许擅自建号/报名/购买）；摘要会过期或漏级别时长，只能用它找候选、结论必须以课程页为准；页面被挡、要登录或出 CAPTCHA 时应让 Bot 停下来叫人接管，且不要把密码粘进聊天；删掉 Bot 不等于清掉共享电脑上的文件和登录态。",
      "source": {
        "name": "DataCamp 教程团队",
        "platform": "DataCamp",
        "grade": "C",
        "url": "https://www.datacamp.com/tutorial/grok-bot-tutorial",
        "publishedAt": ""
      }
    },
    {
      "id": 9,
      "title": "六 Bot 团队接管网店两天实测：老板 Bot 拍板、页面 Bot 定时发品、广告 Bot 清旧广告",
      "valueLine": "看看一个人怎么用六个分工 Bot 跑网店的选品、货源、发品和广告，以及它真实卡住的地方——没有销售数据就直说没有。",
      "category": "work",
      "difficulty": "进阶",
      "score": 80,
      "heat": 52,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "作者运营一个网店，想验证 Grok Bot 是不是玩具：设一次、Bot 自己持续干，而不是每次都要他下命令。他另有一个 Axagen 副业也要 Bot 帮忙管邮箱和社区。",
      "steps": [
        "装 Grok Bot 桌面端开免费试用（需绑卡验证），按一岗一 Bot 建：名字、头像、标签（营销/行政/研究）和职责描述，描述也可以直接在聊天里说给 Bot、它自己填",
        "让 Bot 互相认识：在聊天里告诉它另一个 Bot 是谁、是它的伙伴，两个老板 Bot 置顶方便找",
        "组网店团队：Mano Master 老板 Bot 看网站拍板产品上不上架；Facebook 页面 Bot 设定例行，工作日 10:00 和 16:00 检查网站新品并自动发帖、删差评；Facebook 广告 Bot 走 Facebook API 接管广告（已让它删掉旧广告，完成得很干净）；选品研究 Bot 去 Facebook 广告库和竞品网站找在卖的产品；AliExpress 货源 Bot 按研究 Bot 给的思路找同类货源（只看对方发来的截图）；Fixer Bot 修网站问题",
        "第二个老板 Bot 在 Plugins 里连 Gmail 和 Google Calendar（点 Authorize 浏览器确认即可），让它读邮件、分析 YouTube 频道、读 Skool 社区给活跃建议"
      ],
      "keyPrompt": "",
      "outputDesc": "两天实测结果表（原文逐项）：本地电脑任务（给录视频的软件做配置）几分钟完成；广告 Bot 删除旧广告完成；页面 Bot 例行已按工作日 10:00/16:00 运行；选品到货源的交接在视频里直播跑通但没当场上架新品；用量表刚重置显示 7%→8%。作者明说销售、流量、广告效果都没测到，不编数字。",
      "outputUrl": "",
      "reproduceTips": "需要 Grok Bot（免费试用要绑卡）；广告 Bot 建议走 Facebook API 而不是点 Ads Manager 界面；没内置插件的应用可经 Zapier 连接；本文由作者视频整理成文，DEV 页面内嵌完整实测视频可对照。",
      "pitfalls": "原文踩坑：Bot 会被 CAPTCHA 卡住，要自己解完点 I'm done 它才继续；Skool 登录超时需手动重登；搭建期频繁弹审批比较费时；速度比人慢，优势是关机后云端继续跑；各 Bot 登录态实际共享，在一台上登了 Facebook 其他 Bot 也能用，权限别想当然。",
      "source": {
        "name": "Janek Zarin / Axagen（DEV Community）",
        "platform": "博客",
        "grade": "B",
        "url": "https://dev.to/axagen/i-set-up-grok-bot-as-a-team-of-ai-agents-for-my-web-shop-first-days-and-what-broke-4a38",
        "publishedAt": "2026-10-27"
      }
    },
    {
      "id": 10,
      "title": "Newsly 新闻 Bot + Scriptly 脚本 Bot 接力：每日 AI 新闻简报自动变口播脚本",
      "valueLine": "用两个 Bot 接力把每天看新闻这件事流水线化：一个收新闻进表格，一个把研究直接改成脚本，人只在群里验收。",
      "category": "news",
      "difficulty": "入门",
      "score": 78,
      "heat": 70,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "YouTube 创作者 Papa React（Sonny Sangha）在自己生意里用 Grok Bot 团队，最烦的是每天收收据、追新闻、写脚本三件重复活，他用一条视频完整演示了从建团队到出成果的全过程。",
      "steps": [
        "定制 Primary Bot「Chief」作为总管，理解记忆、技能、例行和审批边界",
        "建 Expensely 费用 Bot：连 Gmail 和 Notion 追踪收据，再用 Teach a task 把在 Buffer 里处理发票的浏览器操作演示一遍、存成可复用技能",
        "建 Newsly 新闻 Bot：每天收集 AI 新闻做成日报，把选题追踪进 Google Sheets（作者免费分享了 Newsly 模板，导入后连自己的账号即可个性化）",
        "建 Scriptly 脚本 Bot：通过 Bot 间消息和群聊接过 Newsly 的研究成果、直接转成口播脚本",
        "把 Bot 拉进群聊协作，每天开站会验收新闻到脚本的接力成果，手机上也能继续对话和管理整个团队"
      ],
      "keyPrompt": "",
      "outputDesc": "视频里实际跑出的产出：收据被整理进 Notion、每日新闻日报生成并把条目记进 Google Sheets、研究成果经 Bot 接力变成现成脚本，站会环节展示了新闻到脚本的完整结果（视频章节与实机演示为证）；视频为 GrokPartner 赞助，作者声明观点为其本人。",
      "outputUrl": "",
      "reproduceTips": "需要 Grok Bot 账号并连接 Gmail、Notion、Google Sheets；Newsly 有作者提供的免费模板链接（在视频简介里）可直接导入改造成自己的新闻助手，全程无需写代码。",
      "pitfalls": "视频简介注明为赞助内容，效果表述需打折看；涉及发邮件、付款等敏感动作要在 Bot 里先设好审批规则再放手。",
      "source": {
        "name": "Papa React（Sonny Sangha）",
        "platform": "YouTube",
        "grade": "B",
        "url": "https://www.youtube.com/watch?v=cK_PXkonWp8",
        "publishedAt": ""
      }
    },
    {
      "id": 11,
      "title": "用 Grok Bot 做 X 内容增长例行：24 小时爆款扫描、五角度改稿与发布后复盘",
      "valueLine": "把找选题从刷时间线变成 Bot 的每日例行：先看赛道里真正跑出来的帖、存原链接拆钩子，再让 Bot 出角度、发完回收数据复盘。",
      "category": "content",
      "difficulty": "进阶",
      "score": 74,
      "heat": 82,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "Steal What Works 复盘了 Grok Bot 第一方 X 连接上线后的增长玩法：创作者手动找选题、记住谁的帖跑出来了、发完再复盘，既耗时又不系统。文中汇总了多个公开实操案例，包括 ScottyBeamIO 的完整例行和一对兄弟用 Grok Bot 运营三个账号的数据。",
      "steps": [
        "在 Grok Bot 里连接自己的 X 账号（付费套餐会自带开发者账号开通与部分 X API 额度）",
        "设每日研究例行：Bot 搜索帖子、读时间线、查提及，扫过去 24 小时赛道里相对该账号平时表现异常跑出的帖",
        "让 Bot 保存原始链接、指出每条的钩子并解释为什么可能有效，而不是直接让它预测什么会爆",
        "把自己的一手素材（客户对话、截图、产品更新、踩坑、数字、观点）喂给 Bot，让它围绕已验证的话题生成五个不同角度的候选稿",
        "人工定稿发布（自动点赞、激进取关、无差别关键词回复被 X 规则限制或禁止，互动环节保留人工）",
        "发布后让 Bot 回收数据做分析，把题材、形式、时段与结果的规律记进长期记忆、喂给下一轮选题"
      ],
      "keyPrompt": "",
      "outputDesc": "文中披露的最大公开案例：一对兄弟用 Grok Bot 支撑三个 X 账号运营，合计报告 6980 万次展示、32.1 万点赞、31.9 万收藏；ScottyBeamIO 晒出该例行的 X 原帖本身约 450 万浏览。原文同时明确归因警告：没有对照实验、也没有干净的涨粉序列，只能证明这套流程能在很大规模上运转，不能把数字全算在 Bot 头上。",
      "outputUrl": "",
      "reproduceTips": "需要含 X 连接的 Grok Bot 付费套餐（文中以 30 美元/月估算值不值：每周能省下几小时研究准备就回本）；发帖排期目前靠 X API 或 Pallyy、OmniSocials 等第三方集成，原生连接主要是读和研究。",
      "pitfalls": "原文提醒：Bot 能找到已经跑出来的帖、但不能可靠预测下一条爆款；只喂泛泛输入产出就会迅速同质化；靠量取胜堆 AI 帖会招 X 的反垃圾规则，七条扎实帖胜过七十条水帖；目前没有公开证据能证明 Bot 带来可预测的涨粉，把它当选题与复盘工具而不是增长保证。",
      "source": {
        "name": "Steal What Works",
        "platform": "博客",
        "grade": "B",
        "url": "https://stealwhatworks.com/blogs/news/grok-bot-grow-x-account",
        "publishedAt": "2026-08-30"
      }
    },
    {
      "id": 12,
      "title": "@grok 核查翻车实录：用户问爆款照片多老，Grok 咬定是昨天的新闻图",
      "valueLine": "这是 @grok 事实核查最典型的用法、也是最值得记的一课：问法极简单，但 Bot 会顺着假帖编出细节，重要信息必须再用反向搜图等可靠方法复核。",
      "category": "factcheck",
      "difficulty": "入门",
      "score": 62,
      "heat": 66,
      "featured": false,
      "issueDate": "2026-11-08",
      "background": "南非 X 上一条浏览量超 20 万的帖子声称一名莫桑比克理发店女主因拿不出营业执照在约翰内斯堡被捕，配图疯传。围观用户想核实真假，顺手在帖子下 @grok 提问——这正是 X 上最常见的核查动作。事实核查机构 Africa Check 随后介入并记录了全过程。",
      "steps": [
        "用户在原帖下回复 @grok 提问照片的拍摄时间（原文问题见关键提问，该评论与回复后来均被删除，Africa Check 留有引文记录）",
        "Grok 直接在帖子下公开回复，给出具体日期地点并称搜不到更早出处、确认照片是 24 小时内拍的",
        "另一条 @grok 回复虽未复述原帖假话，也没有辟谣，仍暗示照片是许可证纠纷",
        "Africa Check 用反向图片搜索核对：照片其实是 Sunday Times 摄影师 Esa Alexander 2019 年 10 月在开普敦拍的，画面是警方清走在联合国难民署门前静坐的难民，与约翰内斯堡、2025 年、营业执照全不相干"
      ],
      "keyPrompt": "@grok how old is this picture",
      "outputDesc": "产出证据是 Grok 的原回复被 Africa Check 逐字引用：它声称照片拍的是 2025 年 10 月 28 日早上约翰内斯堡的逮捕、搜不到更早版本、确认不足 24 小时——经核查全错。Africa Check 结论：当准确性重要时，AI 聊天机器人应被视为不可信来源，核查要用其站内的反向搜图等指南方法。",
      "outputUrl": "",
      "reproduceTips": "复现门槛最低：在 X 任意帖子下回复 @grok 加问题即可（Ask Grok 为帖内公开回复）；但正确用法是把它的回答当线索，重要结论必须再用反向搜图、原始出处等独立方法验证一遍。",
      "pitfalls": "本条就是踩坑本身：Grok 在这次核查中不但没有拆穿假帖，反而编造日期、地点和已搜索确认的说法给假消息背书；@grok 的回答是公开帖内回复、错了会继续传播，且涉事评论与回复已被删除、只能靠第三方记录追溯。",
      "source": {
        "name": "Africa Check",
        "platform": "Africa Check",
        "grade": "C",
        "url": "https://africacheck.org/fact-checks/meta-programme-fact-checks/no-viral-photo-doesnt-show-mozambican-woman-arrested",
        "publishedAt": "2025-11-06"
      }
    },
    {
      "id": 13,
      "title": "从 189 个仓库里挑出 20 件 Grok Bot 开源装备：联网、邮件、桥接、保活与中文配方一次配齐",
      "valueLine": "不用自己翻 GitHub：这份清单把能直接给 Grok Bot 加能力的社区项目按痛点分好了类，先挑一件装上、派个有明确终点的活跑通再说。",
      "category": "play",
      "difficulty": "进阶",
      "score": 76,
      "heat": 52,
      "featured": false,
      "issueDate": "2026-11-09",
      "background": "作者雨哥向前冲长期实测 Grok Bot 等 AI 工具。他说组团队、派活那类内容大家已经刷得很多，真正缺的是给 Grok Bot 本体加装备的工具选型：他自称在 GitHub 上搜到 189 个 Grok Bot 相关仓库，这次只挑能直接给它加能力的 20 个，按用途分好类发了出来，并配了两张图（一张全清单、一张按痛点选装备的对照图）。",
      "steps": [
        "先按痛点定位分类：让它会得更多（01-06）、长任务和省额度（07-10）、中文抄作业（11-15）、桌面硬件（16-17）、没有 Grok Bot 也能玩的替代品（18-20）",
        "只挑一件先装：想让它自己上网查资料选 web-access；工作邮件在 QQ、163、腾讯企业邮选 cn-mail-mcp；写代码时不想切出去派活选作者自研的 grokbot-bridge-mcp；长任务总被云电脑休眠冻住先配 bot-keepalive + Wake on Done；额度总不够先看 grokbot-local-agent 与 grokbot-usage-cli",
        "打开对应的 GitHub 仓库，先看 README 和它要的权限再决定装不装（原帖收录的 20 个仓库链接都在原帖正文里）",
        "按仓库说明接入自己的 Grok Bot；涉及邮箱的 cn-mail-mcp 默认只读、用授权码不用密码",
        "装好后先派一个有明确终点的小任务验收，跑通了再考虑加第二件"
      ],
      "keyPrompt": "",
      "outputDesc": "这份清单本身就是产出：20 个项目逐个写明用途，分 5 类呈现——联网补强 web-access、一键剪藏 grok-bot-clipper、国内邮箱 MCP、Cursor/Codex/Claude Code 里一句话派活的 bridge、终端管理 CLI、Telegram 桥；保活与额度组有 bot-keepalive、Wake on Done、本地 Pi 跑重活省额度的 grokbot-local-agent、查本周额度的 usage-cli；中文组有配方库 awesome-grokbot-playbooks 与《Grok Bot 橙皮书》等；硬件组是两款 ESP32/M5Stack 桌面设备。原帖截至读取时 47,205 次观看、6 次书签，配图 2 给出了痛点到编号的对照选法。文中 189 个仓库、配方库 197 条目、橙皮书 1.6 万字等数字均为作者原帖说法。",
      "outputUrl": "",
      "reproduceTips": "需要 Grok Bot 账号；部分桥接与保活项目另需自己的 Cursor、Codex 或 Claude Code 环境，本地跑重活的项目需自备模型账号。中文用户门槛最低的入手顺序是先看中文抄作业组（11-15）的配方库与橙皮书，再按痛点装一件工具。",
      "pitfalls": "原帖明确提醒：这 20 个都是社区项目、不是官方出的，装之前先看清它要哪些权限。另注意：第 04 条 grokbot-bridge-mcp 是作者自己写的，有自荐成分；《Grok Bot 橙皮书》是今年 8 月写的，作者自己说部分细节以官方为准；18-20 是没有 Grok Bot 时的开源替代，不是 Grok Bot 本体的扩展，选时别混淆；作者的结论也是装备多不等于干得多，先跑通一件再说。清单里各仓库的具体数字（条目数、字数、翻车记录数）为原帖说法，本库未逐仓复核。",
      "source": {
        "name": "雨哥向前冲（@xiangxiang103）",
        "platform": "X",
        "grade": "B",
        "url": "https://x.com/xiangxiang103/status/2119630459860820472",
        "publishedAt": "2026-11-09"
      }
    },
    {
      "id": 14,
      "title": "花店老板用 Grok Bot 组 12 人 AI 团队",
      "valueLine": "一人开两家店也能有团队：每个 Bot 一个岗位，只出草稿等人批。",
      "category": "work",
      "difficulty": "进阶",
      "score": 88,
      "heat": 65,
      "featured": false,
      "issueDate": "2026-11-10",
      "background": "Tye Gordon 经营花店并兼旅行顾问，一人身兼多职雇不起人，杂事淹没了喜欢的工作。",
      "steps": [
        "按岗位逐个建 Bot，一 Bot 一件事，写清职责与边界",
        "Morgan 总管：每日优先级看板、15:47 提醒、当天复盘，新线索 1 个工作日内回复",
        "Hope 客服：起草客户回复，婚礼与活动咨询约 Google Meet",
        "Blair 营销：写排期各平台帖子，先起草经批准再发，还写博客与节日内容",
        "再建销售、旅行研究、花艺、财务、视频剪辑、修图、调研等 Bot",
        "铁律：对外邮件帖子回复一律先起草，本人看过才发。"
      ],
      "keyPrompt": "",
      "outputDesc": "一支分工明确的 Bot 团队：每日看板与提醒、客服草稿与预约、各平台帖子博客、Theo 把手机素材剪成带音乐字幕的品牌短视频（路人脸打码）。未给可核验量化数字。",
      "outputUrl": "",
      "reproduceTips": "需 Grok Bot 订阅与 App，先接 Gmail、日历；对外发送设先问我审批。",
      "pitfalls": "不要让 Bot 直接对外发东西，草稿须本人过目；先从小任务建立信任再扩权。",
      "source": {
        "name": "Tye Gordon",
        "platform": "博客",
        "grade": "B",
        "url": "https://tyeinbloom.com/afford-to-hire-help-built-team-grok-bot/",
        "publishedAt": "2026-11-03"
      }
    },
    {
      "id": 15,
      "title": "Grok Bot 团队成员 11 条建队心得：一夜 90 万浏览",
      "valueLine": "别再堆 Bot 数量：少量好 Bot 加自写技能加慢例行，才是官方团队自己的管法。",
      "category": "study",
      "difficulty": "进阶",
      "score": 85,
      "heat": 92,
      "featured": false,
      "issueDate": "2026-11-10",
      "background": "Grok Bot 团队成员 Lauren 于 2026 年 10 月 31 日晚在 X 发了建高质量 Bot 与管团队的短指南，一天内浏览超 90 万次，被 Garry Tan 转发；指南末尾写着让 @bot 读这篇帖子帮你改进团队。",
      "steps": [
        "只建少量 Bot：创始人或创作者先配 3 个（简报、收件箱、研究），每个写清一句话职责与绝不能做的事",
        "每教会 Bot 一件事，就让它自己写成技能，含输入、步骤、正确结果长什么样、哪些事须先问",
        "只接完成这份工作最少需要的工具",
        "把复制粘贴环节找出来，问 Bot 哪些步骤能直接用连接器做",
        "像带实习生一样 onboarding：自我介绍、列出重复任务与耗时、给一个好的例子、写清哪些事必须先问",
        "例行任务最密一小时一次，重复固定步骤尽量沉淀成脚本与技能放私人仓库，以省 Token。"
      ],
      "keyPrompt": "Write down how we just did that as a skill. Include the inputs it needs, the steps in order, what a correct result looks like, and what it should ask me before doing. Keep it under one page.",
      "outputDesc": "一份可直接照做的管理清单与 Bot 分工表，原文称帖子一天内浏览超 90 万次、被 Garry Tan 转发；文中同时承认指南没给成本数字、没提提示词注入风险，属官方团队的 happy path 总结。",
      "outputUrl": "",
      "reproduceTips": "需 Grok Bot 订阅；先挑一个每周重复的任务、只读跑一周再扩权；第三方 Bot 加入前先审权限。",
      "pitfalls": "例行任务每次触发都烧 Token，产品允许的最密间隔远比团队建议更激进，别照上限配；会浏览网页或读邮件的 Bot 可能被读到的文字带偏，默认只读更安全。",
      "source": {
        "name": "ExplainX",
        "platform": "博客",
        "grade": "B",
        "url": "https://explainx.ai/blog/grok-bot-guide-create-high-quality-bots-manage-team-skills-routines-tips-2026",
        "publishedAt": "2026-10-31"
      }
    },
    {
      "id": 16,
      "title": "Peter Yang：@bot 把数千条剧评变口味档案",
      "valueLine": "看到好帖不用收藏吃灰：@bot 一句变成可复用的研究任务。",
      "category": "news",
      "difficulty": "进阶",
      "score": 84,
      "heat": 70,
      "featured": false,
      "issueDate": "2026-11-10",
      "background": "Peter Yang 想验证 Grok Bot 的 X 接入与 @bot 交接：常在 X 看到值得深挖的帖子却收藏后不再看，也想复盘自己账号表现与竞品舆情。",
      "steps": [
        "在 Grok Bot 接好 X 插件，确认 @bot 转发给自己绑定的 Bot，而非像 @grok 公开回帖",
        "在电视剧讨论帖下 @bot，让它分析数千条回复",
        "后续留在 Bot 私聊，让 Bot 把结论写进 Markdown 口味档案",
        "同法做 Dots 对 Grok Bot 的按日情绪、声量、主题与原文链接看板",
        "再让 Bot 按月、形式、主题复盘自己账号，提炼可验证的内容假设。"
      ],
      "keyPrompt": "",
      "outputDesc": "产出：更新过的 Markdown 口味档案、Dots 对 Grok Bot 舆情看板、自己账号分月复盘。原文记录边界：Bot 读不了加密私信，排期回复与日历邀请仍需本人批准。",
      "outputUrl": "",
      "reproduceTips": "需 Grok Bot 订阅并连接 X；@bot 触发私人 Bot 任务，付费用户有免费 X API 额度起步，额度以套餐为准。",
      "pitfalls": "Bot 读不了加密私信；舆情看板是方向性参考，搜索词与抽样会带偏图表，要对照原文链接复核。",
      "source": {
        "name": "Peter Yang",
        "platform": "博客",
        "grade": "B",
        "url": "https://www.ai.joaoqueiros.com/blog/grok-bot-x-email-opus-peter-yang-ten-use-cases",
        "publishedAt": "2026-10-13"
      }
    },
    {
      "id": 17,
      "title": "一句话建 Lead Finder：Grok Bot 接 Firecrawl 出线索表",
      "valueLine": "不用买线索工具：一个 Bot 加免费 Firecrawl，把某地某行业变成带决策人的表格。",
      "category": "work",
      "difficulty": "进阶",
      "score": 83,
      "heat": 68,
      "featured": false,
      "issueDate": "2026-11-10",
      "background": "线索挖掘常要为付费工具买单。Firecrawl 演示只用 Grok Bot 加免费 Firecrawl 插件，能否把公司名单变成带来源的线索表。",
      "steps": [
        "在 Grok Bot 接 Firecrawl 插件，注册免费账号并接受人员搜索条款",
        "新建 Bot 命名 Lead Finder，粘贴视频提示词：用 Firecrawl Alexandria 按行业地点找公司，拉评论评分，找决策人姓名职位 LinkedIn 与工作邮箱",
        "提示词写死：说明每条线索为何值得跟进、结果放 Google Sheet 附来源、绝不编造联系人、绝不发邮件",
        "给具体任务，如英国布莱顿会计师事务所高级决策人",
        "逐条核对来源，满意后再设为定时例行夜间自动跑。"
      ],
      "keyPrompt": "Create a bot called Lead Finder. When I give it a type of business and a location, it should use Firecrawl Alexandria to find matching companies, pull their reviews and ratings, and find the key decision maker with their name, title, LinkedIn and work email. Tell me why each is a good lead, put it all in a Google Sheet with sources, never make up contacts, and never email anyone.",
      "outputDesc": "一张 Google Sheet 线索表：每行有公司、决策人姓名职位、LinkedIn、工作邮箱、推荐理由与来源链接。视频称免费起步；未给可核验的成单或回复数字。",
      "outputUrl": "",
      "reproduceTips": "需 Grok Bot 订阅、免费 Firecrawl 账号与 Google Sheet 权限；联系人数据涉隐私，只做研究，勿直接群发。",
      "pitfalls": "提示词须写明绝不编造联系人、绝不发邮件；表格交付后逐条核对来源再使用。",
      "source": {
        "name": "Firecrawl",
        "platform": "YouTube",
        "grade": "B",
        "url": "https://www.youtube.com/watch?v=EMSIZ-aQmro",
        "publishedAt": ""
      }
    },
    {
      "id": 18,
      "title": "@bot 汇总帖子回复：12 站共省约 9.49MB",
      "valueLine": "在原帖下 @bot 一句，把散在回复里的省流数字汇总成表。",
      "category": "study",
      "difficulty": "入门",
      "score": 82,
      "heat": 55,
      "featured": false,
      "issueDate": "2026-11-10",
      "background": "@shuding 发过网页字体优化帖，众人在回复里贴了各自网站省流量数字，他想汇总成总数而不逐条手算。",
      "steps": [
        "在原帖下回复 @bot，附原帖链接，请它通读全部回复与引用帖",
        "只收带前后字节数或明确百分比的回复，纯感叹不要",
        "让 Bot 统一单位为 MB/KB，逐站列网站名、优化前、优化后与百分比",
        "求和并算平均，产出 12 站表加一句话总结，数字标注网友自报未经复测。"
      ],
      "keyPrompt": "I asked @bot to go through my original post's replies and quotes to see the savings: ~9.49 MB, avg -79%, for these 12 sites!",
      "outputDesc": "12 站汇总表：合计约省 9.49MB，平均省约 79%。数字为网友自报，Bot Pages 标注未复核、不是对照实验。",
      "outputUrl": "",
      "reproduceTips": "需 X 账号并绑定到 Grok 账号才能在 X 上用 @bot；也可把帖子链接发进 Grok Bot 私聊。",
      "pitfalls": "回复数字是网友自报，不能当实测结论；无具体数字的夸赞要跳过。",
      "source": {
        "name": "Bot Pages",
        "platform": "博客",
        "grade": "B",
        "url": "https://www.botpages.co/use-cases/tally-web-font-savings-from-a-thread-with-grok-bot",
        "publishedAt": "2026-11-04"
      }
    },
    {
      "id": 19,
      "title": "30 美元搭 6 人投放团队：3 投手各盯一渠道",
      "valueLine": "多 Bot 协作经典演示：分工写死、群聊 @ 交接，一人跑起跨渠道监测。",
      "category": "work",
      "difficulty": "进阶",
      "score": 81,
      "heat": 62,
      "featured": false,
      "issueDate": "2026-11-10",
      "background": "作者 Peter 花 30 美元订阅后想验证 Grok Bot 多 Bot 协作：媒体投放要在多个没完整 API 的广告后台之间来回切，人工盯不过来。",
      "steps": [
        "给 6 个 Bot 各写角色说明与边界：Media Buyer A/B/C 各盯一个流量来源，Ad Spy 持续扫描竞品创意，Model Agent-Bot 做技术集成，Astra Control 写代码调 API",
        "给投手 Bot 写死规则：盯哪些数据与预算、何时可自行暂停投放、何时必须先问",
        "把 6 个 Bot 拉进一个群 PMBT，首条消息写清项目与分工，让它们互相 @ 交接",
        "Ad Spy 发现新创意时直接在群里 @ 对应投手，提示更新创意与出价",
        "只把低频、固定流程、犯错成本低的活交给 Bot，花钱与需判断的高频操作仍自己做。"
      ],
      "keyPrompt": "",
      "outputDesc": "跑起来的 6 Bot 群：建群后几十秒内 6 个 Bot 依次回复分工，Ad Spy 当场交出已扫描到的在跑 Offer 与创意角度（域名均有标注）。作者称几轮对话用掉总额度 10%-20%，Token 烧得快；未给投放效果数字。",
      "outputUrl": "",
      "reproduceTips": "需 Grok Bot 订阅（作者用 30 美元档试用）；一个账号约可建 50 个 Bot、一个群最多 6 个；先给每个 Bot 写清职责与审批边界。",
      "pitfalls": "Bot 回复快但 Token 烧得也快；高频操作与花钱决策不适合全权托管；所有 Bot 共享同一台云电脑，换个 Bot 名不等于换了安全边界。",
      "source": {
        "name": "Affnomy",
        "platform": "博客",
        "grade": "B",
        "url": "https://affnomy.com/en/articles/30-dollar-six-person-media-buying-team-grok/",
        "publishedAt": "2026-09-08"
      }
    },
    {
      "id": 20,
      "title": "@grok 把空军人潮判成旧庙会照，BOOM 纠错",
      "valueLine": "反面教材：@grok 的核查也会错，关键结论须回到一手信源复核。",
      "category": "factcheck",
      "difficulty": "入门",
      "score": 80,
      "heat": 72,
      "featured": false,
      "issueDate": "2026-11-10",
      "background": "2026 年 10 月 25 日印度空军在瓦拉纳西办航展，人潮照片流传；有用户 @grok 核查后称是 2025 年大壶节老照片，说法被政客账号转发扩散。",
      "steps": [
        "用户在争议照片帖下 @grok 请它核查来源",
        "Grok 称照片来自 2025 年大壶节，说法被截图与社区笔记扩散",
        "BOOM 搜索找到《印度斯坦时报》10 月 25 日同图帖子，图说为航展现场",
        "直接联系摄影师 Rajesh Kumar 证实照片摄于 10 月 25 日中午 Rajghat 桥上",
        "对照同桥视频与 5 分 11 秒处同款警用瞭望塔确认地点一致。"
      ],
      "keyPrompt": "",
      "outputDesc": "BOOM 结论为假：照片确为 2026 年 10 月 25 日瓦拉纳西空军航展人潮，并非大壶节旧照；@grok 判断错误。证据包括摄影师本人证实与多段同地点视频。",
      "outputUrl": "",
      "reproduceTips": "任何 X 用户可在帖子下 @grok 提问；核查结论要再查原发媒体、摄影师与同地点视频三重证据。",
      "pitfalls": "@grok 会把相似场景张冠李戴，错误结论会被社区笔记二次放大；勿把 @grok 回复截图当最终定论转发。",
      "source": {
        "name": "BOOM FactCheck",
        "platform": "BOOM",
        "grade": "C",
        "url": "https://www.boomlive.in/fact-check/bjp-did-not-post-old-kumbh-mela-photo-as-crowd-gathered-for-modi-in-up-32401",
        "publishedAt": "2026-10-26"
      }
    },
    {
      "id": 21,
      "title": "Grok Bot 每天发 10 封冷邮件：前两版翻车才像人写",
      "valueLine": "真实翻车记录：别让 Bot 直接发，先锁死纯文本模板、拿自己邮箱测三轮。",
      "category": "work",
      "difficulty": "进阶",
      "score": 79,
      "heat": 60,
      "featured": false,
      "issueDate": "2026-11-10",
      "background": "作者想把冷邮件外包给 Grok Bot：每天找 10 家真实小企业、写邮件、发出去，已有免费 Google 地图找线索方法，只想让 Bot 照着跑。",
      "steps": [
        "新建专属 Bot，接 Gmail 插件授权，先热身：读收件箱、删约 5 封垃圾邮件、处理合作邀约只提问不答应",
        "下简报：每天发 10 封冷邮件，面向美国中小企业经理与社媒负责人，先在聊天里写一封示例再动手",
        "Bot 提议接付费 Apollo 插件，作者拒绝，改为给本地找线索项目路径，让它自学免费 Google Maps / Places 方法",
        "下令现在找 10 条真实线索并马上发，首次运行点允许一次，中途遇模型供应商过载报错",
        "检查已发送：第一版排版混乱，第二版成带按钮的简报风",
        "截屏发回要求先给自己发测试邮件改到顺眼，并明确只要普通纯文本",
        "第三版通过后，把找线索与发邮件设为每天自动跑的例行任务。"
      ],
      "keyPrompt": "Set me up a cold email campaign to run daily, 10 cold emails. It's the AI automation niche, and I want to offer something similar to what's on my website. Before you send anything, write me an example here. Target people in the United States: managers, social media, at not very big companies. Your task is to find those leads yourself. How are you going to do it?",
      "outputDesc": "最终每天找线索发 10 封冷邮件的自动化跑起来了，第三版为作者认可的普通纯文本。作者明确：本次未统计打开、回复与约会数，是搭建记录不是效果案例。",
      "outputUrl": "https://www.youtube.com/watch?v=Oy8g3_k2Ios",
      "reproduceTips": "需 Grok Bot 订阅、Gmail 插件与免费找线索方法；第一封简报就写明只用免费工具。",
      "pitfalls": "放任不管时 Bot 默认找付费工具；路径给错浪费一轮；写得好看点是错误指令，冷邮件要普通纯文本；遵守当地邮件营销与反垃圾法规。",
      "source": {
        "name": "axagen",
        "platform": "DEV Community",
        "grade": "B",
        "url": "http://dev.to/axagen/i-let-an-ai-agent-find-leads-and-send-my-cold-emails-setup-fixes-what-broke-5fc1",
        "publishedAt": "2026-10-20"
      }
    },
    {
      "id": 22,
      "title": "@grok 核查科利点赞《罗摩衍那》截图：伪造",
      "valueLine": "疯传的球星截图是真是假？帖子下 @grok 问一句，再对照本人账号验证。",
      "category": "factcheck",
      "difficulty": "入门",
      "score": 78,
      "heat": 85,
      "featured": false,
      "issueDate": "2026-11-10",
      "background": "一张截图在 X 疯传，称板球明星科利在 Instagram 快拍称赞电影《罗摩衍那》，话题被大量转发，但无可信报道佐证。",
      "steps": [
        "在疯传截图帖下 @grok 提问：这张截图是真的吗",
        "等 @grok 在帖子下公开回复判断与依据",
        "对照科利认证 Instagram 本周实际快拍，并搜索可信媒体报道",
        "确认：电影本身真实在映，但科利发快拍称赞这一说法无证据。"
      ],
      "keyPrompt": "",
      "outputDesc": "@grok 2026 年 11 月 9 日回复：No, this is not real. The Instagram story screenshot is fabricated. 媒体复核补充：科利本周唯一有报道的快拍是排灯节祝福。",
      "outputUrl": "",
      "reproduceTips": "任何 X 用户可在帖子下 @grok 提问，无需订阅；回答要再对照当事人认证账号与可信报道复核。",
      "pitfalls": "@grok 也会判错（见本期 BOOM 案例），单凭一次 AI 回复不能定论，名人传闻务必交叉验证。",
      "source": {
        "name": "NDTV Profit",
        "platform": "NDTV Profit",
        "grade": "C",
        "url": "https://www.ndtvprofit.com/trending/did-virat-kohli-praise-ramayana-instagram-story-screenshot-goes-viral-but-what-does-grok-say-12304936",
        "publishedAt": "2026-11-09"
      }
    },
    {
      "id": 23,
      "title": "Grok Bot 独立做了一款新扑克：亮一张底牌定胜负",
      "valueLine": "把规则脑洞交给 Grok Bot：它能独立做出可玩、可测试的完整网页游戏。",
      "category": "play",
      "difficulty": "高阶",
      "score": 76,
      "heat": 45,
      "featured": false,
      "issueDate": "2026-11-10",
      "background": "一场公开多智能体实验：让 Grok Bot 独立设计并实现一款原创扑克变体，不只写规则文档，要做出能直接玩的成品。",
      "steps": [
        "给 Grok Bot 目标：设计一款原创扑克变体并做成可玩网页游戏",
        "让 Bot 定规则：每人 3 张底牌，翻牌后每名在局玩家必须亮一张底牌，亮出的牌若与翻牌同点则其他玩家各付半个大盲，多人同时 Echo 则取消",
        "让 Bot 实现完整引擎：手牌比较、边池、短全下规则、单挑盲注与奇数筹码拆分",
        "让 Bot 做三个带性格 AI 对手：Vex 激进、Marlowe 紧而耐心、Juno 平衡多变，均用蒙特卡洛胜率结合底池赔率决策",
        "让 Bot 写测试跑通：单元测试加 12 场 AI 对 AI 完整对局，再用无头浏览器跑一局确认零 JS 报错。"
      ],
      "keyPrompt": "",
      "outputDesc": "公开仓库里的完整游戏：index.html 打开即玩，含发牌动画、下注条、胜率仪表与规则弹窗；测试数据为 3975 个断言通过、300 多手模拟筹码守恒、12 场 AI 对局与无头浏览器 0 JS 报错（均为仓库自述）。",
      "outputUrl": "https://github.com/SomilAgg123/poker-grok-bot",
      "reproduceTips": "复现玩法只需下载仓库打开 index.html；复现开发过程需 Grok Bot 订阅，把规则、引擎、AI 对手、测试分步验收。",
      "pitfalls": "Echo 初版约 40% 的 Tell 会触发，偏像固定税，加入多人 Echo 相撞取消后压到约 30%；规则平衡要靠模拟数据调。",
      "source": {
        "name": "SomilAgg123",
        "platform": "GitHub",
        "grade": "B",
        "url": "https://github.com/SomilAgg123/poker-grok-bot",
        "publishedAt": "2026-10-12"
      }
    },
    {
      "id": 24,
      "title": "Clip Bot：丢 YouTube 链接，Grok Bot 帮你剪短视频",
      "valueLine": "长播客长访谈不用逐帧找：丢链接给 Clip Bot，先给候选时间点与文案再剪。",
      "category": "video",
      "difficulty": "入门",
      "score": 72,
      "heat": 50,
      "featured": false,
      "issueDate": "2026-11-10",
      "background": "播客与长视频创作者常要把长内容切成短视频分发，人工找亮点耗时。@ThisWeeknAI 分享了 Clip Bot 模板：给链接就能出短视频。",
      "steps": [
        "在 x.ai 打开 Clip Bot 官方分享预览，核对 Bot 名字、用途、技能与例行任务",
        "点 Add to Grok Bot，在自己账号得到独立副本，不含原作者电脑、登录与聊天记录",
        "先把自动发送发布等高风险动作改成草稿或只读，再接需要的工具",
        "先拿一条短视频验收：发 YouTube 链接，请 Bot 给候选片段时间点、入选理由、草稿字幕与预览文件",
        "确认无误后再批量出片。"
      ],
      "keyPrompt": "",
      "outputDesc": "按公开描述，Bot 接受 YouTube 链接、识别可剪片段并产出短视频；UseBot 明确说明省多少时间未经本站独立测量，本条不写时间收益数字。",
      "outputUrl": "",
      "reproduceTips": "需 Grok Bot App 与订阅；模板只是配置副本，工具登录要自己接；先用短视频验收再批量。",
      "pitfalls": "模板不带原作者登录与记录，拿到手不是即插即用；分享前删密钥、内部链接与客户数据；先审预览再允许批量导出。",
      "source": {
        "name": "UseBot",
        "platform": "博客",
        "grade": "B",
        "url": "https://www.usebot.net/guides/bot-templates/",
        "publishedAt": "2026-08-29"
      }
    },
    {
      "id": 25,
      "title": "133张家庭照片零剪辑做成50岁生日视频",
      "valueLine": "多源照片经Bot处理，8版迭代成9分钟视频",
      "category": "video",
      "difficulty": "入门",
      "score": 88,
      "heat": 0,
      "featured": true,
      "issueDate": "2026-11-13",
      "background": "哥哥Ken 50岁生日，Debs让Grok Bot处理5处照片。",
      "steps": [
        "汇总5处照片",
        "Bot切出73张，去重剩68张",
        "剪辑Bot做蒙太奇",
        "每张4秒、共133张约9分钟"
      ],
      "keyPrompt": "",
      "outputDesc": "133张照片的约9分钟生日视频，第8版存盘。",
      "outputUrl": "",
      "reproduceTips": "原报道未单列复现要点；按上方步骤操作即可，涉及支付、验证码与对外发布等环节请本人确认后再执行。",
      "pitfalls": "",
      "source": {
        "name": "Debs O'Brien",
        "platform": "博客",
        "grade": "B",
        "url": "https://dev.clauneck.workers.dev/debs_obrien/how-grok-bot-turned-133-family-photos-into-a-50th-birthday-video-with-zero-editing-2614",
        "publishedAt": ""
      }
    },
    {
      "id": 26,
      "title": "推着双胞胎散步，语音指挥Grok Bot完成一整单超市网购",
      "valueLine": "语音指挥Bot购物、核对、支付",
      "category": "work",
      "difficulty": "入门",
      "score": 84,
      "heat": 0,
      "featured": false,
      "issueDate": "2026-11-13",
      "background": "Debs推双胞胎散步，语音指挥Grok Bot在Alcampo网购。",
      "steps": [
        "前一晚建好购物车",
        "语音追加商品",
        "拍照识别零食",
        "亲自过验证码后支付"
      ],
      "keyPrompt": "",
      "outputDesc": "一整单采购完成下单与支付。",
      "outputUrl": "",
      "reproduceTips": "原报道未单列复现要点；按上方步骤操作即可，涉及支付、验证码与对外发布等环节请本人确认后再执行。",
      "pitfalls": "",
      "source": {
        "name": "Debs O'Brien",
        "platform": "DEV Community",
        "grade": "B",
        "url": "https://dev.to/debs_obrien/grok-bot-does-my-shopping-while-walking-the-twins-40l2",
        "publishedAt": ""
      }
    },
    {
      "id": 27,
      "title": "6个Grok Bot串联成开发流水线，累计产出1000+个PR",
      "valueLine": "六Bot接力，终点是Draft PR",
      "category": "coding",
      "difficulty": "入门",
      "score": 80,
      "heat": 0,
      "featured": false,
      "issueDate": "2026-11-13",
      "background": "AgentUseCases收录：6个Grok Bot串联成开发流水线，各司其职。",
      "steps": [
        "研究Bot读Issue",
        "分类、构建、测试Bot接力",
        "评审、安全Bot把关",
        "通过后开Draft PR"
      ],
      "keyPrompt": "",
      "outputDesc": "每个任务以Draft PR交付；累计超1,000个PR。",
      "outputUrl": "",
      "reproduceTips": "原报道未单列复现要点；按上方步骤操作即可，涉及支付、验证码与对外发布等环节请本人确认后再执行。",
      "pitfalls": "",
      "source": {
        "name": "AgentUseCases",
        "platform": "AgentUseCases",
        "grade": "B",
        "url": "https://agentusecases.ai/use-case/run-a-multi-bot-team-that-opens-draft-prs",
        "publishedAt": ""
      }
    },
    {
      "id": 28,
      "title": "Grok Bot 1.0：Bot进会议，替你参会并输出结构化纪要",
      "valueLine": "会后发3个决定、负责人与截止日期",
      "category": "work",
      "difficulty": "入门",
      "score": 80,
      "heat": 0,
      "featured": false,
      "issueDate": "2026-11-13",
      "background": "Panke日报2026-11-12：Grok Bot 1.0出beta，Bot可进会议。",
      "steps": [
        "开启Meetings功能",
        "团队Bot发Slack行动项",
        "会后发3个决定、负责人与截止日期"
      ],
      "keyPrompt": "",
      "outputDesc": "会后团队频道收到3个决定、负责人与截止日期。",
      "outputUrl": "",
      "reproduceTips": "原报道未单列复现要点；按上方步骤操作即可，涉及支付、验证码与对外发布等环节请本人确认后再执行。",
      "pitfalls": "",
      "source": {
        "name": "Panke 日报",
        "platform": "Panke",
        "grade": "B",
        "url": "https://Panke.app/grokbot/digest/2026-11-12/",
        "publishedAt": ""
      }
    },
    {
      "id": 29,
      "title": "用Grok Bot造企鹅Noot：自建网站、游戏与宣传片",
      "valueLine": "一个Bot自主完成网站、游戏、宣传视频",
      "category": "play",
      "difficulty": "入门",
      "score": 80,
      "heat": 0,
      "featured": false,
      "issueDate": "2026-11-13",
      "background": "@thesoragirls用@Grok @Bot创建企鹅角色Noot，再让它建网站、做游戏、拍视频。",
      "steps": [
        "建Bot写清角色",
        "让角色建网站、加游戏",
        "同一Bot做宣传视频"
      ],
      "keyPrompt": "",
      "outputDesc": "Noot City跑酷小游戏及官网与宣传视频。",
      "outputUrl": "",
      "reproduceTips": "原报道未单列复现要点；按上方步骤操作即可，涉及支付、验证码与对外发布等环节请本人确认后再执行。",
      "pitfalls": "",
      "source": {
        "name": "Bot Pages",
        "platform": "Bot Pages",
        "grade": "B",
        "url": "https://www.botpages.co/use-cases/create-a-character-bot-that-builds-its-own-website-game-and-promo-video",
        "publishedAt": ""
      }
    },
    {
      "id": 30,
      "title": "Grok Bot端到端运行客服公司：14条工作流撑起55个客户",
      "valueLine": "14条工作流跑通客服，人只留获客与电话升级",
      "category": "work",
      "difficulty": "入门",
      "score": 78,
      "heat": 0,
      "featured": false,
      "issueDate": "2026-11-13",
      "background": "AgentUseCases收录：8人客服公司让Grok Bot端到端跑客服，共14条工作流。",
      "steps": [
        "Bot接管聊天、邮件、工单",
        "配置知识库自动回复",
        "设置退款、报表、升级标记等工作流"
      ],
      "keyPrompt": "",
      "outputDesc": "13周获客55家，月收入28,600美元；数字自述。",
      "outputUrl": "",
      "reproduceTips": "原报道未单列复现要点；按上方步骤操作即可，涉及支付、验证码与对外发布等环节请本人确认后再执行。",
      "pitfalls": "",
      "source": {
        "name": "AgentUseCases",
        "platform": "AgentUseCases",
        "grade": "B",
        "url": "https://agentusecases.ai/use-case/run-a-customer-support-company-end-to-end",
        "publishedAt": ""
      }
    },
    {
      "id": 31,
      "title": "一句「删掉假神」，@grok编辑图片只剩耶稣一人",
      "valueLine": "一句短指令完成图片编辑",
      "category": "image",
      "difficulty": "入门",
      "score": 76,
      "heat": 0,
      "featured": false,
      "issueDate": "2026-11-13",
      "background": "2026年10月1日，X用户向@grok发耶稣与众神同框梗图，指令删掉假神。原帖已删。",
      "steps": [
        "准备耶稣与众神同框图",
        "@grok发图并附指令",
        "Grok返回仅剩耶稣的图"
      ],
      "keyPrompt": "",
      "outputDesc": "编辑后图片仅剩耶稣站立，回复Done。",
      "outputUrl": "",
      "reproduceTips": "原报道未单列复现要点；按上方步骤操作即可，涉及支付、验证码与对外发布等环节请本人确认后再执行。",
      "pitfalls": "",
      "source": {
        "name": "Answered Faith",
        "platform": "Answered Faith",
        "grade": "B",
        "url": "https://answeredfaith.com/grok-says-jesus-did-not-qualify-as-a-fake-god-what-it-means-for-the-world/",
        "publishedAt": ""
      }
    },
    {
      "id": 32,
      "title": "Grok Bot通过Postiz插件自动发布Instagram内容",
      "valueLine": "配置API Key后排期自动发布",
      "category": "content",
      "difficulty": "入门",
      "score": 70,
      "heat": 0,
      "featured": false,
      "issueDate": "2026-11-13",
      "background": "Postiz官网指南：用Grok Bot结合Postiz插件自动发Instagram。",
      "steps": [
        "输入/add-plugin postiz",
        "存POSTIZ_API_KEY",
        "告诉Bot发哪张图",
        "设排期，发布前人工审批"
      ],
      "keyPrompt": "",
      "outputDesc": "自动发布的Instagram帖子、Story，定时发布。",
      "outputUrl": "",
      "reproduceTips": "原报道未单列复现要点；按上方步骤操作即可，涉及支付、验证码与对外发布等环节请本人确认后再执行。",
      "pitfalls": "",
      "source": {
        "name": "Postiz",
        "platform": "Postiz 官网",
        "grade": "B",
        "url": "https://postiz.com/grok-bot/instagram",
        "publishedAt": ""
      }
    }
  ]
};
