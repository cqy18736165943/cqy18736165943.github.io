
// 登录方式切换
$(function(){
    $(".login_nav li").click(function(){
        var liText = $(this).text();
        $(".login_nav li").removeClass("active");
        $(this).addClass("active");
        if(liText.indexOf("密码登录")>-1){
            $("#password").show();
            $("#sms").hide();
            $("#find").show();

        }
        
        if(liText.indexOf("短信登录")>-1){
            $("#password").hide();
            $("#sms").show();
            $("#find").hide();
        }
    })
})


// 登录账号
$('#log').click(function(){
    $.ajax({
        url:"../api/login.json",
        data:{
            un:$('#un').val(),
            pw:$('#pw').val()
        },
        dataType:'json',
        success:function(res){
            if(res.code==1){
                localStorage.setItem('name',$('#un').val());
                alert("登录成功")
                window.location.href = "../pages/index.html"
            }
        }
    })
})

$('#autologin').click(function(){
    $('#autologin').css("background-color","#0075ff")
})
$('#autologin1').click(function(){
    $('#autologin1').css("background-color","#0075ff")
})



// 获取短信验证码
var countdown=60; 
function sendemail(){
    var obj = $("#btn");
    settime(obj);
    
    }
function settime(obj) { //发送验证码倒计时
    if (countdown == 0) { 
        obj.attr('disabled',false); 
        //obj.removeattr("disabled"); 
        obj.val("免费获取验证码");
        countdown = 60; 
        return;
    } else { 
        obj.attr('disabled',true);
        obj.val("重新发送(" + countdown + ")");
        countdown--; 
    } 
setTimeout(function() { 
    settime(obj) }
    ,1000) 
}