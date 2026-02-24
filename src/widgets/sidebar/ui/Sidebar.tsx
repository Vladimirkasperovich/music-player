import { NAVIGATION } from '@/widgets/sidebar/model/navItem.ts';
import { NavLink } from 'react-router';

export const Sidebar = () => {
  return (
    <nav className="hidden md:block h-screen w-[310px] bg-[#000000] font-bold text-lg">
      <ul className="pl-9 pr-9 flex flex-col gap-6">
        {NAVIGATION.map(({ id, label, src, icon }, index) => (
          <li key={id}>
            <NavLink
              to={src}
              className={({ isActive }) =>
                `flex items-center gap-4 ${isActive ? 'text-red-700' : 'text-white'}`
              }
            >
              <img src={icon} alt={label} />
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
