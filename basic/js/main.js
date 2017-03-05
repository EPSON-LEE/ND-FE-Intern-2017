function addLoadEvent(func){
  var oldEvent = window.onload;
  if(typeof(oldEvent) != 'function'){
    window.onload = func;
  }else{
    window.onload = function(){
      oldEvent();
      func();
    }
  }
}

// burgerButton
function burgerList(){
  var burgerButton = document.getElementById('burgerButton');
  var burgerSwitch = document.getElementById('burgerSwitch');
  var burgerUl = document.getElementById('burgerUl');
  burgerButton.onclick = function(){
    if(burgerSwitch.style.display == "none"){
        burgerSwitch.style.display = 'block';
    }else{
      burgerSwitch.style.display = 'none'
    }
  }
}
// waterfall

      /*瀑布流*/
    // function loadPicture(){
    //   var oParent = document.getElementById('galleryPictureWrapper');
    // }
    // // get by class
    // function getByClass(parent,clsName){
    //   var boxArr = new Array();
    //   var oElements = parent.getElementsByTagName('*');
    //   for(var i = 0; i < oElements.length; i++){
    //     if(oElements[i].className == clsName){
    //       boxArr.push(oElements[i]);
    //     }
    //   }
    //   return boxArr;
    // } 

    // function getMinhIndex(arr,val) {
    //   for(var i in arr){
    //     if(arr[i] == val){
    //       return i;
    //     }        
    //   }
    // }

    // function waterfall(parent,box){
    //   // get the box in parent
    //   var oParent = document.getElementById(parent);
    //   var oBoxs = getByClass(oParent,box);
    //   // calulate column (page-width/box-width)
    //   // offsetWidth the width of tag
    //   var oBoxW = oBoxs[0].offsetWidth;
    //   var cols = Math.floor(document.getElementById(parent).offsetWidth/oBoxW);
    //   oParent.style.cssText = 'width:' + oBoxW * cols + 'px; margin:0 auto;';
    //   var hArr = [];
    //   for(var i = 0; i < oBoxs.length; i++){
    //     if(i<cols){
    //       hArr.push(oBoxs[i].offsetHeight);
    //     }else{
    //       var minH = Math.min.apply(null,hArr);
    //       var index = getMinhIndex(hArr,minH);
    //       oBoxs[i].style.position = 'absolute';
    //       oBoxs[i].style.top = minH + (document.getElementById('galleryPictureBox').offsetHeight-document.getElementById('picture').offsetHeight)+'px';
    //       oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
    //       hArr[index] += oBoxs[i].offsetHeight;
    //     }
    //   }
    // }

    
