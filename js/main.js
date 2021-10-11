$(function(){
    function isMobile() {
        if (navigator.userAgent.indexOf('Mobile') != -1) {
            return true;
        } else {
            return false;
        }
    }if(!isMobile()){
        var gnbOpen = false;
        $('.gnb > ul > li').mouseenter(function(){
            $(this).find('.gnb_sub_box').addClass('open');
            $('.submenu_bg').addClass('open');
            $('.gnb > ul > li').not(this).find('.gnb_sub_box').removeClass('open');
            gnbOpen = true;
        }).mouseleave(function(){
           $('.gnb_sub_box').removeClass('open');
           $('.submenu_bg').removeClass('open');
          
           gnbOpen = false;
        });
    }else{
        $('.m_btn').on('click', function(){
            $('.gnb, .util_box').toggleClass('open');
            $('.gnb > ul > li').eq(0).find('.gnb_sub_box').addClass('open');
            $('.gnb > ul > li').eq(0).addClass('active');
        });
        $('.gnb > ul > li').on('click', function(){
            $(this).addClass('active');
            $('.gnb > ul > li').not(this).removeClass('active');
            $(this).find('.gnb_sub_box').addClass('open');
            $('.gnb > ul > li').not(this).find('.gnb_sub_box').removeClass('open');
        });
        $('.gnb_sub > ul > li').on('click', function(){
            $(this).find('ul').toggleClass('open');
            $('.gnb_sub > ul > li').not(this).find('ul').removeClass('open');
        });
    }
});