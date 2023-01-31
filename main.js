/*Side Bar*/

$('#bar').click(function(){
    $('#header div ul').addClass('active')
});

$('#bar-close').click(function(){
    $('#header div ul').removeClass('active')
});