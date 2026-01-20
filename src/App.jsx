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
  return (
      <>
        <NavigationHeader>
            <GuildLine/>
            <LanguageOptions/>
        </NavigationHeader>
        <MainLayout>
            <AboutSection />
            <ProjectsPage />
            <ContactSection />
        </MainLayout>
        <Footer>
            <FooterTools/>
            <FooterContent/>
        </Footer>
      </>
  )
}

export default App