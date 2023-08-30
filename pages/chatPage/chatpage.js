// pages/chatPage/chatpage.js

Page({
  data: {
    inputText: "你 主人 是 谁 呀",
    outputText: ""
  },
  navigateBackToMain: function () {
    wx.navigateBack({
      delta: 1 // 返回主页面，delta为1表示返回上一级页面，如果您需要返回多级页面，可以适当调整该值
    });
  },
  onInput: function (event) {
    // 获取输入文本框的内容，并更新到data中
    this.setData({
      inputText: event.detail.value,
    });
  },

  onCheck: function () {
    const inputText = this.data.inputText;
  
    // 发起API请求
    wx.request({
      url: 'http://localhost:5151/api/chat',
      method: 'POST',
      data: {
        text: inputText, // 将inputText作为"text"参数发送到API
      },
      header: {
        'content-type': 'application/json' // 设置请求的内容类型为JSON
      },
      success: (res) => {
        // 处理API响应
        // 假设API返回的检测结果在"result"字段中
        console.log("完整的响应数据：",res.data);
        const text = res.data.text;
        
        const outputResult = "回复结果：" + text;
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