// pages/take_in/take_in.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  gotoqsdetail:function(e){
    var id = e.currentTarget.id; //获取当前ID
    wx.navigateTo({
        //实现跳转到test界面的函数，url附带跳转时传送的数据
        url: '/pages/qsdetail/qsdetail?id=' + id,
      })
  },
  formBindsubmit(e){
    var that = this;  
    wx.request({
      url: 'http://tp1.io/index.php/add/seledone',
      method: 'POST',
      data: {
        dphone:e.detail.value.dphone
      },
      success(res) {
        console.log(res),
          that.setData({
            postList: res.data,
          })
      }
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   

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