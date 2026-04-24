import { useContext, useState } from 'react';
import { Link } from 'react-router';
import avatar from '../icons/avatar.svg';
import arrowDown from '../icons/arrow-down.svg';
import arrowUp from '../icons/arrow-up.svg';
import { ModalContext, useOutsideClick } from '@/shared/lib';
import { DROPDOWN_ITEMS } from '../model/DROPDOWN_ITEMS';

export const Header = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const { isOpenModal, toggleModal } = useContext(ModalContext);
  const toggleBurgerMenu = () => toggleModal();
  const toggleDropdown = () => setIsOpenDropdown((prevState) => !prevState);
  const ref = useOutsideClick<HTMLDivElement>(isOpenDropdown, () =>
    setIsOpenDropdown(false),
  );

  return (
    <header className="flex h-20 items-center justify-between bg-black pt-5 pr-7.5 pb-5 pl-7.5 md:justify-end">
      <button
        className="flex cursor-pointer flex-col items-center gap-1.5 md:hidden"
        onClick={toggleBurgerMenu}
      >
        <span
          className={`h-1 w-8.75 bg-white duration-300 ${isOpenModal ? 'translate-x-0 translate-y-2.5 -rotate-45' : ''}`}
        />
        <span
          className={`h-1 w-8.75 bg-white duration-300 ${isOpenModal ? 'opacity-0' : ''}`}
        />
        <span
          className={`h-1 w-8.75 bg-white duration-300 ${isOpenModal ? 'translate-x-0 -translate-y-2.5 rotate-45' : ''}`}
        />
      </button>
      <div
        className="relative flex min-w-1/2 items-center justify-end rounded-[42px] bg-black p-1 text-white"
        ref={ref}
      >
        <button onClick={toggleDropdown} className="flex items-center gap-3">
          <span className="h-8.75 w-8.75">
            <img src={avatar} alt="avatar" className="block h-full w-full object-cover" />
          </span>
          <span className="hidden lg:block">Vladimir Kasperovich</span>
          <span className="hidden h-4 w-4 items-center justify-center lg:flex">
            <img src={isOpenDropdown ? arrowUp : arrowDown} alt="arrow" />
          </span>
        </button>

        <ul
          role="menu"
          className={`absolute top-full right-0 z-20 flex flex-col items-start gap-4 bg-black p-4 text-[16px] font-medium transition-all duration-300 ease-in-out ${
            isOpenDropdown
              ? 'pointer-events-auto scale-100 opacity-100'
              : 'pointer-events-none scale-95 opacity-0'
          } `}
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
