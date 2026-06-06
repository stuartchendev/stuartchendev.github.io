import type {LanguageUi} from "../../types/i18n";
import type {LanguageId} from "../../config";

import {RESUME_URLS} from "../../config";


export const languageData: Record<LanguageId, LanguageUi> = {
    "en": {
        "guildLineHeaderName": "Stuart Chen",
        "guildLineHeaderRole": "Frontend Developer · React",
        "guildLineHeaderSection": "Projects",
        "resume":{
            "label": "Open Resume 🤝",
            "href": RESUME_URLS.en
        },
        "socialLink": [
            {type: "Github", href: "https://github.com/stuartchendev", label: "Github"},
            {type: "LinkedIn", href: "https://www.linkedin.com/in/stuartchendev", label: "LinkedIn"},
            {type: "Resume", href: RESUME_URLS.en, label: "Resume"},
            {type: "Email", href: "mailto:stuartchen.dev@gmail.com", label: "Email"},
        ],
        "aboutTitle": "About Me",
        "aboutInfo": {
            "aboutName": "Yi-Ting (Stuart) Chen",
            "aboutSubTitle": "Frontend Developer (React + TypeScript)",
            "jobLocation": "open to remote",
            "aboutSummary": {
                parts: [
                    { type: "text", text: "I build " },
                    { type: "text", text: "React and TypeScript interfaces"},
                    { type: "text", text: " with " },
                    { type: "text", text: "clear state design, predictable data flow, and maintainable UI architecture."},
                    { type: "br" },

                    { type: "text", text: "I focus on " },
                    { type: "text", text: "translating real user intent", strong: true },
                    { type: "text", text: " into reliable, state-driven UI with " },
                    { type: "text", text: "clear responsibilities and consistent behavior.", strong: true }
                ]
            },
            "aboutDetails": {
                parts: [
                    { type: "text", text: "I build and refactor frontend projects with a focus on " },
                    { type: "text", text: "clear responsibilities, predictable state changes, and maintainable structure.", strong: true },
                    { type: "br" },

                    { type: "text", text: "I use AI to speed up execution, while keeping ownership of design decisions and code quality." },
                    { type: "br" },
                ]
            }
        },
        "contactIntro": "Open to junior frontend opportunities and remote-friendly roles.",
    },
    "zh-Tw": {
        "guildLineHeaderName": "陳奕廷",
        "guildLineHeaderRole": "前端開發者 · React",
        "guildLineHeaderSection": "作品集",
        "resume": {
            "label": "開啟履歷 🤝",
            "href": RESUME_URLS["zh-TW"]
        },
        "socialLink": [
            {type: "Github", href: "https://github.com/stuartchendev", label: "Github"},
            {type: "LinkedIn", href: "https://www.linkedin.com/in/stuartchendev", label: "LinkedIn"},
            {type: "Resume", href: RESUME_URLS["zh-TW"], label: "Resume"},
            {type: "Email", href: "mailto:stuartchen.dev@gmail.com", label: "Email"},
        ],
        "aboutTitle": "關於我",
        "aboutInfo": {
            "aboutName": "陳奕廷",
            "aboutSubTitle": "專注於前端工程的自學開發者",
            "jobLocation": "open to remote",
            "aboutSummary": {
                parts: [
                    { type: "text", text: "我打造 " },
                    { type: "text", text: "React 與 TypeScript 介面" },
                    { type: "text", text: "，著重於 " },
                    { type: "text", text: "清楚的 state 設計、可預測的資料流，以及可維護的 UI 架構。" },
                    { type: "br" },

                    { type: "text", text: "我專注於將 " },
                    { type: "text", text: "真實使用者意圖轉化", strong: true },
                    { type: "text", text: " 為可靠的 state-driven UI，並維持 " },
                    { type: "text", text: "清楚的責任切分與一致的行為。", strong: true }
                ]
            },
            "aboutDetails": {
                parts: [
                    { type: "text", text: "我打造並重構前端專案，重點放在 " },
                    { type: "text", text: "清楚的責任切分、可預測的 state 變化，以及可維護的結構。", strong: true },
                    { type: "br" },

                    { type: "text", text: "我使用 AI 來加快執行速度，同時保有對設計決策與程式碼品質的主導權。" },
                    { type: "br" }
                ]
            }
        },
        "contactIntro": "目前開放 junior frontend 職缺與 remote-friendly 工作機會。"
    },
    "ja": {
        "guildLineHeaderName": "Stuart Chen",
        "guildLineHeaderRole": "フロントエンドエンジニア · React",
        "guildLineHeaderSection": "プロジェクト",
        "resume":{
            "label": "Open Resume 🤝",
            "href": RESUME_URLS.en
        },
        "socialLink": [
            {type: "Github", href: "https://github.com/stuartchendev", label: "Github"},
            {type: "LinkedIn", href: "https://www.linkedin.com/in/stuartchendev", label: "LinkedIn"},
            {type: "Resume", href: RESUME_URLS.en, label: "Resume"},
            {type: "Email", href: "mailto:stuartchen.dev@gmail.com", label: "Email"},
        ],
        "aboutTitle": "自己紹介",
        "aboutInfo": {
            "aboutName": "Yi Ting (Stuart) Chen",
            "aboutSubTitle": "独学のフロントエンドエンジニア",
            "jobLocation": "open to remote",
            "aboutSummary": {
                parts: [
                    { type: "text", text: "私は " },
                    { type: "text", text: "React と TypeScript のインターフェース" },
                    { type: "text", text: " を構築しており、" },
                    { type: "text", text: "明確な state 設計、予測しやすいデータフロー、そして保守しやすい UI アーキテクチャ" },
                    { type: "text", text: " を重視しています。" },
                    { type: "br" },

                    { type: "text", text: "私は " },
                    { type: "text", text: "実際のユーザー意図を翻訳すること", strong: true },
                    { type: "text", text: " に注力し、それを信頼できる state-driven UI に落とし込みながら、" },
                    { type: "text", text: "明確な責務と一貫した振る舞い", strong: true },
                    { type: "text", text: " を保つことを大切にしています。" }
                ]
            },
            "aboutDetails": {
                parts: [
                    { type: "text", text: "私はフロントエンドプロジェクトを構築・リファクタリングする際、" },
                    { type: "text", text: "明確な責務、予測可能な state の変化、そして保守しやすい構造", strong: true },
                    { type: "text", text: " を重視しています。" },
                    { type: "br" },

                    { type: "text", text: "AI は実行スピードを上げるために活用していますが、設計判断とコード品質の責任は自分で持っています。" },
                    { type: "br" }
                ]
            }
        },
        "contactIntro": "ジュニアフロントエンド職およびリモートフレンドリーなポジションに応募可能です。"
    }

};