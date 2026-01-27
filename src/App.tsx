import './App.css';

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
import {DEFAULT_LANGUAGE} from "./config";
import type {LanguageId} from "./types/i18n";
import {languageData} from "./data/language/languageData";
import {useState} from "react";

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
    const [activeLanguageId, setActiveLanguageId] = useState<LanguageId>(DEFAULT_LANGUAGE);

    // Derived state
    // languageContent is not stored in state because it has no independent lifecycle
    const currentLanguageUI = languageData[activeLanguageId];

    return (
      <>
        <NavigationHeader>
            <GuildLine languageUi={currentLanguageUI}/>
            <LanguageOptions languageUi={currentLanguageUI} onSelectLanguage={setActiveLanguageId}/>
        </NavigationHeader>
        <MainLayout>
            <AboutSection languageUi={currentLanguageUI}/>
            <ProjectsPage activeLanguageId={activeLanguageId}/>
            <ContactSection languageUi={currentLanguageUI}/>
        </MainLayout>
        <Footer>
            <FooterTools/>
            <FooterContent languageUi={currentLanguageUI}/>
        </Footer>
      </>
    )
}
export default App