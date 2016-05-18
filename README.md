# deepBacktop

use

        var backToper = document.getElementById('backtop');
        deepBackTop({
            content : backToper, // * 必须项，返回顶部的元素
            flow : true, // 是否需要有滚动效果
            background : '#272822', // 元素background
            animate : 'easeOutQuad' // 动画效果，参照deepEasse.js 30+ ease效果
        });