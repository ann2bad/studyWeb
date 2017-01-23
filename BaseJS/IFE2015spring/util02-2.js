// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  var test = false;
  //简单类型可以用typeof arr来判断，但是数组会返回Object，只能用constructor.name
  if (arr.constructor.name == 'Array') {
    test = true;
  }
  return test;
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
  var test = false;
  // constructor.name返回的是Function，typeof返回的是function，注意大小写。
  if (arr.constructor.name == 'Function') {
    test = true;
  }
  return test;
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
  if (typeof src != 'object') {
    return src;
  }
  var tar = Object();
  for (x in src) {
    tar[x] = cloneObject(src[x]);
  }

  return tar;
}

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
  var tarArray = new Array();
  for (var i = 0; i < arr.length; i++) {
    var isHas = false;
    for (var j = 0; j < tarArray.length; j++) {
      if (arr[i] == tarArray[j]) {
        isHas = true;
        break;
      }
    }
    if (!isHas) {
      tarArray.push(arr[i]);
    }
  }

  return tarArray;
}

// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
  while (str.charAt(0) == ' ' || str.charAt(0) == '\t') {
    str = str.substring(1);
  }
  while (str.charAt(str.length - 1) == ' ' ||
         str.charAt(str.length - 1) == '\t') {
    str = str.substring(0, str.length - 1);
  }

  return str;
}

// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
  return str.replace(/(^[\s\t]*|[\s\t]*$)/g, '');
}

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i], i);
  }
}

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
  var num = 0;
  for (x in obj) {
    num += 1;
  }
  return num;
}

function test() {
  var obj = {
    a: 1,
    b: 2,
    c: {
      c1: 3,
      c2: 4
    }
  };
  console.log(getObjectLength(obj));  // 3
}

test();