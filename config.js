// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "亲爱的赵赵",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "今天是你的生日",  // 同上...
        "也是我认识你之后的第一个生日",
        "我们从微博相识到现在大概也有4个多月了",
        "缘分可还真的是妙不可言",
        "你能在这么多人里看到我，咱还能聊的那么好真的好神奇",
        "但是由于我不太会讲话，也是多亏了你有在一直跟我搭话嘿嘿",
        "你是我认识的第一个喜欢 TNT 的人",
        "也是我认识的第一个在国内的朋友",
        "往后",
        "期待我们的见面",
        "期待我们一起去打卡",
        "期待我们一起去线下",
        "期待我们一起去见他们！",
        "最后",
        "祝你快乐，不止生日",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "亲爱的赵赵": "./imgs/zz.jpg",
        "也是我认识你之后的第一个生日": "./imgs/3.jpg",
        "但是由于我不太会讲话，也是多亏了你有在一直跟我搭话嘿嘿": "./imgs/4.jpg",
        "往后": "./imgs/1.jpg",
        "最后": "./imgs/2.jpg",
        "期待我们一起去见他们！": "./imgs/tnt.jpg",
        "祝你快乐，不止生日": "./imgs/zzyyhx.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "装饰",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
