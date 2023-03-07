import React from 'react';
import Im_Profile from '../assets/img/icons/user.svg';
import Im_Matieres from '../assets/img/icons/book.svg';
import Im_Direct from '../assets/img/icons/cast.svg';
import Im_Forum from '../assets/img/icons/chat.svg';
import Im_Facebook from '../assets/img/icons/facebook.svg';
import Im_Instagram from '../assets/img/icons/instagram.svg';
import Im_Youtube from '../assets/img/icons/youtube.svg';
import Im_Videos from '../assets/img/icons/video.svg';

export default {
  HEADERS_API: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  DRAWER_WIDTH: 280,
  SIDEBAR_LIST: [
    {
      id: 2,
      icon: Im_Profile,
      name: 'Mon profil',
      url: '/home',
      type: 'route',
      permission: false,
    },
    {
      id: 3,
      icon: Im_Matieres,
      name: 'Matières',
      // url: '/matieres',
      url: '/about',
      type: 'route',
      permission: false,
    },
    {
      id: 4,
      icon: Im_Videos,
      name: 'Vidéos',
      url: '/videos',
      type: 'route',
      permission: false,
    },
    {
      id: 7,
      icon: Im_Direct,
      name: 'Mes séances en direct',
      url: '/seances-en-direct',
      type: 'route',
      permission: false,
    },
    {
      id: 11,
      icon: Im_Forum,
      name: 'Forum',
      url: 'https://forum.takiacademy.com',
      type: 'link',
      permission: false,
    },
  ],
  SOCIALS_LIST: [
    {
      name: 'Facebook',
      img: Im_Facebook,
      url: 'https://www.facebook.com/takiacademy',
    },
    {
      name: 'Instagram',
      img: Im_Instagram,
      url: 'https://www.instagram.com/takiacademy',
    },
    {
      name: 'Youtube',
      img: Im_Youtube,
      url: 'https://www.youtube.com/takiacademy',
    },
  ],
};
