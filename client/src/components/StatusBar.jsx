import { useTheme } from '../contexts/ThemeContext';

const StatusBar = () => {
  const { theme } = useTheme();

  return (
    <div className="status-bar">
      {/* Left side */}
      <div className="status-left">
        <span>⎇ main</span>
        <span>Win Moe Oo</span>
      </div>

      {/* Right side — contact links */}
      <div className="status-right">
        <span>{theme}</span>
        <a href="mailto:winmoeoo.personal@gmail.com">📧 Email</a>
        <a href="https://www.linkedin.com/in/winmoeoo" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/wmo600" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default StatusBar;