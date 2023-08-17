import SmoothScroll from 'smooth-scroll'

export default function smoothScroll() {

  const scroll = new SmoothScroll('a[href*="#top"]', {
    updateURL: false,
    speed: 700,
    speedAsDuration: true,
  });
}

