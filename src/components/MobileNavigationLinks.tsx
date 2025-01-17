'use client';
import { Navigation } from '@/types/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { classNames } from '@/utils/helpers';

interface MobileNavigationLinksProps {
  navigation: Navigation;
  onClose: () => void;
}

const MobileNavigationLinks: React.FC<MobileNavigationLinksProps> = ({ navigation, onClose }) => {
  const pathname = usePathname();

  return (
    <div className="space-y-6 border-t border-gray-200 px-4 py-6">
      {navigation.pages.map((page) => (
        <div key={page.name} className="flow-root">
          <div
            onClick={onClose}
            className={classNames(
              page.href === pathname ? 'bg-green-700 text-white' : '',
              'rounded-md p-2',
            )}
          >
            <Link href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
              {page.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileNavigationLinks;
