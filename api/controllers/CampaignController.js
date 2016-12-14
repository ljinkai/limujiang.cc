module.exports = {
    /**
     * checkout
     */
    fidget : function(req,res) {
            res.render('campaign/fidgetLayout',{});
    },
    fidgetweibo : function(req,res) {
        res.render('campaign/fidgetWBLayout',{});
    }
};