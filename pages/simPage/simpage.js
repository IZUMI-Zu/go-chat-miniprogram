// pages/simPage/simpage.js

Page({
  data: {
    inputText1: "这部电影很好看，哈哈。",
    inputText2: "我喜欢这部电影，很不错。",
    outputText: ""
  },
  navigateBackToMain: function () {
    wx.navigateBack({
      delta: 1 // 返回主页面，delta为1表示返回上一级页面，如果您需要返回多级页面，可以适当调整该值
    });
  },
  onInput1: function (event) {
    // 获取输入文本框的内容，并更新到data中
    this.setData({
      inputText1: event.detail.value,
    });
  },
  onInput2: function (event) {
    // 获取输入文本框的内容，并更新到data中
    this.setData({
      inputText2: event.detail.value,
    });
  },

  onCheck: function () {
    const inputText1 = this.data.inputText1;
    const inputText2 = this.data.inputText2;
  
    // 发起API请求
    wx.request({
      url: 'http://localhost:5151/api/similarity',
      method: 'POST',
      data: {
        s1: inputText1, // 将inputText1作为"s1"参数发送到API
        s2: inputText2, // 将inputText2作为"s2"参数发送到API
      },
      header: {
        'content-type': 'application/json' // 设置请求的内容类型为JSON
      },
      success: (res) => {
        // 处理API响应
        // 假设API返回的检测结果在"result"字段中
        console.log("完整的响应数据：",res.data);
        const similarity = res.data.similarity;
        const score = res.data.score;
        const outputResult = "检测结果：" + similarity + ", 得分： "+ score;
        this.setData({
          outputText: outputResult,
        });
      },
      fail: (err) => {
        // 处理API请求失败的情况
        console.error("API请求失败:", err);
        wx.showToast({
          title: 'API请求失败',
          icon: 'none',
          duration: 2000
        });
      }
    });
  },
  
});