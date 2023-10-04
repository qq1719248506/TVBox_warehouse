var rule = {
    title:'抓饭体育',
    // host:'https://www.zhuafan.xin',
    host:'https://www.zhuafantiyu.co',
    url:'/sports-home/category/fyclass',
    class_name:'全部&足球&篮球&网球&羽乒&台球&排球&棒球&搏击&电竞&棋盘&户外&聊天&原声&综合',
    class_url:'all&Football&Basketball&Tennis&Badminton&Billiards&Volleyball&Baseball&Wrestling&Popular&Boardgame&Outdoors&Chat&Acoustic&Others',
	homeUrl:'/sports-home/category/all',
    // detailUrl:'https://m.justmi.cn/fyid',
    detailUrl:'https://m.zhuafantiyu.co/fyid',
    searchUrl:'/sports-user/user/search/query-data?keyword=**&searchType=cname',
    searchable:2,
    quickSearch:0,
    headers:{ 
        'User-Agent':'PC_UA',
        'Referer':'https://www.justmi.cn/',
        'Origin':'https://www.justmi.cn'
    },
    limit:6,
    timeout:5000,
    play_parse:true,
    pagecount:{"all":1,"Football":1,"Basketball":1,"Tennis":1,"Badminton":1,"Billiards":1,"Volleyball":1,"Baseball":1,"Wrestling":1,"Popular":1,"Boardgame":1,"Outdoors":1,"Chat":1,"Acoustic":1,"Others":1},
    lazy:'',
    double:false,
    推荐:'*',
    一级:'json:data;cname;imageUrl;uname;id',
    二级:'*',
	搜索:'json:data.channelList;*;*;onlinescore;id',
}