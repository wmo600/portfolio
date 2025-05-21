import Layout from "./components/Layout";
import TerminalIntro from "./components/TerminalIntro";
import ProjectList from "./components/ProjectList";
import ContactInfo from "./components/ContactInfo";

function App() {
  return (
    <Layout>
      <TerminalIntro />
      <ProjectList />
      <ContactInfo />
    </Layout>
  );
}

export default App;
