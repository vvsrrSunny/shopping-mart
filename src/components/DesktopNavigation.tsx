import Link from 'next/link';
import { Navigation } from '@/types/types';

interface DesktopNavigationProps {
  navigation: Navigation;
  pathname: string | null;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ navigation, pathname }) => (
  <div className="hidden lg:ml-8 lg:block lg:self-stretch">
    <div className="flex h-full space-x-8">
      {navigation.pages.map((page, index) => (
        <Link
          href={page.href}
          key={index}
          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
        >
          <p
            className={
              page.href === pathname
                ? 'underline decoration-green-700 decoration-2 underline-offset-8'
                : ''
            }
          >
            {page.name}
          </p>
        </Link>
      ))}
    </div>
  </div>
);

export default DesktopNavigation;
