var item = $('.cursoingles__info__description')

$('.arrow').click(function(e){
    // console.log(e.target)
    var _this = $(this)
    item.removeClass('active')
    var info = _this.prev()

    info.slideToggle(function(){
        if($('.arrow i').hasClass('fa-angle-double-down')){
            $('.arrow i').removeClass('fa-angle-double-down').addClass('fa-angle-double-up')
            
        }else{
            $('.arrow i').removeClass('fa-angle-double-up').addClass('fa-angle-double-down')
        }
        // console.log($('.arrow i').hasClass('fa-angle-double-down'))
    })

});