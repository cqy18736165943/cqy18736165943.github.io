// 商品增减
$('.btn').click(function(){
    // 得到当前兄弟文本框的内容
    var n = $(this).siblings('.ipt').val();
    n++;
    $(this).siblings('.ipt').val(n);
    // 计算小计模块 根据文本框的内容乘以当前商品的价格 就是商品的总金额
    // 当前商品价格 p
    var p = $(this).parents('.tr_d').siblings('.tr_c').html();
    // 截取掉￥,以便于后面的计算
    p = p.substr(1);
    var price = (p * n).toFixed(2);
    // 小计模块
    // toFixed(2) 可以让我们保留两位小数
    $(this).parents('.tr_d').siblings('.tr_e').html("￥"+price);
    // console.log(this);
    // getSum();
});
$('.but').click(function(){
    var n = $(this).siblings('.ipt').val();
    if (n == 1) {
        return false;
    }
    n--;
    $(this).siblings('.ipt').val(n);

    var p = $(this).parents('.tr_d').siblings('.tr_c').html();
    p = p.substr(1);

    // 小计
    $(this).parents('.tr_d').siblings('.tr_e').html("￥"+(p * n));
})


// 通过输入栏改变商品数量
$('.ipt').change(function(){
    var n = $(this).val();
    var p = $(this).parents('.tr_d').siblings('.tr_c').html();
    p = p.substr(1);
    $(this).parents('.tr_d').siblings('.tr_e').html("￥"+(p * n));
    console.log(this);
    
})


// 全选与不选
// 全选
$(function(){
    $('.checkAll').change(function(){
        var status = $(this).prop('checked');
        $('.checkOne').prop('checked', status);
        fn();
    })

// 单选
$('.checkOne').change(function(){
    if ($('.checkOne:checked').length == $('.checkOne').length) {
        $('.checkAll').prop('checked',true)
    }else{
        $('.checkALL').prop('checked',false)
    }
    fn();
})


})


// 删除商品
$('.tr_f').click(function(){
    // console.log($('.tr_f'));
    var flag = confirm('你确定要删除吗？')
    console.log(flag);
    if (flag) {
        $(this).parents('.tr clear').remove();
        
        fn();
    }
})