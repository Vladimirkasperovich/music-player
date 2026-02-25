import type { RoutePath } from '@/shared/routes';

export interface NavItem {
  id: number;
  label: string;
  src: Exclude<RoutePath, '*'>;
  icon: string;
}
