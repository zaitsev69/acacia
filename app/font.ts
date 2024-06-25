import { Roboto, Playfair_Display} from 'next/font/google'
 

export const playfair_display = Playfair_Display ({
  subsets: ['latin'],
  display: 'swap',
})

export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font_roboto'
})