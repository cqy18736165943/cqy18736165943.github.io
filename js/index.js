
// 轮播图
window.onload = function(){
  var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
  
    // autoplay:true,
    autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })        
}
// 返回顶部
$(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>400){
      // 显示返回顶部
        $('.back').css('display','block')
    }
    if($(this).scrollTop()<=400){
      // 显示返回顶部
        $('.back').css('display','none')
    }
    $('.back').click(function(){
      $(window).scrollTop(0)
    })
  })
})


            
