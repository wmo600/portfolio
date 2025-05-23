import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import AppRouter from "./router/AppRouter";
import { SidebarProvider } from "./contexts/SidebarContext";
import { TabsProvider } from "./contexts/TabsContext";

const App = () => (
  <Router>
    <SidebarProvider>
      <TabsProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </TabsProvider>
    </SidebarProvider>
  </Router>
);

export default App;
