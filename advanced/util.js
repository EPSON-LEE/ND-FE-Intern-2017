
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
     return str.replace(/(^\s*)|(\s*$)/g+, "");
}
