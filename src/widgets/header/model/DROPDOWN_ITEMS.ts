import type { DropdownItem } from '@/widgets/header/model/Header.types.ts';
import userIcon from '../icons/user.svg';
import logout from '../icons/logout.svg';
import { ROUTES_PATHS } from '@/shared/routes';

export const DROPDOWN_ITEMS: DropdownItem[] = [
  { id: 1, text: 'My profile', icon: userIcon, link: ROUTES_PATHS.profile },
  { id: 2, text: 'Logout', icon: logout, link: '#' },
];
