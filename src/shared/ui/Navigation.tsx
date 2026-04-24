import { type FC, useContext } from 'react';
import { type NavItem } from '@/shared/model';
import { NavLink } from 'react-router';
import { ModalContext } from '@/shared/lib';

interface NavigationProps {
  items: Readonly<NavItem[]>;
  onKeyDown?: (e: React.KeyboardEvent<HTMLUListElement>) => void;
  tabIndex?: number;
}

export const Navigation: FC<NavigationProps> = ({ items, tabIndex, onKeyDown }) => {
  const { closeModal } = useContext(ModalContext);
  const handleClick = () => {
    closeModal();
  };
  return (
    <ul className="flex flex-col gap-6 pr-9 pl-9" onKeyDown={onKeyDown}>
      {items.map(({ id, label, src, icon }, index) => (
        <li key={id}>
          <NavLink
            onClick={handleClick}
            end
            tabIndex={tabIndex === index ? 0 : -1}
            to={src}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-md px-3 py-2 transition-colors duration-200 ease-out ${
                isActive
                  ? 'bg-neutral-800 text-white'
                  : 'text-white/70 hover:bg-neutral-900 hover:text-white'
              }`
            }
          >
            <img src={icon} alt={label} className="h-7 w-7" />
            <span>{label}</span>
          </NavLink>
          {(index + 1) % 2 === 0 && index < items.length - 1 && (
            <hr className="mt-8 text-[#282828]" />
          )}
        </li>
      ))}
    </ul>
  );
};
