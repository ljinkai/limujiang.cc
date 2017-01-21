module.exports = {
    article : function(req,res) {
        var id = req.param("id");
        res.locals.layout = "articleLayout";
        var data = {"title":"周报01 | 娱乐不是休息","desc":"如何更好的休息？ 、小夜灯 + 台灯（智能化控制）、吸奇不倒杯 、Mac上快递查询",
            "keyword":"娱乐不是休息"};
        res.view('week/' + id,data);
    }
};

