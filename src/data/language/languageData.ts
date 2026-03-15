import type {LanguageId, LanguageUi} from "../../types/i18n";

import {RESUME_URL} from "../../config";


export const languageData: Record<LanguageId, LanguageUi> = {
    "en": {
        "guildLineHeaderName": "Stuart Chen",
        "guildLineHeaderRole": "Frontend Developer · React",
        "guildLineHeaderSection": "Projects",
        "socialLink": [
            {type: "Github", href: "https://github.com/stuartchendev", label: "Github"},
            {type: "LinkedIn", href: "https://www.linkedin.com/in/stuartchendev", label: "LinkedIn"},
            {type: "Resume", href: RESUME_URL, label: "Resume"},
            {type: "Email", href: "mailto:stuartchen.dev@gmail.com", label: "Email"},
        ],
        "aboutTitle": "About Me",
        "aboutInfo": {
            "aboutName": "Yi-Ting (Stuart) Chen",
            "aboutSubTitle": "self-taught frontend developer · open to remote",
            'aboutDescription': {
                parts: [
                    {type: "text", text: "I specialize in "},
                    {type: "text", text: "JavaScript, React, and TypeScript", strong: true},
                    {type: "text", text: ", focusing on "},
                    {type: "text", text: "state modeling, clear data flow, and maintainable UI architecture.", strong: true},
                    {type: "br"},

                    {type: "text", text: "My work centers on designing state-driven interfaces that reflect real user intent, while keeping responsibilities clearly separated and predictable."},
                    {type: "br"},

                    {type: "text", text: "I build and refactor production-style projects to improve "},
                    {type: "text", text: "separation of concerns, consistent state transitions, and long-term maintainability.", strong: true},
                    {type: "br"},

                    {type: "text", text: "I use AI as a development accelerator, while maintaining ownership of "},
                    {type: "text", text: "architectural decisions and code quality.", strong: true},
                    {type: "br"},

                    {type: "text", text: "I’m currently looking for a "},
                    {type: "text", text: "Junior Frontend Engineer", strong: true},
                    {type: "text", text: " role in a collaborative team where I can contribute reliably and continue growing as an engineer."}
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
            {type: "LinkedIn", href: "https://www.linkedin.com/in/stuartchendev", label: "LinkedIn"},
            {type: "Resume", href: RESUME_URL, label: "Resume"},
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
            {type: "LinkedIn", href: "https://www.linkedin.com/in/stuartchendev", label: "LinkedIn"},
            {type: "Resume", href: RESUME_URL, label: "Resume"},
            {type: "Email", href: "mailto:stuartchen.dev@gmail.com", label: "Email"},
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