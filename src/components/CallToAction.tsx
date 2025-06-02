import HelixImage from '../assets/images/helix2.png'
import EmojiStarImage from '../assets/images/emojistar.png'
import Image from 'next/image';

export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center overflow-x-hidden">
      <div className="container max-w-xl relative">
        <Image src={HelixImage} alt="" className='absolute top-6 left-[calc(100%+36px)] hidden sm:inline'/>
        <Image src={EmojiStarImage} alt="" className='absolute -top-[105px] right-[calc(100%+24px)] hidden sm:inline'/>
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">Get instant access</h2>
        <p className="text-xl text-white/70 mt-5">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input type="email" placeholder="your@email.com" className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"></input>
          <button className="bg-white text-black h-12 rounded-lg px-5">Get access</button>
        </form>
      </div>
    </div>
  );
};
