import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TabsContext = createContext();

export const TabsProvider = ({ children }) => {
  const [tabs, setTabs] = useState([]); // Home is NOT an open tab
  const [activeTab, setActiveTab] = useState(null);
  const navigate = useNavigate();

  const openTab = (path) => {
    if (!tabs.includes(path)) {
      setTabs((prev) => [...prev, path]);
    }
    setActiveTab(path);
    navigate(path);
  };

  const closeTab = (path) => {
    const filtered = tabs.filter((tab) => tab !== path);
    setTabs(filtered);

    if (path === activeTab) {
      const fallback = filtered[filtered.length - 1] || null;
      setActiveTab(fallback);
      if (fallback) {
        navigate(fallback);
      } else {
        navigate('/'); // show Home.jsx as fallback (not in tabs)
      }
    }
  };

  return (
    <TabsContext.Provider value={{ tabs, activeTab, openTab, closeTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = () => useContext(TabsContext);
