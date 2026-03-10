import type { RoutePath } from '../routes';

export interface NavItem {
  id: number;
  label: string;
  src: Exclude<RoutePath, '*'>;
  icon: string;
}
