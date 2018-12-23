// Pages/post/post-detail/post-detail.js
var postDate=require("../../../data/posts-data.js");
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
    var postid = options.id;
    this.data.currentPostid=postid;
   var article=postDate.postList[postid];
   //进行数据绑定  异步的情况下需要用到setData，同步不需要
   this.setData({
     article:article
   })
  // this.data.article=article;
  //设置sync的代表同步的
  // var postsCollected={
  //   1:"true",
  //   2:"false",
  //   3:"true"
  // }
  
    var postsCollected = wx.getStorageSync("posts_collected");
    if(postsCollected){
      //选择对象不能用点要用[]
      var postCollected = postsCollected[postid]
      this.setData({
        collected:postCollected
      })
    }else{
      var postsCollected ={}
      postsCollected[postid]=false
      wx.setStorageSync("posts_collected", postsCollected)
    }
  },
  onColletionTap: function (event) {
    // this.getPostsCollectedSyc();
    this.getPostsCollectedAsy();
  },

  getPostsCollectedAsy: function () {
    var that = this;
    wx.getStorage({
      key: "posts_collected",
      success: function (res) {
        var postsCollected = res.data;
        var postCollected = postsCollected[that.data.currentPostId];
        // 收藏变成未收藏，未收藏变成收藏
        postCollected = !postCollected;
        postsCollected[that.data.currentPostId] = postCollected;
        that.showToast(postsCollected, postCollected);
      }
    })
  },

  getPostsCollectedSyc: function () {
    var postsCollected = wx.getStorageSync('posts_collected');
    var postCollected = postsCollected[this.data.currentPostId];
    // 收藏变成未收藏，未收藏变成收藏
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    this.showToast(postsCollected, postCollected);
  },
onShareTap:function(event){
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