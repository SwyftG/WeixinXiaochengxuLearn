// pages/dailylist/dailylist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasData: false,
    curTime: new String(),
    dailyData: new Array
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://140.143.9.16:8000/daily/1024.json',
      method: 'GET',
      header: {
        "Content-Type": "application/json"
      },
      success: function(res) {
        console.log(res.data)
        that.setData({
          hasData: true,
          curTime:res.data.data.curTime,
          dailyData: res.data.data.block
        })
      },
      fail: function(res) {

      }
    })
  },

  gotoDetail: function(event) {
    console.log(event)
    var data_url = event.currentTarget.dataset.url
    // data_url = "https://peekpa.tech"
    wx.navigateTo({
      url: '../detail/detail?dataurl=' + data_url,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})