import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4">
      <nav>
        <ul className="flex justify-between  items-center lg:mx-8">
          <li>
            <a>
              <Image src="/frenchflag.svg" alt="French Flag" width={24} height={24} />
            </a>
          </li>
          <li className='hidden lg:flex'>  
            <a>
              <p>Horraires et cartes</p>
            </a>

          </li>
          <li>
            <a>
              <Image src="/logo.svg" alt="Logo" width={44} height={44} />
            </a>
          </li>
          <li>
            <a>
              <Image className="lg:hidden" src="/burger.svg" alt="Burger" width={24} height={24} />
            </a>

          </li>
          <li className='hidden lg:flex'>
            <a>
              <p>Réservation</p>
            </a>

          </li>
          <li className='hidden lg:flex'>
            <a>
              <p>Contact</p>
            </a>

          </li>
        </ul>
      </nav>
    </header>

  );
};

export default Header;
