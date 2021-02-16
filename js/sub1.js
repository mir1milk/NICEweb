$(function(){

function subcontent(){
var cnt = 0;

$('#header .header .menu ul li').on('mouseover',function(){
    $('#header .header .menu ul li').css('color','red');
})

$('.content .history .txt').on('mouseover',function(){
    $('.content .history .txt').css('color','red');
})

$('.content .history .bar .yearbar ul li').on('mouseover',function(){
    $('.content .history .bar .year ul li').eq(cnt).css('color','#081144');
})
$('.content .')
}

});