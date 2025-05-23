import { useSidebar } from "../contexts/SidebarContext";
import { useNavigate, useLocation } from "react-router-dom";
import { useTabs } from "../contexts/TabsContext";

const ActivityBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { toggleSidebar } = useSidebar();
  const { openTab } = useTabs();

  return (
    <div className="activity-bar">
      <div className="activity-main">
        <button title="Explorer" onClick={toggleSidebar}>
          📁
        </button>
        <button title="Search" onClick={() => navigate("/search")}>
          🔍
        </button>
        <button title="Extensions" onClick={() => navigate("/extensions")}>
          🧩
        </button>
      </div>

      <div className="activity-bottom">
        <button title="Settings" onClick={() => openTab("/settings")}>
          ⚙️
        </button>
      </div>
    </div>
  );
};

export default ActivityBar;
