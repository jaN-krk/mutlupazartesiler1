import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from "next-themes";

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
  const { resolvedTheme } = useTheme();
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.PNG"
        alt="logo"
        width={200}
        height={150}
        style={{  height: 'auto' }}
        quality={100}
        className='dark:hidden lg:w-[140px] xl:w-[160px] md:w-[130px] w-[80px]'
      />
      <Image
        src="/images/logo/logo-beyaz.png"
        alt="logo"
        width={200}
        height={150}
        style={{ height: 'auto' }}
        quality={100}
        className='dark:block hidden lg:w-[140px] xl:w-[160px] md:w-[130px] w-[80px]'
      />
    </Link>
  );
};

export default Logo;
