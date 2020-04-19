$(function(){
    $('.first-screen__transition-btn').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#catalog-section').offset().top }, 500);
        e.preventDefault();
    });
});
