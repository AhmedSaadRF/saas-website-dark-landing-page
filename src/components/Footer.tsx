import Link from 'next/link';
import InstaIcon from '../assets/icons/insta.svg';
import XSocialIcon from '../assets/icons/x-social.svg';
import TiktokIcon from '../assets/icons/tiktok.svg';
import YoutubeIcon from '../assets/icons/youtube.svg';


export const Footer = () => {
  return (
    <footer className='py-5 bg-black text-white/60 border-t border-white/20'>
      <div className="container">
        <div className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
          <div className="text-center">&copy; 2025 Ahmed Alrefaey. All rights reserved.</div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <Link href="https://www.instagram.com/ahmed7_707_7/" target='_blank'>
                <InstaIcon />
              </Link>
            </li>
            <li>
              <Link href="https://x.com/AHMED76865307" target='_blank'>
                <XSocialIcon />
              </Link>
            </li>
            <li>
              <Link href="https://www.tiktok.com/@7amodyrafraf?_t=ZS-8wr5oY8p716&_r=1" target='_blank'>
                <TiktokIcon />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@AhmedRFRF-z3u" target='_blank'>
                <YoutubeIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
