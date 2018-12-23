// pages/post/post.js
var postsData=require('../../data/posts-data.js');
// console.log(datalist)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //小程序总是会读取data对象来做数据绑定，这个动作称为动作A，
    //而这个动作A的执行，是在onload事件执行之后发生的
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.query);
    this.setData({
      posts_key:postsData.postList
    })
  // this.data.post_key=postData.postList  与上面的this.setData效果一样
  },
onPostTap:function(event){
  var postId = event.currentTarget.dataset.postid;
  console.log(postId)
  //跳转到子页面
  wx.navigateTo({
    url: 'post-detail/post-detail?id='+postId
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