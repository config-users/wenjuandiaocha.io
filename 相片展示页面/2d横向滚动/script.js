// 获取ul元素，并为其追加一组相同图片（为了做到无缝衔接）
let ul=document.querySelectorAll('ul');
ul[0].innerHTML=ul[0].innerHTML+ul[0].innerHTML;
ul[1].innerHTML=ul[1].innerHTML+ul[1].innerHTML;
ul[2].innerHTML=ul[2].innerHTML+ul[2].innerHTML;
// 获取所有的li元素和.btn元素
let lis1=document.querySelectorAll('ul.one li');
let lis2=document.querySelectorAll('ul.two li');
let lis3=document.querySelectorAll('ul.three li');
// 每次滚动的跨度（正数向右，负数向左，默认向左滚动）
// 计算并设置ul的总宽度
ul[0].style.width=lis1[0].offsetWidth*lis1.length+'px';
ul[1].style.width=lis2[0].offsetWidth*lis2.length+'px';
ul[2].style.width=lis3[0].offsetWidth*lis3.length+'px';

// 滚动函数
function move1(){
    let spa = 2
    if(ul[0].offsetLeft < -ul[0].offsetWidth/2){
        // 向左走时，判断图片是否走完（这里本来时4张图片，加上后面追加的4张相同的，共有8张，所以需要用ul的总宽度来除以2进行判断），走完时重新开始
        ul[0].style.left='0';
    }
    if(ul[0].offsetLeft > 0){
        // 向右走时，判断图片是否走完
        ul[0].style.left=-ul[0].offsetWidth/2+'px';
    }
    // 设置偏移位置
    ul[0].style.left=ul[0].offsetLeft+spa+'px';
}
function move2(){
    let spa = -2
    if(ul[1].offsetLeft < -ul[1].offsetWidth/2){
        // 向左走时，判断图片是否走完（这里本来时4张图片，加上后面追加的4张相同的，共有8张，所以需要用ul的总宽度来除以2进行判断），走完时重新开始
        ul[1].style.left='0';
    }
    if(ul[1].offsetLeft > 0){
        // 向右走时，判断图片是否走完
        ul[1].style.left=-ul[1].offsetWidth/2+'px';
    }
    // 设置偏移位置
    ul[1].style.left=ul[1].offsetLeft+spa+'px';
}
function move3(){
    let spa = 2
    if(ul[2].offsetLeft < -ul[2].offsetWidth/2){
        // 向左走时，判断图片是否走完（这里本来时4张图片，加上后面追加的4张相同的，共有8张，所以需要用ul的总宽度来除以2进行判断），走完时重新开始
        ul[2].style.left='0';
    }
    if(ul[2].offsetLeft > 0){
        // 向右走时，判断图片是否走完
        ul[2].style.left=-ul[2].offsetWidth/2+'px';
    }
    // 设置偏移位置
    ul[2].style.left=ul[2].offsetLeft+spa+'px';
}

// 定时器，每30毫秒执行一次move函数
let timer1=setInterval(move1,30);
let timer2=setInterval(move2,30);
let timer3=setInterval(move3,30);


// 为ul绑定事件，悬停停止，移开滚动
// ul.addEventListener('mousemove',function(){
//     clearInterval(timer);
// })
// ul.addEventListener('mouseout',function(){
//     timer=setInterval(move,30);
// })