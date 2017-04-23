$(function(){ 
  var Lis = $(".shopClass li"); 
  for(i = 0;i<Lis.length;i++){
      Lis[i].i = i;
    Lis[i].onmouseover = function(){
      this.className = "lihover";
      var h0 = (this.i-1)*30+46;
      var y = this.getElementsByTagName("div")[0].offsetHeight;
      var h = this.getElementsByTagName("div")[0].style.top + y;
          }
    Lis[i].onmouseout = function(){
      this.className = ""; 
    }
  }
})
