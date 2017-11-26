$(function(){
    //page3 脚本
    $("#icon-myselected").hide();
    $("#icon-more").show();
    $(".noticeBar").hide();
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
