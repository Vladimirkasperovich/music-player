import { useCallback, useState } from 'react';
import { Link } from 'react-router';
import { DROPDOWN_ITEMS } from '../model/DROPDOWN_ITEMS';
import avatar from '../icons/avatar.svg';
import arrowDown from '../icons/arrow-down.svg';
import arrowUp from '../icons/arrow-up.svg';
import { useOutsideClick } from '@/shared/lib';
// TODO need to finish dropdown position adaptive!!!!
export const Header = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const toggleBurgerMenu = () => setIsOpenBurgerMenu((prevState) => !prevState);
  const toggleDropdown = () => setIsOpenDropdown((prevState) => !prevState);
  const close = useCallback(() => setIsOpenDropdown(false), []);
  const ref = useOutsideClick<HTMLDivElement>(isOpenDropdown, () => close());

  return (
    <header className="h-20 bg-black flex items-center justify-between  md:justify-end pr-[30px] pt-5 pb-5 pl-[30px]">
      <div
        className="md:hidden flex cursor-pointer flex-col items-center gap-1.5"
        onClick={toggleBurgerMenu}
      >
        <div
          className={`w-[35px] h-1 bg-white duration-300 ${isOpenBurgerMenu ? 'translate-x-0 translate-y-[10px] -rotate-45' : ''}`}
        />
        <div
          className={`w-[35px] h-1 bg-white duration-300 ${isOpenBurgerMenu ? 'opacity-0' : ''}`}
        />
        <div
          className={`w-[35px] h-1 bg-white duration-300 ${isOpenBurgerMenu ? 'translate-x-0 -translate-y-[10px] rotate-45' : ''}`}
        />
      </div>
      <div className="relative border border-white w-[200px] lg:w-auto flex justify-end">
        <div
          ref={ref}
          className="text-white flex items-center gap-3 bg-black  rounded-[42px] p-1"
          onClick={toggleDropdown}
        >
          <img src={avatar} alt="avatar" className="h-[35px] w-[35px] object-cover" />
          <span className="hidden lg:block">Dima Kuzyberdin</span>
          <button
            aria-expanded={isOpenDropdown}
            aria-label="Toggle user menu"
            className="hidden lg:flex w-4 h-4  items-center justify-center"
          >
            <img src={isOpenDropdown ? arrowUp : arrowDown} alt="arrow" />
          </button>
          {isOpenDropdown && (
            <ul
              className={`
            absolute bg-black top-[42px] right-[30%] font-medium text-[16px] p-4
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
                    onClick={close}
                    className="flex items-center gap-2 hover:text-gray-300"
                  >
                    <img src={icon} alt="" />
                    <span>{text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};
