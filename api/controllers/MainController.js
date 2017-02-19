var data = [
    {"id":"wen-01","title":"文 - 如何选用背包不伤身","desc":"肩颈酸痛、高低肩、脊柱劳损……这些让人苦不堪言的疾病居然有可能是背包包“背”出来的！每天上下班、上下学相伴的背包、挎包，是如何成为危害健康的“炸弹”？", "keyword":"脊柱劳损,肩颈酸痛,高低肩",
        "img":"http://7u2qrr.com1.z0.glb.clouddn.com/2017-01-15-jne.jpg?imageView2/2/w/600"},
    {"id":"04","title":"周报04 | 推荐一款出行背包","desc":"生活和工作中，出行背包已经是每个人都会用到的物件。一款舒适的背包既满足物品携带的需求，也能体现自己的个性。下面几款是[健行]群内分享的背包，一起来看看吧。", "keyword":"出行背包",
        "img":"http://7u2qrr.com1.z0.glb.clouddn.com/2017-01-15-marked-master.jpg?imageView2/2/w/600"},
    {"id":"03","title":"周报03 | 2016影响自己最大的一[书|观念|事]","desc":"《摄影笔记》、《你今天真好看》、《软技能-代码之外的生存指南》、《把时间当做朋友》、《微服务设计》等", "keyword":"摄影笔记,你今天真好看,把时间当做朋友",
        "img":"http://7u2qrr.com1.z0.glb.clouddn.com/2017-01-07-1614346007-1.jpg?imageView2/2/w/600"},
    {"id":"02","title":"周报02 | 防辐射蓝光眼镜","desc":"「一件你工作或生活中的健康好物？」乳胶枕、电动牙刷、泡脚片、黄老五花生酥、Keep、跳跳糖、HHKB、买买买购物助手", "keyword":"乳胶枕,电动牙刷,黄老五花生酥,泡脚片",
        "img":"http://7u2qrr.com1.z0.glb.clouddn.com/2016-12-31-572aad4dN68040164.jpg?imageView2/2/w/600"},
    {"id":"01","title":"周报01 | 娱乐不是休息","desc":"如何更好的休息？ 、小夜灯 + 台灯（智能化控制）、吸奇不倒杯 、Mac上快递查询", "keyword":"吸奇不倒杯,小夜灯,Mac上快递查询",
        "img":"http://7u2qrr.com1.z0.glb.clouddn.com/2016-12-21-66372-20160217172122597-573511941.jpg"},
];

module.exports = {
    main : function(req, res) {
        res.view('main', {"articles":data});
    },
    article : function(req,res) {
        var id = req.param("id");
        res.locals.layout = "articleLayout";
        var item = {};
        for (var i = 0;  i < data.length;i++) {
            if (data[i].id == id) {
                item = data[i];
                break;
            }
        }
        res.view('week/' + id, item);
    }
};

