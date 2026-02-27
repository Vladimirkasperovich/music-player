import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { DROPDOWN_ITEMS } from '../model/DROPDOWN_ITEMS';
import avatar from '../icons/avatar.png';
import arrowDown from '../icons/arrow-down.svg';
import arrowUp from '../icons/arrow-up.svg';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prevState) => !prevState);
  const ref = useRef<null | HTMLUListElement>(null);
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', (evt) => {
        evt.stopPropagation();
        if (ref.current) {
          console.log(evt.target === ref.current);
        }
      });
    }
  }, [isOpen]);

  return (
    <header className="h-20 bg-black flex justify-end pr-11 pt-5 pb-5">
      <div className="relative text-white flex items-center gap-3 bg-black  rounded-[42px] p-1">
        <img src={avatar} alt="avatar" />
        <span>Dima Kuzyberdin</span>
        <button
          onClick={toggle}
          aria-expanded={isOpen}
          aria-label="Toggle user menu"
          className="w-4 h-4 flex items-center justify-center"
        >
          <img src={isOpen ? arrowUp : arrowDown} alt="" className="w-4 h-4" />
        </button>
        {isOpen && (
          <ul
            className="absolute bg-black top-[42px] left-[30%] font-medium text-[16px] p-4 flex flex-col items-start gap-4 ease-in-out duration-200 transition-colors"
            ref={ref}
          >
            {DROPDOWN_ITEMS.map(({ id, link, text, icon }) => (
              <li key={id}>
                <Link to={link} className="flex items-center gap-2 hover:text-gray-300">
                  <img src={icon} />
                  <span>{text}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};
