import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
//window.addEventListener('touchstart', { passive: true });
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  try {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const throtlePlay = throttle(onPlay, 1000);
player.on('timeupdate', throtlePlay);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

// player.on(
//   'timeupdate',
//   throttle(function (time) {
//     localStorage.setItem('videoplayer-current-time', time.seconds);
//   }, 1000)
// );

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
