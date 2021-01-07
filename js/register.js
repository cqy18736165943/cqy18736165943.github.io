// 注册
$('#zc').click(function(){
    console.log(111)
    $.ajax({
        url:"../api/register.json",
        data:{
            un:$('#un').val(),
            pw:$('#pw').val(),
            yanzheng:$('#yanzhneg').val()
        },
        dataType:'json',
        success:function(res){
            if(res.code==1){
                localStorage.setItem('name',$('#un').val());
                alert("注册成功")
                window.location.href = "../pages/login.html"
            }
        }
    })
})


$('#autologin').click(function(){
    $('#autologin').css("background-color","#0075ff")
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