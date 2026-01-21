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
    // Single Source of truth
    const [activeLanguageId, setActiveLanguageId] = useState(DEFAULT_LANGUAGE);

    // Derived State
    const currentLanguage = languageContent[activeLanguageId];

    return (
      <>
        <NavigationHeader>
            <GuildLine language={currentLanguage}/>
            <LanguageOptions language={currentLanguage} setLanguage={setActiveLanguageId}/>
        </NavigationHeader>
        <MainLayout>
            <AboutSection language={currentLanguage}/>
            <ProjectsPage language={currentLanguage}/>
            <ContactSection language={currentLanguage}/>
        </MainLayout>
        <Footer>
            <FooterTools/>
            <FooterContent language={currentLanguage}/>
        </Footer>
      </>
    )
}

export default App