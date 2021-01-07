$(function () {
    /* $(".btn").on("click",function(){
        $("<div>购物车空空如也</div>").attr("class","hint centre");
        $("#qb").append($("<div>购物车空空如也</div>").attr("class","hint centre"))
    })
     */
    // 获取cookie
    function getCookie(key) {
        var arr = document.cookie.split('; ')
        for (var i = 0, len = arr.length; i < len; i++) {
            var arr2 = arr[i].split('=')
            if (arr2[0] === key) {
                return arr2[1]
            }
        }
        return null
    }
    var datas = getCookie("code")

    //获取数据
    $.ajax({
        url: "../api/data.json",
        type: "get",
        dataType: "json",
        success: function (json) {
            var gw = json[0].subs;
            console.log(gw[0]);
            console.log(gw);
            var goodStr = ""
            var flag = true;
            /*  $.each(gw[0],function(index,item){} */
            //console.log(data);
            //console.log(json);
            if (datas) {

                flag = false
                goodStr += `<div class="tbody">
                    <div class="tr clear">
                    <div class="tr_a">
                        <input type="checkbox">
                    </div>
                    <div class="tr_b">
                        <a href="#" class="ig"><img src="${gw[0].img}" alt=""></a>
                        <a href="#" class="wz">${gw[0].des}</a>
                    </div>
                    <div class="tr_c">${gw[0].price}元</div>
                    <div class="tr_d">
                        <div class="add">
                            <button class="but">一</button>
                            <input type="text" class="ipt" value="1">
                            <button class="btn">+</button>
                        </div>
                    </div>
                    <div class="tr_e">1998.00元</div>
                    <div class="tr_f">删除
                    </div>
                </div>
                <p></p>
                
            </div>
    
        </div> 
        <div class="all clear centre">
            <div class="all_left">
                <span><input type="checkbox">全选</span>
                <i></i>
                <u>共 1 件商品，已选择 1 件</u>
            </div>
            <div class="all_right">
                <u>合计：</u>
                <span>￥1998.00</span>
                <a href="#">去结算</a>
            </div>
        </div>`;
            }
        
                if (flag) {
                goodStr = `<div class="hint centre">
                        购物车空空如也
                    </div>`
                }
                $(".wp").html(goodStr);


        }
    })
    // 设置cookie
function setCookie(options){
    options.days = options.days || 0
    options.path = options.path || ''
    if (options.days === 0) {
      document.cookie = options.key+'='+options.val+'; path='+options.path
    } else {
      var d = new Date()
      d.setDate(d.getDate()+options.days)
      document.cookie = options.key+'='+options.val+'; expires='+d+'; path='+options.path
    }
  }
// 删除cookie（cookie过期浏览器自动删除）
function removeCookie(key){
    setCookie({
      key: key,
      val: '123',
      days: -2
    })
  }
    $(".wp").on("click",".tr_f",function(){
        
        removeCookie("code")
        
        var goodStr = `<div class="hint centre">
                        购物车空空如也
                    </div>`
                
                $(".wp").html(goodStr);
        
    })
})
