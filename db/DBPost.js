class DBPost{
  constructor(postId){
    this.storageKeyName = "postList";
    this.postId = postId;
  }
  getAllPostData(){
    var res = wx.getStorageSync(this.storageKeyName);
    if(!res){
      res = require('../data/data.js').postList;
      this.initPostList(res);
    }
    return res;
  }
  execSetStorageSync(data){
    wx.setStorageSync(this.storageKeyName,data );
  }
  // 其实就是在模拟数据库查询数据
  getPostItemById(){
    var postData = this.getAllPostData();
    var Len = postData.length;
    for(var i=0;i<Len;i++){
      if(postData[i].id == this.postId){
        return {
          index:i,
          data:postData[i]                                                                               
        }
      }
    }
  }
  gettimeId() {
    var postData = this.getAllPostData();
    var Len = postData.length;
  }
// 收藏
  collect(){
    return this.upDatePostData('collect');
  }
// 点赞
  up(){
    return this.upDatePostData('like');
  }
  upDatePostData(category){
    var itemData = this.getPostItemById(), postData = itemData.data,allPostData = this.getAllPostData();
    //false
    switch(category){
      case 'collect':
      //没有关注
        if (!postData.collectstatus){
          postData.collectnum++;
          postData.collectstatus = true;
        }else{
          postData.collectnum--;
          postData.collectstatus = false;
        }
        break;
      case'like':
        if (!postData.likestatus){
            postData.likenum++;
            postData.likestatus = true;
        }else{
          postData.likenum--;
          postData.likestatus =false;
        }
    default:
        break;
    }
    allPostData[itemData.index] = postData;
    this.execSetStorageSync(allPostData);
    return postData;
  }
}



export {DBPost}