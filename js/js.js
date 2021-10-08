//------decounce------
// func為我們要操作的函數,wait為延遲時間,immediate為第一次是否要立即執行
function debounce(func, wait = 20, immediate = true) {
var timeout;
return function () {
    var context = this,
    // 能獲取所有參數並以陣列型式返回
    args = arguments;
    var later = function () {
    timeout = null;
    // apply與call功能一樣差別在於傳遞參數方式
    if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
};
}
//------decounce------

//------PC版Nav切換------
const nav = document.getElementById('nav');
const hero = document.getElementById('hero').offsetHeight;
let scrollNav =()=>{
    // const moveToNextAt = hero.outerHeight();
    // console.log(moveToNextAt);
    if(window.scrollY>hero){
        nav.setAttribute('class','nav nav--fix');
    }else{
        nav.setAttribute('class','nav');
    }
}
window.addEventListener('scroll',debounce(scrollNav,5));
//------PC版Nav切換------


//------切換語言------
const changeLanguage = document.getElementById('changeLanguage');
changeLanguage.addEventListener('change',()=>{
    console.log(changeLanguage.value);
    let languageValue = changeLanguage.value;
    if(languageValue=='Global'){
        document.location.href="https://marcopolo-corp.com/index.html";
    }else if(languageValue=='Chinese'){
        document.location.href="https://marcopolo-corp.com/tw-zh/index.html";
    }
    
})

//------切換語言------


//------MB版Nav切換------
// const navOpen = document.getElementById('navBurger');
// const navList = document.getElementById('navList');
// navOpen.addEventListener('click',()=>{
//     let navClassList = navList.classList;
    
    
//     console.log(classListCheck);
// })