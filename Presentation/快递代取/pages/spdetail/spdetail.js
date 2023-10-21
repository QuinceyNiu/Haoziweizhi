// pages/spdetail/spdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  gotoordform: function(){
    wx.switchTab({
      url: '/pages/ord_form/ord_form',
   })
  },

  formBindsubmit(e){
    var that = this;
    wx.request({
    url: 'http://tp1.io/index.php/add/release',
    header: {
      'content-type': 'application/json' // 默认值
    },
    method: 'POST',
    data: {
    id:'1',
    dphone:e.detail.value.dphone,
    dname:e.detail.value.dname,
    },
    success(res) {
      console.log(res)
    }
})},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.request({
    url: 'http://tp1.io/index.php/add/sele', 
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      console.log(res),
        that.setData({
          address: res.data.address,
          id:res.data.id,
          phone: res.data.phone,
          scare: res.data.scare,
          sex: res.data.sex,
          username: res.data.username,
        })
        
      }
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