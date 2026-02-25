import type { NavItem } from '@/widgets/sidebar/model/Sidebar.types.ts';
import { useLocation, useNavigate } from 'react-router';
type UseSidebarKeyboardReturnType = {
  handleKeydown: (e: React.KeyboardEvent<HTMLUListElement>) => void;
  currentIndex: number;
};
export const useSidebarKeyboard = (
  navItems: Readonly<NavItem[]>,
): UseSidebarKeyboardReturnType => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentIndex = Math.max(
    0,
    navItems.findIndex((i) => i.src === pathname),
  );

  const goToNext = () => {
    const nextIndex = currentIndex === navItems.length - 1 ? 0 : currentIndex + 1;
    navigate(navItems[nextIndex].src);
  };
  const goToPrev = () => {
    const prevIndex = currentIndex === 0 ? navItems.length - 1 : currentIndex - 1;
    navigate(navItems[prevIndex].src);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    switch (e.code) {
      case 'ArrowUp':
        e.preventDefault();
        goToPrev();
        break;
      case 'ArrowDown':
        e.preventDefault();
        goToNext();
        break;
    }
  };
  return { handleKeydown, currentIndex };
};
