// pages/qsdetail/qsdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
 yisongda: function(){
  var that=this;
  wx.request({
  url: 'http://tp1.io/index.php/add/finish',
  header: {
    'content-type': 'application/json' // 默认值
  },
  method: 'POST',
  data: {
  id:'1',
  //status: '2'
  },
  success(res) {
    console.log(res)
  }
  })
  wx.switchTab({
    url: '/pages/take_in/take_in',
 })
},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that=this
    wx.request({
    url: 'http://tp1.io/index.php/add/sele', //仅为示例，并非真实的接口地址
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
          status: res.data.status
        })
        
      }
  })
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