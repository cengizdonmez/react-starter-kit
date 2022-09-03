import SwitchTheme from '../SwitchTheme';
import { useSite } from '../context/SiteContext';

export default function Header() {
  const { theme } = useSite();

  return (
    <header
      className={
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <span className="font-bold tracking-widest text-xl ">LOGO</span>
            <div className="ml-10 hidden space-x-8 lg:block">
              <li className="inline-block text-base font-medium ">Solutions</li>

              <li className="inline-block text-base font-medium ">Pricing</li>

              <li className="inline-block text-base font-medium ">Docs</li>

              <li className="inline-block text-base font-medium ">Company</li>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <li className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75">
              Sign in
            </li>
            <li className="inline-block rounded-md border border-transparent bg-gray-600 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75">
              Sign up
            </li>
            <SwitchTheme />
          </div>
        </div>
      </nav>
    </header>
  );
}
