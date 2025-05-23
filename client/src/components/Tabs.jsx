import { useTabs } from "../contexts/TabsContext";

const tabMap = {
  "/projects": "Projects.jsx",
  "/contact": "Contact.jsx",
  "/settings": "Settings.jsx"
};

const Tabs = () => {
  const { tabs, activeTab, openTab, closeTab } = useTabs();

  return (
    <div className="tabs">
      {tabs
        .filter((tab) => tab !== '/') // ⬅ Don't show Home as a tab
        .map((tab) => (
          <div
            key={tab}
            className={`tab ${tab === activeTab ? "active" : ""}`}
            onClick={() => openTab(tab)}
          >
            <span>{tabMap[tab]}</span>
            <button
              className="close-tab"
              onClick={(e) => {
                e.stopPropagation();
                closeTab(tab);
              }}
            >
              ×
            </button>
          </div>
        ))}
    </div>
  );
};

export default Tabs;
