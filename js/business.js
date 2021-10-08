
    $('html,body').addClass('noScroll');
//------OPEN------
$(function() {
    setTimeout(function(){
       $('.spinner').fadeOut(250);
       $('html,body').removeClass('noScroll');
    }, 2000);
  })
//------OPEN------

let windowWidth = $(window).width();
let num = 0;

$('#processImg1').fadeOut();

let changeProcessImg = (num)=>{
    let dom = $('#processImg'+num);
    if(dom.css("display")=='none'){
        $('.process__img').fadeOut();
        dom.fadeIn();
        if(dom[0].tagName=='VIDEO'){
            dom[0].play();
        }
    }
}

$('body').on('click touchstart', function () {
    const videoElement = document.getElementById('processImg1');
    if (!videoElement.playing) {
        videoElement.play();
        
    }
});

changeProcessImg(1); //初始化

$(window).scroll(function(event){
    let scrollTop = $(window).scrollTop();
    let processAllHeight = $('#processContent').outerHeight()+$('#processContent').offset().top;
    let processTop = $("#process").offset().top;
    if(scrollTop>=processTop&&scrollTop<processAllHeight){ //到達動畫區塊
        if(windowWidth<=460){ //手機版
            let persent = (scrollTop-processTop) / $('#process').outerHeight() -0.05;
            $("#processContent li").attr("style","transform:translateX("+persent*-800+"%);");
            console.log(persent);
            if(persent > -0.04&& persent<0.06){changeProcessImg(1);}
            else if(persent > 0.061&& persent<0.2){changeProcessImg(2);}
            else if(persent > 0.21&& persent<0.34){changeProcessImg(3);}
            else if(persent > 0.35&& persent<0.47){changeProcessImg(4);}
            else if(persent > 0.48&& persent<0.61){changeProcessImg(5);}
            else if(persent > 0.615&& persent<0.75){changeProcessImg(6);}
            else if(persent > 0.751&& persent<0.87){changeProcessImg(7);}
            // else if(persent > 0.35&& persent<0.47){console.log('區塊4');}
                event.preventDefault(); // 停止冒泡
        }else{//pc版圖片切換
            if(scrollTop>=$('#process__content_1').offset().top-250&&scrollTop<$('#process__content_2').offset().top-250){changeProcessImg(1)}
            else if(scrollTop>=$('#process__content_2').offset().top-250&&scrollTop<$('#process__content_3').offset().top-250){changeProcessImg(2)}
            else if(scrollTop>=$('#process__content_3').offset().top-250&&scrollTop<$('#process__content_4').offset().top-250){changeProcessImg(3)}
            else if(scrollTop>=$('#process__content_4').offset().top-250&&scrollTop<$('#process__content_5').offset().top-250){changeProcessImg(4)}
            else if(scrollTop>=$('#process__content_5').offset().top-250&&scrollTop<$('#process__content_6').offset().top-250){changeProcessImg(5)}
            else if(scrollTop>=$('#process__content_6').offset().top-250&&scrollTop<$('#process__content_7').offset().top-250){changeProcessImg(6)}
            else{changeProcessImg(7)}
        }
    }
});



// 計算滾動事件




