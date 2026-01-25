import './App.css';

import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import GuildLine from "./components/NavigationHeader/GuildLine";
import LanguageOptions from "./components/NavigationHeader/LanguageOptions";
import MainLayout from "./components/MainLayout/MainLayout";
import ProjectsPage from "./components/MainLayout/ProjectsPage/ProjectsPage.jsx";
import AboutSection from "./components/MainLayout/AboutSection";
import ContactSection from "./components/MainLayout/ContactSection";
import Footer from "./components/Footer/Footer";
import FooterTools from "./components/Footer/FooterTools";
import FooterContent from "./components/Footer/FooterContent";
import languageContent from "./Language/LanguageContent";
import {DEFAULT_LANGUAGE} from "./config";
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
    const [activeLanguageId, setActiveLanguageId] = useState(DEFAULT_LANGUAGE);

    // Derived state
    // languageContent is not stored in state because it has no independent lifecycle
    const currentLanguageUI = languageContent[activeLanguageId];

    return (
      <>
        <NavigationHeader>
            <GuildLine language={currentLanguageUI}/>
            <LanguageOptions language={currentLanguageUI} setLanguage={setActiveLanguageId}/>
        </NavigationHeader>
        <MainLayout>
            <AboutSection language={currentLanguageUI}/>
            <ProjectsPage activeLanguageId={activeLanguageId}/>
            <ContactSection language={currentLanguageUI}/>
        </MainLayout>
        <Footer>
            <FooterTools/>
            <FooterContent language={currentLanguageUI}/>
        </Footer>
      </>
    )
}

export default App