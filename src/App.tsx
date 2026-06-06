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
import {useState} from "react";
import useToolbarVisible from "./components/Footer/useToolbarVisible";
import useTheme from "./components/Footer/useTheme";

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
        <NavigationHeader>
            <GuildLine languageUi={currentLanguageUI}/>
            <LanguageOptions languageUi={currentLanguageUI} onSelectLanguage={handleLanguageChange}/>
        </NavigationHeader>
        <MainLayout>
            <AboutSection languageUi={currentLanguageUI}/>
            <ProjectsPage activeLanguageId={activeLanguageId}/>
            <ContactSection languageUi={currentLanguageUI}/>
        </MainLayout>
        <Footer>
            {showToolbar && <FooterTools onToggleTheme={toggleTheme} theme={theme}/>}
            <FooterContent languageUi={currentLanguageUI}/>
        </Footer>
      </>
    )
}
export default App