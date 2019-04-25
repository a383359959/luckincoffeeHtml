$(function(){

    $('#gotoTop').bind('click', function(){
        $('html , body').animate({scrollTop: 0},'fast');
    });

    // $('body').scroll(function(e){
    //     console.log(e);
    // });
    // window.onscroll = function(e){
    //     console.log(e);
    // }

});