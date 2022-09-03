import { useSite } from './context/SiteContext';

export default function SwitchTheme() {
  const { theme, setTheme } = useSite();

  return (
    <>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        type="button"
        className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Tema Değiştir "
        <span className="text-lg">{theme === 'dark' ? 'light' : 'dark'}</span> "
      </button>
    </>
  );
}
