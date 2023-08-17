import $ from 'jquery'

export const cookieJS = () => {

  const cookie = $('.data-cookie');
  if (sessionStorage.getItem('cookie') !== 'cookie-id') {
    cookie.fadeIn('slow');
  }
  $('.data-btn-close-cookie').on('click', function() {
    cookie.fadeOut();
    sessionStorage.setItem('cookie', 'cookie-id')
  })
}
