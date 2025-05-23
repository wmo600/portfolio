import { Link, useLocation } from 'react-router-dom';

const Tabs = () => {
  const { pathname } = useLocation();
  const active = pathname.split('/')[1] || 'home';

  const tabs = [
    { name: 'Home.jsx', path: '/' },
    { name: 'Projects.jsx', path: '/projects' },
    { name: 'Contact.jsx', path: '/contact' },
  ];

  return (
    <div className="tabs">
      {tabs.map((tab) => {
        const isActive = pathname === tab.path || (tab.path === '/' && active === 'home');
        return (
          <Link key={tab.path} to={tab.path}>
            <span className={isActive ? 'active' : ''}>{tab.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Tabs;
