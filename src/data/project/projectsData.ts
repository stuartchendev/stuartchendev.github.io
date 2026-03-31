import type {Project} from "../../types/project"
import type {LanguageId} from "../../types/i18n"
import portfolioThumb from "../../img/project-thumbnails/portfolio_preview_thumbnail.png"
import forkifyThumb from "../../img/project-thumbnails/forkify_preview_thumbnail.png"
import maptyThumb from "../../img/project-thumbnails/mapty_preview_thumbnail.png"
import graduateThumb from "../../img/project-thumbnails/graduate_project_preview.png"
export const projectsData: Record<LanguageId, Project[]> = {
    "en": [
        {
            "id": "portfolio",
            "title": "Portfolio Website",
            "shortDescription": "A React and TypeScript portfolio focused on clear state design and maintainable UI structure.",
            "tags": [
                "React",
                "TypeScript",
                "State-driven UI",
                "Derived State",
                "Component Architecture",
                "i18n"
            ],
            "thumbnailSrc": portfolioThumb,
            "thumbnailAlt": "Portfolio Preview",
            "image": [],
            "year": "2026 Q1",
            "githubLink": "https://github.com/stuartchendev/stuartchendev.github.io",
            "demoLink": "https://stuartchendev.github.io/",
            "detailDescription": "A personal portfolio built with React and TypeScript to showcase projects through clear state design, derived state reasoning, and maintainable UI architecture.",
            "challenges": [
                "Keeping state responsibility clear without mixing UI state and project data",
                "Avoiding duplicated state in project detail interactions",
                "Modeling async behavior predictably without relying on scattered boolean flags"
            ],
            "features": [
                "Multi-language support with a data-driven content structure",
                "Project list and detail modal using activeProjectId as a single source of truth",
                "Derived state patterns for predictable UI logic",
                "Async UI flow with loading, error, and retry handling"
            ]
        },
        {
            "id": "forkify",
            "title": "Forkify App",
            "shortDescription": "A recipe search application built with vanilla JavaScript, focused on MVC architecture, clear data flow, and modular design.",
            "tags": [
                "MVC Architecture",
                "State Management",
                "Async Data Flow",
                "REST API Integration",
                "Modular Architecture",
                "Local Persistence"
            ],
            "thumbnailSrc": forkifyThumb,
            "thumbnailAlt": "Forkify Preview",
            "image": [],
            "year": "2025 Q4",
            "githubLink": "https://github.com/stuartchendev/forkify-app",
            "demoLink": "https://forkify-sturartchen.netlify.app",
            "detailDescription": "A recipe search application built with vanilla JavaScript to demonstrate MVC architecture, centralized state management, and predictable async data flow without relying on a frontend framework.",
            "challenges": [
                "Designing clear responsibility boundaries across model, view, and controller in a non-framework environment",
                "Managing asynchronous API data while keeping UI updates predictable",
                "Normalizing external API data into application state instead of storing raw responses directly",
                "Balancing richer interactive features with maintainable DOM update logic"
            ],
            "features": [
                "Recipe search with external API integration using async/await",
                "Centralized application state for search results, recipe details, bookmarks, and pagination",
                "MVC architecture with dedicated model, view, and controller responsibilities",
                "Interactive features including pagination, servings adjustment, and bookmark persistence"
            ]
        },
        {
            "id": "mapty",
            "title": "Mapty App",
            "shortDescription": "A map-based workout tracking application refactored into a clearer MVC architecture, focused on state separation and maintainable UI behavior.",
            "tags": [
                "OOP → MVC",
                "State Separation",
                "Deterministic Flow",
                "Leaflet Integration",
                "Local Persistence",
                "Geolocation"
            ],
            "thumbnailSrc": maptyThumb,
            "thumbnailAlt": "Mapty Preview",
            "image": [],
            "year": "2025 Q4",
            "githubLink": "https://github.com/stuartchendev/mapty-app",
            "demoLink": "https://mapty-mvc-app.netlify.app/",
            "detailDescription": "A map-based workout tracking application refactored from an OOP structure into MVC to improve state separation, control flow clarity, and long-term maintainability.",
            "challenges": [
                "Refactoring a monolithic OOP-style implementation into a clearer MVC structure",
                "Separating domain state from UI instance state to avoid unintended render side effects",
                "Designing deterministic control flow for map interactions and workout updates",
                "Improving maintainability without overcomplicating the original application"
            ],
            "features": [
                "Geolocation-based workout creation with interactive map input",
                "Running and cycling workout tracking with persistent state using localStorage",
                "MVC-based structure with clearer separation between model, view, and controller",
                "Refactored state flow to make feature behavior easier to extend and maintain"
            ]
        },
        {
            "id": "smart-garage-door-system",
            "title": "Smart Garage Door System",
            "shortDescription": "A smart garage door system using MQTT-based communication to automatically unlock when a user approaches.",
            "tags": [
                "MQTT Pub/Sub",
                "System Integration",
                "Linux Server Setup",
                "Distributed Communication",
                "Android Client",
                "Device Proximity Detection"
            ],
            "thumbnailSrc": graduateThumb,
            "thumbnailAlt": "Graduate Project Preview",
            "image": [],
            "year": "2023 Q4",
            "githubLink": "",
            "demoLink": "",
            "detailDescription": "A smart garage door system built with an MQTT-based communication model to demonstrate event-driven system design, device coordination, and reliable message handling between a mobile client and a Linux-based server.",
            "challenges": [
                "Designing a reliable event-driven communication flow using MQTT",
                "Ensuring accurate and stable proximity detection from the mobile device",
                "Coordinating message handling between multiple system components (client, server, device)",
                "Maintaining system reliability under asynchronous and network-dependent conditions"
            ],
            "features": [
                "Automatic door unlocking based on mobile device proximity detection",
                "MQTT-based publish/subscribe communication between client and server",
                "Linux server handling message routing and device coordination",
                "Real-time communication flow between mobile application and door system"
            ]
        }
    ],
    "zh-Tw": [
        {
            "id": "portfolio",
            "title": "作品集網站",
            "shortDescription": "使用 React 與 TypeScript 打造的個人作品集網站，著重於清楚的 state 設計、資料驅動的 UI，以及可維護的元件架構。",
            "tags": [
                "React",
                "TypeScript",
                "State-driven UI",
                "Derived State",
                "Component Architecture",
                "i18n"
            ],
            "thumbnailSrc": "",
            "thumbnailAlt": "",
            "image": [],
            "year": "2026 Q1",
            "githubLink": "https://github.com/stuartchendev/stuartchendev.github.io",
            "demoLink": "https://stuartchendev.github.io/",
            "detailDescription": "使用 React 與 TypeScript 打造的個人作品集網站，透過清楚的 state 設計、derived state 推理，以及可維護的 UI 架構來展示專案。",
            "challenges": [
                "在不混合 UI 狀態與專案資料的前提下，維持清楚的 state 責任分工",
                "避免在專案細節互動中產生重複狀態",
                "在不依賴分散的 boolean flags 下，讓非同步行為保持可預測"
            ],
            "features": [
                "支援多語系的資料驅動內容結構",
                "以 activeProjectId 作為單一狀態來源的專案列表與細節 modal",
                "使用 derived state patterns 維持可預測的 UI 邏輯",
                "具備 loading、error 與 retry handling 的 async UI flow"
            ]
        },
        {
            "id": "forkify",
            "title": "Forkify 食譜應用",
            "shortDescription": "使用原生 JavaScript 開發的食譜搜尋應用，著重於 MVC 架構、清楚的資料流，以及模組化設計。",
            "tags": [
                "MVC Architecture",
                "State Management",
                "Async Data Flow",
                "REST API Integration",
                "Modular Architecture",
                "Local Persistence"
            ],
            "thumbnailSrc": "",
            "thumbnailAlt": "",
            "image": [],
            "year": "2025 Q4",
            "githubLink": "https://github.com/stuartchendev/forkify-app",
            "demoLink": "https://forkify-sturartchen.netlify.app",
            "detailDescription": "使用原生 JavaScript 開發的食譜搜尋應用，透過 MVC 架構、集中式狀態管理，以及可預測的非同步資料流來展示不依賴前端框架的工程設計。",
            "challenges": [
                "在不依賴前端框架的情況下，設計 model、view、controller 之間清楚的責任邊界",
                "在處理非同步 API 資料時，維持可預測的 UI 更新",
                "將外部 API 資料正規化為 application state，而不是直接儲存原始回應",
                "在互動功能逐漸增加時，維持 DOM 更新邏輯的可維護性"
            ],
            "features": [
                "透過 async/await 串接外部 API 的食譜搜尋功能",
                "以集中式 application state 管理搜尋結果、食譜細節、書籤與分頁",
                "具備明確 model、view、controller 職責分工的 MVC 架構",
                "包含分頁、份量調整與書籤保存等互動功能"
            ]
        },
        {
            "id": "mapty",
            "title": "Mapty 運動地圖應用",
            "shortDescription": "一款以地圖為核心的運動紀錄應用，重構為更清楚的 MVC 架構，著重於狀態分離與可維護的 UI 行為。",
            "tags": [
                "OOP → MVC",
                "State Separation",
                "Deterministic Flow",
                "Leaflet Integration",
                "Local Persistence",
                "Geolocation"
            ],
            "thumbnailSrc": "",
            "thumbnailAlt": "",
            "image": [],
            "year": "2025 Q4",
            "githubLink": "https://github.com/stuartchendev/mapty-app",
            "demoLink": "https://mapty-mvc-app.netlify.app/",
            "detailDescription": "一款以地圖為核心的運動紀錄應用，從 OOP 結構重構為 MVC，以提升狀態分離、控制流程清晰度，以及長期可維護性。",
            "challenges": [
                "將偏單體的 OOP 實作重構為更清楚的 MVC 結構",
                "區分 domain state 與 UI instance state，避免非預期的 render side effects",
                "為地圖互動與運動更新設計具決定性的控制流程",
                "在不過度複雜化原始應用的前提下提升可維護性"
            ],
            "features": [
                "基於地理定位與互動式地圖輸入的運動建立流程",
                "跑步與自行車運動紀錄，並以 localStorage 保存狀態",
                "以 MVC 為基礎，明確分離 model、view、controller",
                "重構 state flow，讓功能行為更容易擴充與維護"
            ]
        },
        {
            "id": "smart-garage-door-system",
            "title": "智慧車庫門系統",
            "shortDescription": "使用 MQTT 通訊，當使用者接近時自動解鎖車庫門的智慧門禁系統。",
            "tags": [
                "MQTT Pub/Sub",
                "System Integration",
                "Linux Server Setup",
                "Distributed Communication",
                "Android Client",
                "Device Proximity Detection"
            ],
            "thumbnailSrc": graduateThumb,
            "thumbnailAlt": "Graduate Project Preview",
            "image": ["images/GP.png"],
            "year": "2023 Q4",
            "githubLink": "",
            "demoLink": "",
            "detailDescription": "一套使用 MQTT 通訊模型打造的智慧車庫門系統，用來展示 event-driven 系統設計、裝置協作，以及行動端與 Linux 伺服器之間可靠的訊息處理流程。",
            "challenges": [
                "使用 MQTT 設計可靠的 event-driven 通訊流程",
                "確保行動裝置的接近偵測準確且穩定",
                "協調 client、server、device 等多個系統元件之間的訊息處理",
                "在非同步與網路條件影響下維持系統可靠性"
            ],
            "features": [
                "根據行動裝置接近偵測自動解鎖車庫門",
                "以 MQTT publish/subscribe 模型進行 client 與 server 間通訊",
                "由 Linux 伺服器負責訊息路由與裝置協調",
                "行動應用與門禁裝置之間的即時通訊流程"
            ]
        }
    ],
    "ja": [
        {
            "id": "portfolio",
            "title": "ポートフォリオサイト",
            "shortDescription": "React と TypeScript を用いて構築した個人ポートフォリオです。明確な state 設計、データ駆動の UI、そして保守性の高いコンポーネント構成に重点を置いています。",
            "tags": [
                "React",
                "TypeScript",
                "State-driven UI",
                "Derived State",
                "Component Architecture",
                "i18n"
            ],
            "thumbnailSrc": "",
            "thumbnailAlt": "",
            "image": [],
            "year": "2026 Q1",
            "githubLink": "https://github.com/stuartchendev/stuartchendev.github.io",
            "demoLink": "https://stuartchendev.github.io/",
            "detailDescription": "React と TypeScript を用いて構築した個人ポートフォリオで、明確な state 設計、derived state の考え方、そして保守しやすい UI アーキテクチャを通じてプロジェクトを紹介しています。",
            "challenges": [
                "UI 状態とプロジェクトデータを混在させず、state の責務を明確に保つこと",
                "プロジェクト詳細のインタラクションで重複した state を避けること",
                "分散した boolean flags に頼らず、非同期挙動を予測可能に設計すること"
            ],
            "features": [
                "データ駆動のコンテンツ構造による多言語対応",
                "activeProjectId を単一の状態ソースとして使ったプロジェクト一覧と詳細モーダル",
                "予測しやすい UI ロジックを保つための derived state パターン",
                "loading・error・retry handling を備えた async UI フロー"
            ]
        },
        {
            "id": "forkify",
            "title": "Forkify レシピアプリ",
            "shortDescription": "Vanilla JavaScript で構築したレシピ検索アプリで、MVC アーキテクチャ、明確なデータフロー、モジュール設計に重点を置いています。",
            "tags": [
                "MVC Architecture",
                "State Management",
                "Async Data Flow",
                "REST API Integration",
                "Modular Architecture",
                "Local Persistence"
            ],
            "thumbnailSrc": "",
            "thumbnailAlt": "",
            "image": [],
            "year": "2025 Q4",
            "githubLink": "https://github.com/stuartchendev/forkify-app",
            "demoLink": "https://forkify-sturartchen.netlify.app",
            "detailDescription": "Vanilla JavaScript で構築したレシピ検索アプリで、フロントエンドフレームワークに依存せず、MVC アーキテクチャ、集中型 state 管理、予測可能な非同期データフローを示すことを目的としています。",
            "challenges": [
                "フレームワークなしの環境で、model・view・controller 間の責務境界を明確に設計すること",
                "非同期 API データを扱いながら、UI 更新を予測可能に保つこと",
                "外部 API の生レスポンスをそのまま保存せず、application state 用に正規化すること",
                "インタラクションが増えても、DOM 更新ロジックの保守性を保つこと"
            ],
            "features": [
                "async/await を用いた外部 API 連携によるレシピ検索",
                "検索結果、レシピ詳細、ブックマーク、ページネーションを集中管理する application state",
                "model・view・controller の責務を明確に分けた MVC アーキテクチャ",
                "ページネーション、分量調整、ブックマーク保持などのインタラクション機能"
            ]
        },
        {
            "id": "mapty",
            "title": "Mapty ワークアウト管理アプリ",
            "shortDescription": "地図ベースのワークアウト記録アプリを、より明確な MVC アーキテクチャへリファクタリングし、状態分離と保守しやすい UI 挙動に焦点を当てたプロジェクトです。",
            "tags": [
                "OOP → MVC",
                "State Separation",
                "Deterministic Flow",
                "Leaflet Integration",
                "Local Persistence",
                "Geolocation"
            ],
            "thumbnailSrc": "",
            "thumbnailAlt": "",
            "image": [],
            "year": "2025 Q4",
            "githubLink": "https://github.com/stuartchendev/mapty-app",
            "demoLink": "https://mapty-mvc-app.netlify.app/",
            "detailDescription": "地図ベースのワークアウト記録アプリを OOP 構造から MVC へリファクタリングし、状態分離、制御フローの明確さ、長期的な保守性を改善しました。",
            "challenges": [
                "モノリシックな OOP スタイルの実装を、より明確な MVC 構造へリファクタリングすること",
                "domain state と UI instance state を分離し、意図しない render side effects を防ぐこと",
                "地図操作とワークアウト更新のために決定的な制御フローを設計すること",
                "元のアプリを過度に複雑化せずに保守性を高めること"
            ],
            "features": [
                "位置情報とインタラクティブな地図入力を使ったワークアウト作成",
                "localStorage を用いたランニング・サイクリング記録の永続化",
                "model・view・controller をより明確に分離した MVC ベースの構造",
                "state flow をリファクタリングし、機能挙動を拡張・保守しやすく改善"
            ]
        },
        {
            "id": "smart-garage-door-system",
            "title": "スマートガレージドアシステム",
            "shortDescription": "ユーザーが近づくと自動でドアを解錠する、MQTT ベース通信のスマートガレージドアシステムです。",
            "tags": [
                "MQTT Pub/Sub",
                "System Integration",
                "Linux Server Setup",
                "Distributed Communication",
                "Android Client",
                "Device Proximity Detection"
            ],
            "thumbnailSrc": graduateThumb,
            "thumbnailAlt": "Graduate Project Preview",
            "image": [],
            "year": "2023 Q4",
            "githubLink": "",
            "demoLink": "",
            "detailDescription": "MQTT ベースの通信モデルで構築したスマートガレージドアシステムで、event-driven なシステム設計、デバイス間の協調、モバイルクライアントと Linux サーバー間の信頼できるメッセージ処理を示しています。",
            "challenges": [
                "MQTT を用いて信頼できる event-driven 通信フローを設計すること",
                "モバイル端末の近接検知を正確かつ安定して行うこと",
                "client・server・device など複数コンポーネント間のメッセージ処理を協調させること",
                "非同期かつネットワーク依存の条件下でシステム信頼性を維持すること"
            ],
            "features": [
                "モバイル端末の近接検知による自動ドア解錠",
                "client と server 間の MQTT publish/subscribe 通信",
                "Linux サーバーによるメッセージルーティングとデバイス協調",
                "モバイルアプリとドア装置間のリアルタイム通信フロー"
            ]
        }
    ]
}