const MOBILE_DEVICES = /Android|androidAfishaRestApp|webOS|iPhone|iPod|iosAfishaRestApp|BlackBerry|IEMobile|windowsAfishaRestApp|Opera Mini/i

const USER_AGENT = (MOBILE_DEVICES.test(window.navigator.userAgent)) ? 'mobile' : 'desktop'

if (USER_AGENT === 'mobile') {
  window.document.body.classList.add('mobile');
} else {
  window.document.body.classList.add('desktop');
}

if (document.documentElement.clientHeight
  < document.documentElement.clientWidth) {
  window.document.body.classList.add('wide');
} else {
  window.document.body.classList.add('narrow');
}
