import { NAVIGATION } from '@/widgets/sidebar/model/navItem.ts';
import { NavLink } from 'react-router';
import { useSidebarKeyboard } from '@/widgets/sidebar/ui/useSidebarKeyboard.ts';

export const Sidebar = () => {
  const { handleKeydown, currentIndex } = useSidebarKeyboard(NAVIGATION);
  return (
    <nav className="hidden md:block w-[280px] bg-black font-bold text-lg">
      <ul className="pl-9 pr-9 flex flex-col gap-6" onKeyDown={handleKeydown}>
        {NAVIGATION.map(({ id, label, src, icon }, index) => (
          <li key={id}>
            <NavLink
              tabIndex={currentIndex === index ? 0 : -1}
              to={src}
              className={({ isActive }) =>
                `
                  flex items-center gap-4
                  px-3 py-2 rounded-md
                  transition-colors duration-200 ease-out
                   ${
                     isActive
                       ? 'bg-neutral-800 text-white'
                       : 'text-white/70 hover:text-white hover:bg-neutral-900'
                   }`
              }
            >
              <img src={icon} alt={label} className="w-7 h-7" />
              <span>{label}</span>
            </NavLink>
            {(index + 1) % 2 === 0 && index < NAVIGATION.length - 1 && (
              <hr className="mt-8 text-[#282828]" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
