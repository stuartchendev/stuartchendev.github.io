import type {LanguageId, LanguageUi} from "../../types/i18n";

export const languageData: Record<LanguageId, LanguageUi> = {
    "en": {
        "guildLineHeaderName": "Stuart Chen",
        "guildLineHeaderRole": "Frontend Developer · React",
        "guildLineHeaderSection": "Projects",
        "socialLink": [
            {type: "Github", href: "https://github.com/stuartchendev", label: "Github"},
            {type: "Email", href: "mailto:stuartchen.dev@gmail.com", label: "Email"},
        ],
        "aboutTitle": "About Me",
        "aboutInfo": {
            "aboutName": "Yi Ting (Stuart) Chen",
            "aboutSubTitle": "self-taught frontend developer",
            'aboutDescription': {
                parts: [
                    {type: "text", text: "I focus on "},
                    {type: "text", text: "JavaScript, React, and TypeScript", strong: true},
                    {type: "br"},
                    {type: "text", text: "I care deeply about "},
                    {type: "text", text: "state design, data flow, and maintainability, ", strong: true},
                    {
                        type: "text",
                        text: " and I learn primarily through building and refactoring real projects rather than just completing features."
                    },
                    {type: "br"},
                    {type: "text", text: "I’m currently looking for a "},
                    {type: "text", text: "Junior Frontend Engineer", strong: true},
                    {
                        type: "text",
                        text: " role where I can continue growing with a team that values clean design and engineering thinking."
                    }
                ]
            }
        },
        "contactTitle": "Contact Me",
        "contactLabelName": "Name",
        "contactLabelEmail": "Email",
        "contactLabelMessage": "Message",
    },
    "zh-Tw": {
        "guildLineHeaderName": "陳奕廷",
        "guildLineHeaderRole": "前端開發者 · React",
        "guildLineHeaderSection": "作品集",
        "socialLink": [
            {type: "Github", href: "https://github.com/stuartchendev", label: "Github"},
            {type: "Email", href: "mailto:stuartchen.dev@gmail.com", label: "Email"},
        ],
        "aboutTitle": "關於我",
        "aboutInfo": {
            "aboutName": "陳奕廷",
            "aboutSubTitle": "專注於前端工程的自學開發者",
            'aboutDescription': {
                parts: [
                    {type: "text", text: "主要使用 "},
                    {type: "text", text: "JavaScript、React 與 TypeScript", strong: true},
                    {type: "br"},
                    {type: "text", text: "在學習過程中，我特別重視"},
                    {type: "text", text: "狀態設計、資料流與可維護性", strong: true},
                    {type: "text", text: "，並透過實作專案（如 Forkify、Mapty）反覆驗證設計取捨，而不是只追求功能完成。"},
                    {type: "br"},
                    {type: "text", text: "目前正在尋找 "},
                    {type: "text", text: "Junior Frontend Engineer", strong: true},
                    {type: "text", text: " 的機會，希望加入重視工程思維與成長文化的團隊，持續把前端做得更紮實。"}
                ]
            }
        },
        "contactTitle": "歡迎聯繫",
        "contactLabelName": "姓名",
        "contactLabelEmail": "電子郵件",
        "contactLabelMessage": "訊息",
    },
    "ja": {
        "guildLineHeaderName": "Stuart Chen",
        "guildLineHeaderRole": "フロントエンドエンジニア · React",
        "guildLineHeaderSection": "プロジェクト",
        "socialLink": [
            {type: "Github", href: "https://github.com/stuartchendev", label: "Github"},
            {type: "Email", href: "mailto:stuartchen.dev@gmail.com", label: "Email"}
        ],
        "aboutTitle": "自己紹介",
        "aboutInfo": {
            "aboutName": "Yi Ting (Stuart) Chen",
            "aboutSubTitle": "独学のフロントエンドエンジニア",
            "aboutDescription": {
                "parts": [
                    {"type": "text", "text": "私は "},
                    {"type": "text", "text": "JavaScript・React・TypeScript", "strong": true},
                    {"type": "text", "text": " を中心に取り組んでいます。"},
                    {"type": "br"},
                    {"type": "text", "text": "特に "},
                    {
                        "type": "text",
                        "text": "state 設計、データフロー、保守性",
                        "strong": true
                    },
                    {
                        "type": "text",
                        "text": " を重視しており、単に機能を実装するだけでなく、実際のプロジェクトを作りながらリファクタリングを通して学ぶことを大切にしています。"
                    },
                    {"type": "br"},
                    {"type": "text", "text": "現在、"},
                    {
                        "type": "text",
                        "text": "Junior フロントエンドエンジニア",
                        "strong": true
                    },
                    {
                        "type": "text",
                        "text": " として、クリーンな設計やエンジニアリング思考を大切にするチームで成長できるポジションを探しています。"
                    }
                ]
            }
        },
        "contactTitle": "お問い合わせ",
        "contactLabelName": "お名前",
        "contactLabelEmail": "メールアドレス",
        "contactLabelMessage": "メッセージ",
    }

};