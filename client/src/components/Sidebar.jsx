import { useState } from "react";
import jsxIcon from "../assets/icons/jsx-icon.svg";
import { useTheme } from "../contexts/ThemeContext";
import { useTabs } from "../contexts/TabsContext";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const { toggleTheme } = useTheme();
  const { openTab } = useTabs();

  const files = [
    { name: "Projects.jsx", path: "/projects" },
    { name: "Contact.jsx", path: "/contact" },
  ];

  return (
    <aside className="sidebar">
      <div>
        <h2 className="sidebar-title">EXPLORER</h2>
        <div className="folder">
          <div className="folder-label" onClick={() => setOpen(!open)}>
            {open ? "▼" : "▶"} portfolio
          </div>
          {open && (
            <ul className="file-list">
              {files.map(({ name, path }) => (
                <li key={path} className="file-item" onClick={() => openTab(path)}>
                  <div className="file-link">
                    <img src={jsxIcon} alt="jsx" className="file-icon" />
                    {name}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
