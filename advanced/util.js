
/*创建一个JavaScript文件，比如util.js；*/
/*实践判断各种数据类型的方法，并在util.js中实现以下方法：*/
// 判断arr是否为一个数组，返回一个bool值
// simple 
function isArray(arr){
  return arr instanceof Array;
}

function isFunction(fn) {
  return typeof(fn) === 'function';
}

/*了解值类型和用用类型的区别， 了解各种对象的读取、遍历方式*/
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等

function cloneObject(src) {
  var c = c || {};
  for(var i in src){
    if(typeof src[i] === 'object'){
      c[i] = (src[i].constructor === Array)? [] : {};
      c[i] = cloneObject(src[i]);
    }else{
      c[i] = src[i];
    }
  }
  return c;
}

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
// method 1 不利用js内部函数
function uniqueArray(arr) {
  var flag = true;
  var c = [];
  for(var i in arr){
    flag = true;
    for(var j in c){
      if(arr[i] == c[j]){
        flag = false;
      }
    }
    if(flag){
      c.push(arr[i]);
    }
  }
  return c;
}

// method2 利用indexOf函数 fast
function uniqueArray2(arr){
  var c = [];
  for(var i in arr){
    if(c.indexOf(arr[i]) != -1){
      c.push(arr[i]);
    }
  }
  return c;
}

// method2
function uniqueArray3(ar) {
    var tmp = {},
        ret = [];

    for (var i = 0, j = ar.length; i < j; i++) {
        if (!tmp[ar[i]]) {
            tmp[ar[i]] = 1;
            ret.push(ar[i]);
        }
    }

    return ret;
}

// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    // 开始的任意空白换位"";
     return str.replace(/(^\s*)|(\s*$)/g, "");
}

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    // your implement
    for(var i in arr){
      fn(arr[i],i);
    }
}

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
  var count = 0;
  for(var i in obj) {
    count++;
  }
  return count;
}

// 判断是否为邮箱地址
function isEmail(emailStr) {
    // regx rule
    var Rex = /^\w@[a-z0-9]+\.[a-z]{2,4}$/;
    return Rex.test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone) {
    var Reg=/^1\d{10,10}$/;
    return Reg.test(phone);
}

/*  DOM   */

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    element.classList.add(newClassName);
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    element.classList.remove(oldClassName);
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    return element.parentNode  == siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    // your implement
}

// getElementsByClassName
function getElementsByClassName(node,classname){
   if(node.getElementsByClassName){
    //使用现有方法
      return node.getElementsByClassName(classname);
    }else{
      var results=new Array();
      var elems=node.getElementsByTagName("*");
      for(var i=0;i<elems.length;i++){
        if(elems[i].className.indexOf(classname) != -1){
            results[results.length]=elems[i];
        }
      }
      return results;
    }
}
// 实现一个简单的Query
function $(selector) {
  // 转换为一个二维数组
  var ele = document;
  var query = selector.replace(/\s+/," ").split(' ');
  for(var i = 0; i<query.length; i++){
    switch(query[i][0]){
      case '#':
        ele = document.getElementById(query[i].substring(1));
        break;
      case '.':
        ele = document.getElementsByClassName(ele,query[i].substring(1));
        break;
      case:'[':
        var equalLoc = query[i].indexOf('=');
        var temp = ele.getElementsByTagName('*');
        var tLen = temp.length;
        if(equalLoc != -1){
          /*切割等号的左边*/
          var key = query[i].substring(1,equalLoc);
          /*切割等号的右边*/
          var value = query[i].substring(equalLoc + 1, query[i].length - 1);
          for(var j = 0; j < tLen; j++){
            if(temp[j].getAttribute(key) == value){
              ele = temp[j];
              break;
            }
          }
        }else{
          var key = query[i].substring(1,query[i].length - 1);
          for(var k = 0; k < tLen; k++){
            if(temp[j][key]){
              ele = temp[j];
              break;
            }
          }
        }
          break;
        default:
          ele = ele.getElementsByTagName(query[i])[0];
          break;  
    }
  }
  if(!ele){
    ele = null;
  }
  return ele;
}

// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    // your implement
    if(element.addEventListener) {
      element.addEventListener(event,listener,false);
    }else if(element.attachEvent){
      element.attachEvent("on" + event,listener);
    }else{
      element["on" + event] = listener;
    }
}

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    if(element.removeEventListener){ //standard
      element.reomveEventListener(event,listener,false);
    }else if(element.detachEvent){ //low ie
      element.detachEvent("on"+event,listener);
    }else{ //both false
      element["on" + event] = null;
    }
}

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    addEvent(element,'click',listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    addEvent(element,'keydown',function(event){
      // 兼容性处理
      var oEvent = ev || window.event;
      if(oEvent.keyCode === 13){
        listener();
      }
    })
}

  $.on = function (element, type, listener) {
      return addEvent(element, type, listener);
  };
  $.un = function (element, type, listener) {
      return removeEvent(element, type, listener);
  };
  $.click = function (element, listener) {
      return addClickEvent(element, listener);
  }
  $.enter = function (element, listener) {
      $.enter addEnterEvent(element, listener);
  };


  /*BOM*/
  function isIE() { //ie?  
    if (!!window.ActiveXObject || "ActiveXObject" in window)  
        return true;  
    else  
        return false;  
  }

    // 设置cookie
  function setCookie(cookieName, cookieValue, expiredays) {
     var oDate = new Date();
     oDate.setDate(oDate.getDate() + expiredays);
     document.cookie = cookieName + "=" + cookieValue + ";expires=" + oDate;
  }
  // 获取cookie
  function getCookie(cookieName) {
    var arr = document.cookie.split("; ");
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split("=");
        if (arr2[0] == cookieName) {
            return arr2[1];
        }
    }   return "";
  }

  function ajax(url, options) {
    //1.创建ajax对象
    var oAjax = null;
        /**
         * 此处必须需要使用window.的方式,表示为window对象的一个属性.不存在时值为undefined,进入else
         * 若直接使用XMLHttpRequest,在不支持的情况下会报错
         **/
    if (window.XMLHttpRequest) {
        //IE6以上
        oAjax = new XMLHttpRequest();
    } else {
        oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    //2.连接服务器
    //open(方法,url,是否异步)
    var param = ""; //请求参数。
    //只有data存在，且为对象使才执行
    var data = options.data ? options.data : -1; //缓存data
    if (typeof (data) === "object") {
        for (var key in data) { //请求参数拼接
            if (data.hasOwnProperty(key)) {
                param += key + "=" + data[key] + "&";
            }
        }
        param.replace(/&$/, "");
    } else {
        param = "timestamp=" + new Date().getTime();
    }

    //3.发送请求
    var type = options.type ? options.type.toUpperCase() : "GET";
    if (type === "GET") {
        oAjax.open("GET", url + "?" + param, true);
        oAjax.send();
    } else {
        oAjax.open("POST", url, true);
        oAjax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oAjax.send(param);
    }

    //4.接收返回
    //OnRedayStateChange事件
    oAjax.onreadystatechange = function () {
        if (oAjax.readyState === 4) {
            if (oAjax.status === 200) {
                //请求成功。形参为获取到的字符串形式的响应数据
                options.onsuccess(oAjax.responseText, oAjax);
            } else {
                //先判断是否存在请求失败函数
                //存在时，形参为XMLHttpRequest对象，便于进行错误进行处理
                if (options.onfail) {
                    options.onfail(oAjax);
                }
            }
        }
    };
    return oAjax;//发送请求的XMLHttpRequest对象
  }