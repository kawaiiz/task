//html公共尺寸
let rem = parseInt($('html').css('width'))/750*100
$('html').css('fontSize',rem+'px');
$('.wxButton').on('click',function () {
    $('#QR').css('display','block');
    $('.container-fluid').addClass('vague')
});
$('#QR').on('click',function () {
    $('#QR').css('display','none');
    $('.container-fluid').removeClass('vague');
});
// 底部的按钮大小设置
function ulButtom() {
    let width = $('.ulButtom>li').length;
    switch (width){
        case 1:
        case 2:
        case 3:
        case 4:
            $('.ulButtom').css('height',0.45+'rem');
            $('.ulButtom>li').css('width',1.1+'rem')
            break;
        case 5:
        case 6:
            $('.ulButtom').css('height',0.7+'rem');
            $('.ulButtom>li').css('width',0.88+'rem');
            break;
    }

}
ulButtom();

//header 产品图片的大小判断设置

$(window).on('load',function () {
    let imgH = parseInt($('.template_img_box img').css('height'));
    let imgW = parseInt($('.template_img_box img').css('width'));
    let boxH = parseInt($('.template_img_box').css('height'));
    let boxW = parseInt($('.template_img_box').css('width'));
    if( imgH < boxH ){
        if( imgW < boxW ){
            if(imgH>imgW){
                $('.template_img_box img').css({
                    'height':'80%',
                    'width':'auto'
                });
            }else {
                $('.template_img_box img').css({
                    'height':'auto',
                    'width':'90%'
                });
            }
        }else {
            $('.template_img_box img').css({
                'height':'auto',
                'width':'90%'
            });
        }
    }else{
        if(imgW>boxW){
            if(imgH>imgW){
                $('.template_img_box img').css({
                    'height':'80%',
                    'width':'auto'
                });
            }else {
                $('.template_img_box img').css({
                    'height':'auto',
                    'width':'90%'
                });
            }
        }else {
            $('.template_img_box img').css({
                'height':'80%',
                'width':'auto'
            });
        }
    }
})