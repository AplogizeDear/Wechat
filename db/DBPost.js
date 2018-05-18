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
  getPostItemById(){
    var postData = this.getAllPostData();
    console.log(postData);
    var Len = postData.length;
    for(var i=0;i<Len;i++){
      console.log(i);    
      console.log(this.postId);   
      console.log(postData[i].id); 
      if(postData[i].id == this.postId){
        return {
          index:i,
          data:postData[i]
        }
      }
    }
  }
}

export {DBPost}