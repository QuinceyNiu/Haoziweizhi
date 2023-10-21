Page({
  data: {
      items: [
          {name: '大件5元', checked: 'true'},
          {name: '中件3元'},
          {name:'小件1元'}
      ],
      sexs: [
          {name: '男', checked: 'true'},
          {name: '女'}
      ]
  },
  gotoordform:function(){
    wx.switchTab({
      url: '/pages/ord_form/ord_form',
  })},
  formBindsubmit(e){
    var that = this;  
      wx.request({
        url: 'http://tp1.io/index.php/add/add',
        method: 'POST',
        data: {
          username: e.detail.value.username,
          address: e.detail.value.address,
          phone: e.detail.value.phone,
          sex: e.detail.value.sex,
          scare: e.detail.value.scare
        },
        success(res) {
          console.log(res),
            that.setData({
              postList: res.data,
            })
        }
    })
  }

})