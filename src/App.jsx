import ProjectsPage from "./components/MainLayout/ProjectsPage/ProjectsPage.jsx";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import MainLayout from "./components/MainLayout/MainLayout";
import './App.css';
import Footer from "./components/Footer/Footer";

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

        </NavigationHeader>
        <MainLayout>
            <ProjectsPage />
        </MainLayout>
        <Footer>

        </Footer>
      </>
  )
}

export default App