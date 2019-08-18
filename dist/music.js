const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    lrcType: 3,
    audio: [
      {
        name: "在水一方",
        artist: '李健',
        url: 'http://other.web.ri01.sycdn.kuwo.cn/resource/n2/31/23/2648161877.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/73/49/1131928591.jpg',
        lrc: 'song-post/zaishuiyifang.lrc'
      },
    ]
});
