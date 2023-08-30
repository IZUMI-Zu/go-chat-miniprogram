// prepage.js

Page({
  navigateToPage1: function () {
    wx.navigateTo({
      url: '/pages/prePage/prepage' // 替换为您子页面1的路径
    });
  },
  
  navigateToPage2: function () {
    wx.navigateTo({
      url: '/pages/simPage/simpage' // 替换为您子页面2的路径
    });
  },
  
  navigateToPage3: function () {
    wx.navigateTo({
      url: '/pages/chatPage/chatpage' // 替换为您子页面3的路径
    });
  }
});

