// components/Hero.js

import Image from 'next/image';

const Hero = () => {
  return (
    
    <div className="text-center mt-4 mx-2">
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
        Lorem ipsum dolor sit amet consectetur. Dignissim enim integer phasellus sed elementum id sed etiam tincidunt. Auctor ornare et tortor eget gravida quam. Augue in sagittis fringilla ultrices molestie sollicitudin sed est. Cum amet maecenas mollis neque dictum pulvinar egestas cursus.
      </p>
      <div className="flex justify-center mt-4 space-x-2">
        <div className="w-1/3 max-w-xs">
          <Image src="/plate1.JPEG" alt="Plate of Food" layout="responsive" width={250} height={250} className="rounded-lg" />
        </div>
        <div className="w-1/3 max-w-xs">
          <Image src="/plate2.JPEG" alt="Plate of Food" layout="responsive" width={250} height={250} className="rounded-lg" />
        </div>
        <div className="w-1/3 max-w-xs">
          <Image src="/plate3.JPEG" alt="Plate of Food" layout="responsive" width={250} height={250} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
