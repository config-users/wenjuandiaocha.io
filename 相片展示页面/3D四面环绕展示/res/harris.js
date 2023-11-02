"use strict";
// 卖萌标题
var OriginTitile = document.title,
  titleTime;
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.title = "干嘛不看了";
    clearTimeout(titleTime);
  } else {
    document.title = "好好看不是吗";
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});
