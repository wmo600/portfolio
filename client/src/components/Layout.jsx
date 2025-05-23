import { motion } from "framer-motion";
import ActivityBar from "./ActivityBar";
import { useSidebar } from "../contexts/SidebarContext";
import Sidebar from "./Sidebar";
import Tabs from "./Tabs";

const Layout = ({ children }) => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className="layout">
      <ActivityBar />

      <motion.div
        className="sidebar"
        animate={{
          width: isSidebarOpen ? 200 : 0,
          opacity: isSidebarOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          overflow: "hidden",
          pointerEvents: isSidebarOpen ? "auto" : "none",
        }}
      >
        <Sidebar />
      </motion.div>

      <motion.div
        className="main-area"
        animate={{
          marginLeft: isSidebarOpen ? 0 : -200,
        }}
        transition={{ duration: 0.3 }}
      >
        <Tabs />
        <div className="code-window">{children}</div>
      </motion.div>
    </div>
  );
};

export default Layout;
