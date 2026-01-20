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
    const [activeLanguageId, setActiveLanguageId] = useState(null);


    return (
      <>
        <NavigationHeader>
            <GuildLine language={activeLanguageId}/>
            <LanguageOptions language={activeLanguageId} setLanguage={setActiveLanguageId}/>
        </NavigationHeader>
        <MainLayout>
            <AboutSection language={activeLanguageId}/>
            <ProjectsPage language={activeLanguageId}/>
            <ContactSection language={activeLanguageId}/>
        </MainLayout>
        <Footer>
            <FooterTools/>
            <FooterContent language={activeLanguageId}/>
        </Footer>
      </>
    )
}

export default App