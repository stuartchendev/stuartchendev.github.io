import type {LanguageId, LanguageUi} from "../../types/i18n";

export const languageData: Record<LanguageId, LanguageUi> = {
    "en": {
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
                    {type: "text", text: " and I learn primarily through building and refactoring real projects rather than just completing features."},
                    {type: "br"},
                    {type: "text", text: "I’m currently looking for a "},
                    {type: "text", text: "Junior Frontend Engineer", strong: true},
                    {type: "text", text: " role where I can continue growing with a team that values clean design and engineering thinking."}
                ]
            }
        }
    },
    "zh-Tw": {
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
        }
    },
    "jp": {
        "aboutTitle": "私について"
    }
};