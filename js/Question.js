$(function(){
    //page3 脚本
    $("#icon-myselected").hide();
    $("#icon-more").show();
    $(".noticeBar").hide();
    $("#page1-1").hide();
    $("#page3-1").show();


    var $Ali=$(".AArea li");
    $Ali.on("click",function () {
        if($(this).hasClass("Aselected")) $(this).removeClass("Aselected");
        else {
            $(".AArea .Aselected").removeClass("Aselected");
            $(this).addClass("Aselected");
        }
    })

    var $Atips=$(".BannerRight .icon-tishi");
    $Atips.on("click",function(){
        if($(this).hasClass("TagSelected")){
            $(this).removeClass("TagSelected");
            $(".mark").fadeOut(200);
            $(".TipsBox").fadeOut(200);
        }
        else {
            $(this).addClass("TagSelected")
            $(".mark").fadeIn(200);
            $(".TipsBox").fadeIn(200);
        }
    })
    $(".tipsTitle .icon-guanbi").on("click",function() {
        $(".TagSelected").removeClass("TagSelected");
        $(".mark").fadeOut(200);
        $(".TipsBox").fadeOut(200);
    })

    var $Calculator=$(".BannerRight .icon-jisuanqi");
    $Calculator.on("click",function(){
        if($(this).hasClass("TagSelected")){
            $(this).removeClass("TagSelected");
            $(".mark").fadeOut(200);
            $(".calculatorBox").fadeOut(200);
        }
        else {
            $(this).addClass("TagSelected")
            $(".mark").fadeIn(200);
            $(".calculatorBox").fadeIn(200);
        }
    })
    $(".calculatorBox .icon-guanbi").on("click",function() {
        $(".TagSelected").removeClass("TagSelected");
        $(".mark").fadeOut(200);
        $(".calculatorBox").fadeOut(200);
    })

    var $AScript=$(".BannerRight .icon-biji");
    $AScript.on("click",function(){
        if($(this).hasClass("TagSelected")){
            $(this).removeClass("TagSelected");
            $(".mark").fadeOut(200);
            $(".ScriptBox").fadeOut(200);
        }
        else {
            $(this).addClass("TagSelected")
            $(".mark").fadeIn(200);
            $(".ScriptBox").fadeIn(200);
        }
    })
    $(".ScriptBox .icon-guanbi").on("click",function() {
        $(".TagSelected").removeClass("TagSelected");
        $(".mark").fadeOut(200);
        $(".ScriptBox").fadeOut(200);
    })

    $("#answerSheet").on("click",function () {
        $(".answerSheetBox").fadeIn(200);
    })
    $("#ASclose").on("click",function () {
        $(".answerSheetBox").fadeOut(200);
    })
    for(var i=6;i<41;i++){
    var astap="<div class='AStaps'>"+i+"</div>";
    $(".AStapsBox").append(astap);
    }

})

//倒计时
var h=0,m=0,s=20;
var mytime=null;
//开始倒计时
run();
//执行倒计时
function run(){
    //输出
    var hid = document.getElementById("timeCounting");
    hid.innerHTML=(h<10?"0"+h:h)+":"+(m<10?"0"+m:m)+":"+(s<10?"0"+s:s);
    s--;
    if(s<0){
        s=59;
        m--;
        if(m<0){
            m=59;
            h--;
            if(h<0){
                alert('时间到！');
                $("#page4-1").show(100);
                $("#page3-1").hide(100);
                return;
            }
        }
    }
    mytime = setTimeout("run()",1000);
}

//暂停
function doPause(){
    if(mytime!=null){
        clearTimeout(mytime);
        mytime=null;
        $(".mark").fadeIn(200);
        $(".TestContinue").fadeIn(200);
        headBarContent="测试报告";
    }
}

//继续
function doGo(){
    run();
    $(".mark").fadeOut(200);
    $(".TestContinue").fadeOut(200);
}