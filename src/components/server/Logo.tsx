import Image from 'next/image';

const Logo: React.FC = () => (
  <div className="ml-4 flex lg:ml-0">
    <a href="#">
      <span className="sr-only">Your Company</span>
      <Image
        alt="Your Company Logo"
        src="https://tailwindui.com/plus/img/logos/mark.svg?color=green&shade=700"
        className="h-8 w-auto"
        width={20}
        height={20}
      />
    </a>
  </div>
);

export default Logo;
