import { useSidebarKeyboard } from './useSidebarKeyboard';
import { NAVIGATION } from '@/shared/model';
import { Navigation } from '@/shared/ui';

export const Sidebar = () => {
  const { handleKeydown, currentIndex } = useSidebarKeyboard(NAVIGATION);
  return (
    <nav className="hidden w-70 bg-black text-lg font-bold md:block">
      <Navigation tabIndex={currentIndex} items={NAVIGATION} onKeyDown={handleKeydown} />
    </nav>
  );
};
