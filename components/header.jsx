import Image from 'next/image';

const Header = ({}) => {
  return (
    <header className="bg-grey text-white p-2 lg:p-2 fixed w-full z-50">
      <nav>
        <ul className="flex justify-between items-center lg:mx-8">
          <li>
            <a>
              <Image src="/frenchflag.svg" alt="French Flag" width={24} height={24} />
            </a>
          </li>
            <li>
              <a>
                <Image  src="/logobrown.svg" alt="Logo" width={44} height={44} className='lg:w-16' />
              </a>
            </li>
            <li className="">
              <a>
                <Image src="/burger.svg" alt="Burger" width={24} height={24} />
              </a>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
