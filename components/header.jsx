import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4 fixed w-full">
      <nav>
        <ul className="flex justify-between items-center lg:mx-8">
          <li>
            <a>
              <Image src="/frenchflag.svg" alt="French Flag" width={24} height={24} />
            </a>
          </li>
          <div className="flex items-center space-x-4 lg:space-x-8">
            <li className="hidden lg:block">
              <a>
                <p>Horaires et cartes</p>
              </a>
            </li>
            <li>
              <a>
                <Image src="/logo.svg" alt="Logo" width={44} height={44} />
              </a>
            </li>
            <li className="lg:hidden">
              <a>
                <Image src="/burger.svg" alt="Burger" width={24} height={24} />
              </a>
            </li>
            <li className="hidden lg:block">
              <a>
                <p>Réservation</p>
              </a>
            </li>
            <li className="hidden lg:block">
              <a>
                <p>Contact</p>
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
