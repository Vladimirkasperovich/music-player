import { useState } from 'react';
import { Link } from 'react-router';
import { DROPDOWN_ITEMS } from '../model/DROPDOWN_ITEMS';
import avatar from '../icons/avatar.svg';
import arrowDown from '../icons/arrow-down.svg';
import arrowUp from '../icons/arrow-up.svg';
import { useOutsideClick } from '@/shared/lib';

export const Header = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const toggleBurgerMenu = () => setIsOpenBurgerMenu((prevState) => !prevState);
  const toggleDropdown = () => setIsOpenDropdown((prevState) => !prevState);
  const ref = useOutsideClick<HTMLButtonElement>(isOpenDropdown, () =>
    setIsOpenDropdown(false),
  );

  return (
    <header className="h-20 bg-black flex items-center justify-between  md:justify-end pr-[30px] pt-5 pb-5 pl-[30px]">
      <button
        className="md:hidden flex cursor-pointer flex-col items-center gap-1.5"
        onClick={toggleBurgerMenu}
      >
        <span
          className={`w-[35px] h-1 bg-white duration-300 ${isOpenBurgerMenu ? 'translate-x-0 translate-y-[10px] -rotate-45' : ''}`}
        />
        <span
          className={`w-[35px] h-1 bg-white duration-300 ${isOpenBurgerMenu ? 'opacity-0' : ''}`}
        />
        <span
          className={`w-[35px] h-1 bg-white duration-300 ${isOpenBurgerMenu ? 'translate-x-0 -translate-y-[10px] rotate-45' : ''}`}
        />
      </button>
      <div className="relative min-w-1/2 text-white flex items-center justify-end bg-black  rounded-[42px] p-1">
        <button onClick={toggleDropdown} className="flex items-center gap-3" ref={ref}>
          <span className="h-[35px] w-[35px]">
            <img src={avatar} alt="avatar" className="w-full h-full object-cover block" />
          </span>
          <span className="hidden lg:block">Vladimir Kasperovich</span>
          <span className="hidden lg:flex w-4 h-4  items-center justify-center">
            <img src={isOpenDropdown ? arrowUp : arrowDown} alt="arrow" />
          </span>
        </button>

        <ul
          role="menu"
          className={`
            absolute bg-black top-full right-0 font-medium text-[16px] p-4
            flex flex-col items-start gap-4 ease-in-out duration-300 transition-all
            ${
              isOpenDropdown
                ? 'opacity-100 scale-100 pointer-events-auto'
                : 'opacity-0 scale-95 pointer-events-none'
            }
             `}
        >
          {DROPDOWN_ITEMS.map(({ id, link, text, icon }) => (
            <li key={id} className="flex items-center gap-2 hover:text-gray-300">
              <Link
                to={link}
                onClick={() => setIsOpenDropdown(false)}
                className="flex items-center gap-2 hover:text-gray-300"
              >
                <img src={icon} alt={`dropdown ${text}`} />
                <span>{text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
