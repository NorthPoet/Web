 // 动画效果初始化
 new WOW().init();
 // 申明一个播放器
 new DPlayer({
     container: document.getElementById('dplayer'),
     autoplay: false,
     theme: '#FADFA3',
     loop: false,
     lang: 'zh-cn',
     screenshot: true,
     hotkey: true,
     preload: 'auto',
     logo: 'img/TexAILogo.png',
     volume: 0.7,
     mutex: true,
     video: {
         url: 'video/1.mp4',
         pic: 'img/baiduface_post.jpg',
         thumbnails: 'img/baiduface_post.jpg',
         type: 'auto'
     },
     subtitle: {
         url: '',
         type: '',
         fontSize: '25px',
         bottom: '10%',
         color: '#b7daff'
     },
     contextmenu: [
         {
             text: 'susmote.com版权所有',
             link: 'https://www.susmote.com'
         }
     ]
 });