// Task02-3 关于正则表达式，暂时略过
var a = 0;
// 实现一个简单的Query
// 注意：HTML中的属性值若为数字，选择器中应加引号 
// eg. xxx = "2015"  对应的选择器应为 [xxx='2015']
var $ = selector => document.querySelector(selector);


// Task02-4
/*---------后面给出更好的实现
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
  element.addEventListener(event, listener);
}
// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
  element.removeEventListener(event, listener);
}
*/

// 给一个element绑定一个针对event事件的响应，响应函数为listener
$.on = (element, event, listener) => element.addEventListener(event, listener);

// 移除element对象对于event事件发生时执行listener的响应
$.un = (element, event, listener) => element.removeEventListener(event, listener);

// 实现对click事件的绑定
$.click = (element, listener) => $.on(element, 'click', listener);




function test() {
  $.click($('#event'), () => $('#event').innerHTML += '1');
}

test();