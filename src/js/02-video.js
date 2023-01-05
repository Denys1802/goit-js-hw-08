import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  try {
    localStorage.setItem(STORAGE_KEY, data.seconds);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const throtlePlay = throttle(onPlay, 1000);
player.on('timeupdate', throtlePlay);

player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);
