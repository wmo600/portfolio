import Sidebar from './Sidebar';
import Tabs from './Tabs';

const VSCodeShell = ({ children }) => (
  <div className="layout">
    <Sidebar />
    <div className="main-area">
      <Tabs />
      <div className="code-window">{children}</div>
    </div>
  </div>
);

export default VSCodeShell;
