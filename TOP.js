$(function(){
    $('#accordion dd').hide();           //全部のddを取得し、hideにする
    $('#accordion dt').click(function(){　//クリックしたdtに対応する次のddに関数定義
        $(this).next('dd').slideToggle()　//slideToggle（）で開閉をする
    })
});

$(function() {
    var pagetop = $('#page_top');    
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});