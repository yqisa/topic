var t = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
};

module.exports = {
    formatTime: function(e) {
        var n = e.getFullYear(), r = e.getMonth() + 1, g = e.getDate(), o = e.getHours(), u = e.getMinutes(), a = e.getSeconds();
        return [ n, r, g ].map(t).join("/") + " " + [ o, u, a ].map(t).join(":");
    },
    getPageUrl: function() {
        var t = getCurrentPages();
        return t[t.length - 1].route;
    },
    getPageOptions: function() {
        var t = getCurrentPages();
        return t[t.length - 1].options;
    }
};