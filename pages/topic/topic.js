var t = require("../../utils/controller.js"), a = (require("../../utils/utiltopic.js"), 
0), e = [];

Page({
    data: {
        socialArea: 0,
        socialYear: 0,
        fundArea: 0,
        fundYear: 0,
        houseCount: 1,
        isParent: 0
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        var a = t.getTopic(1);
        this.setData(a), this.setQuestionIndex(0), this.setData({
            showResult: !1,
            checked: !1,
            socialArea: 0,
            socialYear: 0,
            fundArea: 0,
            fundYear: 0,
            houseCount: 1,
            isParent: 0
        });
    },
    onHide: function() {},
    onUnload: function() {
        this.setData({
            showResult: !1
        });
    },
    onShareAppMessage: function() {
        return {
            title: "最新购房资格查询",
            path: "/subPackages/project/pages/mapLookHouse",
        };
    },
    radioChange: function(t) {
        var e = this, s = +t.detail.value, i = this.data.topics["question" + a], n = !1;
        console.log(a)
        switch (a) {
          case 0:
            if (s == 1) {
              e.showResult1()
              this.setData({
                current: i
              }), this.setData({
                checked: !1
              });
              return;
            };
            break;
          case 1:
            this.setData({
                socialArea: s
            });
            break;

          case 2:
            this.setData({
              fundArea: s
            }), 1 == s && (this.setData({
              isParent: 1
            }), n = !0);
            break;

          case 3:
            

            break;

          case 4:
            this.setData({
              fundArea: s
            }), 1 == s && (this.setData({
              isParent: 1
            }), n = !0);
            break;

          case 6:
          case 7:
          case 8:
            this.setData({
                houseCount: s
            }), n = !0;
            break;

          case 5:
            this.setData({
                isParent: 0
            }),
            
             2 == s && (this.setData({
                isParent: 1
            }), n = !0);
            if (s == 1) {
              e.showResult1()
              return;
            };
            break;
        }
        var o = i.options[s].next || a + 1;
      console.log(o)
      if (o==7){
        e.showResult1()
        return;
      }
        setTimeout(function() {
            n ? e.showResult() : e.setQuestionIndex(o);
        }, 200);
    },
    showResult: function() {
        var t = this.getResult(), a = this.data.results.result1;
        t.length > 0 && ((a = this.data.results.result2).area = t.join(" + ")), this.setData({
            result: a,
            showResult: !0
        });
        console.log(a)
    },
  showResult1: function () {
    var t = this.getResult(), a = this.data.results.result2;
    t.length > 0 && ((a = this.data.results.result2).area = t.join(" + ")), this.setData({
      result: a,
      showResult: !0
    });
    console.log(a)
  },
    setQuestionIndex: function(t) {
      console.log(414)
        this.setData({
            showResult: !1
        }), 0 == t && (e = []), e.push(t), a = t;
        var s = this.data.topics["question" + t], i = {
            isFirst: 0 == t,
            question: s.question,
            options: s.options
        };
        this.setData({
            current: i
        }), this.setData({
            checked: !1
        });
    },
    retest: function() {
        wx.redirectTo({
            url: "../topic/topic"
        });
    },
    lastStep: function() {
        if (this.data.showResult) {
            var t = e.pop();
            this.setQuestionIndex(t);
        } else if (e.length > 1) {
            e.pop();
            var a = e.pop();
            this.setQuestionIndex(a);
        } else this.setQuestionIndex(0);
    },
    getResult: function() {
        console.warn("this.data", this.data);
        var t = [ "远郊" ];
        return 0 == this.data.socialArea && 0 == this.data.fundArea ? [] : 1 == this.data.isParent ? [] : 0 == this.data.socialYear && 0 == this.data.fundYear ? [] : 1 == this.data.houseCount ? [ "远郊" ] : (2 == this.data.socialYear && (t = t.concat(this.getAreaByIndex(this.data.socialArea))), 
        2 == this.data.fundYear && (t = t.concat(this.getAreaByIndex(this.data.fundArea))), 
        1 == this.data.socialYear && 1 == this.data.fundYear && this.data.socialArea == this.data.fundArea && (t = t.concat(this.getAreaByIndex(this.data.fundArea))), 
        console.warn("area", t), t = Array.from(new Set(t)));
    },
    getAreaByIndex: function(t) {
        var a = [];
        switch (t) {
          case 1:
            a = [ "11区", "远郊" ];
            break;

          case 2:
            a = [ "高新南区", "远郊" ];
            break;

          case 3:
            a = [ "天府新区", "远郊" ];
            break;

          case 4:
            a = [ "远郊" ];
        }
        return console.warn("index", t, a), a;
    }
});