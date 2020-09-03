var e = {
    title: "最新购房资格查询",
    id: "1",
    num: 3,
    topics: {
      question0: {
        question: "你购买的区域？",
        options: [{
          answer: "限购区域",
        }, {
          answer: "非限购区域",
        },]
      },
        question1: {
            question: "您的户口所在地",
            options: [ {
              answer: "本地户口",
                next: 3
            }, {
                answer: "外地户口",
            },]
        },

        // question2: {
        //     question: "您的社保缴纳地区",
        //     options: [ {
        //         answer: "无社保",
        //         next: 4
        //     }, ]
        // },
        question2: {
            question: "3年内连续2年以上纳税或缴纳社保?",
            options: [ {
                answer: "满足",
                next: 4
            }, {
                answer: "未满足",               
          }, ]
        },
        question3: {
            question: "您的婚姻情况",
            options: [ {
                answer: "已婚",
                next: 5
            }, {
                answer: "离异单身家庭",
            }, ]
        },
        question4: {
            question: "你在本市已有几套住房?",
            options: [ {
                answer: "无",
              next: 6
            }, {
                answer: "1套及以上",
              } ]
        },
      question5: {
        question: "你在本市范围内已有几套住房?",
        options: [{
          answer: "无"
        }, {
          answer: "1套" 
        }, {
          answer: "2套及以上"
        }]
      },
      question6: {
        question: "你有购房贷款记录吗?",
        options: [{
          answer: "无"
        }, {
          answer: "有"
        }]
      }
    },
    results: {
        result1: {
          title: "很遗憾,您不具有本市购房资格",
            hide_detail: !0,
            area: "您不具有本市购房资格",
          zgsrc:'/static/img-card/pic_qualification_fail.png'
        },
        result2: {
          title: "恭喜您！你有某市购房资格",
            area: "",
          zgsrc: '/static/img-card/pic_qualification_successful.png'
        }
    }
};

module.exports = e;