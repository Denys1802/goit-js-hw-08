import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
//window.addEventListener('touchstart', { passive: true });
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
//console.log(player);

const onPlay = function (data) {
  console.log(data);
  try {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const throtlePlay = throttle(onPlay, 1000);
player.on('timeupdate', throtlePlay);

const getCurrentPlayTime = function () {
  try {
    const getStorage = localStorage.getItem('videoplayer-current-time');
    const parseStorage = JSON.parse(getStorage);
    return parseStorage.seconds;
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

player.setCurrentTime(getCurrentPlayTime());
