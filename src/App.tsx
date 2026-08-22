import './style/App.css';
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import GuildLine from "./components/NavigationHeader/GuildLine";
import LanguageOptions from "./components/NavigationHeader/LanguageOptions";
import MainLayout from "./components/MainLayout/MainLayout";
import ProjectsPage from "./components/MainLayout/ProjectsPage/ProjectsPage";
import AboutSection from "./components/MainLayout/AboutSection";
import ContactSection from "./components/MainLayout/ContactSection";
import Footer from "./components/Footer/Footer";
import FooterTools from "./components/Footer/FooterTools";
import FooterContent from "./components/Footer/FooterContent";
import {type LanguageId, LANGUAGE_STORAGE_KEY} from "./config";
import {getInitialLanguage} from "./helper/language";
import {languageData} from "./data/language/languageData";
import {lazy, Suspense, useState} from "react";
import {Route, Routes} from "react-router-dom";
import useToolbarVisible from "./components/Footer/useToolbarVisible";
import useTheme from "./components/Footer/useTheme";

const ProjectFocusPage = lazy(() => import("./components/ProjectFocus/ProjectFocusPage"));

// Portfolio-Structure-NOTE:
// main: root
// - <App/>
//     - <NavigationHeader />
//         - <GuildLine />
//         - <LanguageOptions />
//     - <MainLayout>
//         - <AboutSection />
//         - <ProjectsPage />
//         - <ContactSection />
//     - <Footer />
//         - <FooterTools />
//         - <FooterContent />



function App() {
    // Single source of truth that represents which language the user selects
    const [activeLanguageId, setActiveLanguageId] = useState<LanguageId>(()=> getInitialLanguage());

    const handleLanguageChange = (languageId: LanguageId) => {
    setActiveLanguageId(languageId);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, languageId);
    };

    // Derived state
    // languageContent is not stored in state because it has no independent lifecycle
    const currentLanguageUI = languageData[activeLanguageId];

    // For footer showToolbar
    const showToolbar = useToolbarVisible(800);

    // For Theme Toggle
    const {theme, toggleTheme} = useTheme();

    return (
      <>
        <Routes>
            <Route
                path="/"
                element={
                    <PortfolioHome
                        activeLanguageId={activeLanguageId}
                        currentLanguageUI={currentLanguageUI}
                        onLanguageChange={handleLanguageChange}
                    />
                }
            />
            <Route
                path="/projects/:projectId"
                element={
                    <Suspense fallback={<main className="focus-status">Loading case study…</main>}>
                        <ProjectFocusPage activeLanguageId={activeLanguageId}/>
                    </Suspense>
                }
            />
        </Routes>
        <Footer>
            {showToolbar && <FooterTools onToggleTheme={toggleTheme} theme={theme}/>}
            <FooterContent languageUi={currentLanguageUI}/>
        </Footer>
      </>
    )
}

type PortfolioHomeProps = {
    activeLanguageId: LanguageId;
    currentLanguageUI: (typeof languageData)[LanguageId];
    onLanguageChange: (languageId: LanguageId) => void;
};

function PortfolioHome({activeLanguageId, currentLanguageUI, onLanguageChange}: PortfolioHomeProps) {
    return (
        <>
            <NavigationHeader>
                <GuildLine languageUi={currentLanguageUI}/>
                <LanguageOptions languageUi={currentLanguageUI} onSelectLanguage={onLanguageChange}/>
            </NavigationHeader>
            <MainLayout>
                <AboutSection languageUi={currentLanguageUI}/>
                <ProjectsPage activeLanguageId={activeLanguageId}/>
                <ContactSection languageUi={currentLanguageUI}/>
            </MainLayout>
        </>
    );
}

export default App
