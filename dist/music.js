const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
       {
            name: '陪你度过漫长岁月',
            artist: '陈奕迅',
            url: 'http://www.ytmp3.cn/down/33576.mp3',
            cover: '/img/suiyueshentou.png',
           
           
        },
        
        {
            name: '岁月神偷',
            artist: '金岐玟',
            url: 'http://www.ytmp3.cn/down/44537.mp3',
            cover: '/img/suiyueshentou.png',
        },
        
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});