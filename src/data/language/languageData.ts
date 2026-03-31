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
            "aboutSubTitle": "self-taught frontend developer",
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
                    { type: "text", text: "clear responsibility, predictable state changes, and maintainable structure.", strong: true },
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
            "jobLocation": "open to remote",
            "aboutSummary": {
                parts: [
                    { type: "text", text: "I build " },
                    { type: "text", text: "React and TypeScript interfaces", strong: true },
                    { type: "text", text: " with " },
                    { type: "text", text: "clear state design, predictable data flow, and maintainable UI architecture.", strong: true },
                    { type: "br" },

                    { type: "text", text: "I focus on translating " },
                    { type: "text", text: "real user intent", strong: true },
                    { type: "text", text: " into reliable, state-driven UI with " },
                    { type: "text", text: "clear responsibilities and consistent behavior.", strong: true }
                ]
            },
            "aboutDetails": {
                parts: [
                    { type: "text", text: "I build and refactor production-style projects to improve " },
                    { type: "text", text: "separation of concerns, consistent state transitions, and long-term maintainability.", strong: true },
                    { type: "br" },

                    { type: "text", text: "I use AI as a development accelerator, while maintaining ownership of " },
                    { type: "text", text: "architectural decisions and code quality.", strong: true },
                    { type: "br" },

                    { type: "text", text: "I’m currently looking for a " },
                    { type: "text", text: "Junior Frontend Engineer", strong: true },
                    { type: "text", text: " role in a collaborative team where I can contribute reliably and continue growing as an engineer." }
                ]
            }
        },
        "contactIntro": "歡迎聯繫",
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
            "jobLocation": "open to remote",
            "aboutSummary": {
                parts: [
                    { type: "text", text: "I build " },
                    { type: "text", text: "React and TypeScript interfaces", strong: true },
                    { type: "text", text: " with " },
                    { type: "text", text: "clear state design, predictable data flow, and maintainable UI architecture.", strong: true },
                    { type: "br" },

                    { type: "text", text: "I focus on translating " },
                    { type: "text", text: "real user intent", strong: true },
                    { type: "text", text: " into reliable, state-driven UI with " },
                    { type: "text", text: "clear responsibilities and consistent behavior.", strong: true }
                ]
            },
            "aboutDetails": {
                parts: [
                    { type: "text", text: "I build and refactor production-style projects to improve " },
                    { type: "text", text: "separation of concerns, consistent state transitions, and long-term maintainability.", strong: true },
                    { type: "br" },

                    { type: "text", text: "I use AI as a development accelerator, while maintaining ownership of " },
                    { type: "text", text: "architectural decisions and code quality.", strong: true },
                    { type: "br" },

                    { type: "text", text: "I’m currently looking for a " },
                    { type: "text", text: "Junior Frontend Engineer", strong: true },
                    { type: "text", text: " role in a collaborative team where I can contribute reliably and continue growing as an engineer." }
                ]
            }
        },
        "contactIntro": "お問い合わせ",
    }

};