const ap = new APlayer({
    container: document.getElementById('player'),
    listFolded: true,//列表默认折叠
    listMaxHeight: 90,//列表最大高度
//  lrcType: 3, //此为歌词格式，没有歌词可以直接删掉这一行
    audio: [
        {
            name: '陪你度过漫长岁月',
            artist: '陈奕迅',
            url: 'http://www.ytmp3.cn/down/33576.mp3',
            cover: '/img/suiyueshentou.png',
//          lrc: 'lrc1.lrc',
            theme: '#ebd0c2'
        },
        {
            name: '岁月神偷',
            artist: '金岐玟',
            url: 'http://www.ytmp3.cn/down/44537.mp3',
            cover: '/img/suiyueshentou.png',
//          lrc: 'lrc2.lrc',
            theme: '#46718b'
        }
    ]
});