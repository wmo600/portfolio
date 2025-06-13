import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const Settings = () => {
  const { theme, setTheme, availableThemes } = useTheme();

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-green-300 mb-4">$ settings</h1>

      <div className="mb-4">
        <label className="block text-gray-400 mb-1">Theme</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="bg-[#252526] text-white border border-[#444] rounded px-3 py-2 w-64 focus:outline-none"
        >
          {availableThemes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <p className="text-gray-500 text-sm">
        Your selected theme will be saved and applied automatically.
      </p>
    </motion.div>
  );
};

export default Settings;
