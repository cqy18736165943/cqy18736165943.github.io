// 商品详情图切换
$(function (){
    // 监听选项卡的移入事件
    $(".type li").mouseenter(function (){
        // 修改被移入选项卡的颜色
        $(this).addClass("look");
        // 还原其他兄弟节点的选项卡颜色
        $(this).siblings().removeClass('look');

        // 获取被移入选项卡的索引
        var $idx = $(this).index();
        // 根据索引找到对应的图片
        var $li = $(".big1 li").eq($idx);
        // 隐藏非当前的其他图片
        $li.siblings().removeClass("big");
        // 隐藏对应的图片
        $li.addClass("big")
    });
});



// 商品介绍切换
$(function (){
    // 监听选项卡的点击事件
    $(".nav li").click(function (){
        // 修改被移入选项卡的颜色
        $(this).addClass("current");
        // 还原其他兄弟节点的选项卡颜色
        $(this).siblings().removeClass('current');

        // 获取被移入选项卡的索引
        var $idx = $(this).index();
        // 根据索引找到对应的图片
        var $li = $(".content li").eq($idx);
        // 隐藏非当前的其他图片
        $li.siblings().removeClass("show");
        // 隐藏对应的图片
        $li.addClass("show")
    });
});



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
  
  
              
  