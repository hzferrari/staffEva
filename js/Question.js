var questions = [
    {id:"1001",title:"在寻找 n 个元素中第 k 小元素问题中，如使用快速排序算法思想，运用分治算法对 n 个元素进行划分，应如何选择划分基准？下面（ ） 答案解释最合理。",options:["随机选择一个元素作为划分基准","取子序列的第一个元素作为划分基准","用中位数的中位数方法寻找划分基准","以上皆可行，但不同方法的算法复杂度上界可能不同"],answer:"D", },
    {id:"1002",title:"下列哪种排序算法的附加存储开销最大（）",options:["快速排序","堆排序","归并排序","插入排序"],answer:"C", },
    {id:"1003",title:"设一组权值集合 W=(15 ， 3 ， 14 ， 2 ， 6 ， 9 ， 16 ， 17) ，要求根据这些权值集合构造一棵哈夫曼树，则这棵哈夫曼树的带权路径长度为（ ）",options:["129","219","189","229"],answer:"D", },
    {id:"1004",title:"已经知道一棵树的先序、后序、中序序列，还原这棵树需要（）",options:["先序和后续序列","中序","知道任意一种都可以","后序和中序"],answer:"D", },
    {id:"1005",title:"在下述排序方法中，不属于内排序方法的是",options:["插入排序法","选择排序法","拓扑排序法","归并排序法"],answer:"C", },
    {id:"1006",title:"一个具有767个节点的完全二叉树，其叶子节点个数为（）",options:["383","384","385","386"],answer:"B", },
    {id:"1007",title:"数据序列(8,9,10,4,5,6,20,1,2)只能是下列排序算法中的()的两趟排序后的结果",options:["选择排序","冒泡排序","插入排序","堆排序"],answer:"C", },
    {id:"1008",title:"设森林F中有三棵树,第一、第二、第三棵树的结点个数分别为M1、M2和M3,与森林F对应的二叉树根结点的右子树上的结点个数是()",options:["M1","M1+M2","M3","M2+M3"],answer:"D", },
    {id:"1009",title:"n 个字符构成的字符串，假设每个字符都不一样，问有多少个子串？",options:["n+1","n(n+1)/2+1","2^n-1","n!"],answer:"B", },
    {id:"1010",title:"下面（）数据结构常用于函数调用。",options:["队列","栈","链表","数组"],answer:"B", },

];
// 答案初始化s
var answers=new Array(maxQue);
for(var i=0;i<answers.length;i++){
    answers[i]=0;
}
var Qtitle="在寻找 n 个元素中第 k 小元素问题中，如使用快速排序算法思想，运用分治算法对 n 个元素进行划分，应如何选择划分基准？下面（ ） 答案解释最合理。";
var Qoption=["随机选择一个元素作为划分基准","取子序列的第一个元素作为划分基准","用中位数的中位数方法寻找划分基准","以上皆可行，但不同方法的算法复杂度上界可能不同"];
var vueQuestion = new Vue({
    el: '#page3-1',
    data: {
        title:Qtitle ,
        options:Qoption,
        currentQue:currentQue,
        maxQue:maxQue
    }
})
var vueQuestion2 = new Vue({
    el: '#page4-1',
    data: {
        maxQue:maxQue
    }
})

function changeOption() {

    $(".AArea span").each(function () {
        if($(this).html()=="0") $(this).html("A");
        else if($(this).html()=="1") $(this).html("B");
        else if($(this).html()=="2") $(this).html("C");
        else if($(this).html()=="3") $(this).html("D");
    })
}
$(function(){
    //page3 脚本
    // $("#icon-myselected").hide();
    // $("#icon-more").show();
    // $(".noticeBar").hide();
    // $("#page1-1").hide();
    // $("#page3-1").show();

    changeOption();
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
        $(".AStaps").each(function (index,el) {
           if(answers[index]!=0) $(el).addClass("ASselect");
           else  $(el).removeClass("ASselect");
        })
        $(".answerSheetBox").fadeIn(200);
    })
    $("#ASclose").on("click",function () {
        $(".answerSheetBox").fadeOut(200);
    })
    for(var i=1;i<maxQue+1;i++){
    var astap="<div class='AStaps'>"+i+"</div>";
    $(".AStapsBox").append(astap);
    }

})

//倒计时
var h=0,m=30,s=0;
var mytime=null;
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
                vueHeadBar.text="测试报告";
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
    }
}

//继续
function doGo(){
    run();
    $(".mark").fadeOut(200);
    $(".TestContinue").fadeOut(200);
}
function changePage(type,page) {
    var curAnswer=$(".Aselected span").html();
    // if(curAnswer=="A") curAnswer=1;
    // else if(curAnswer=="B") curAnswer=2;
    // else if(curAnswer=="C") curAnswer=3;
    // else if(curAnswer=="D") curAnswer=4;
    // else curAnswer=0;
    if(curAnswer==undefined) curAnswer=0;
    //切页前保存当前答案
    answers[currentQue - 1]=curAnswer;

    if(page==0) {
        if (type == "next") currentQue++;
        else if (type == "pre") currentQue--;
        if (currentQue <= 0 || currentQue > maxQue) return;
        else {
            if(currentQue==maxQue) $("#nextQuestion").html("提交答案")
            else  $("#nextQuestion").html("下一题");
            curAnswer=answers[currentQue - 1];
            $(".Aselected").removeClass("Aselected");
            if(curAnswer!=0){
                $(".AArea li").each(function () {
                    if($(this).find("span").html()==curAnswer)
                        $(this).addClass("Aselected");
                })
            }
            vueQuestion.currentQue = currentQue;
            vueQuestion.title = questions[currentQue - 1].title;
            vueQuestion.options = questions[currentQue - 1].options;

        }
    }
    else{
        currentQue=page;
        vueQuestion.currentQue = currentQue;
        vueQuestion.title = questions[currentQue - 1].title;
        vueQuestion.options = questions[currentQue - 1].options;
        curAnswer=answers[currentQue - 1];
        $(".Aselected").removeClass("Aselected");
        if(curAnswer!=0){
            $(".AArea li").each(function () {
                if($(this).find("span").html()==curAnswer)
                    $(this).addClass("Aselected");
            })
        }
    }
}
$("#nextQuestion").on("click",function () {
    changePage("next",0);
})
$("#preQuestion").on("click",function () {
    changePage("pre",0);
})
$(function(){
    $(".AStaps").on("click",function () {
        var page=parseInt($(this).html());
        changePage(null,page);
        $(".answerSheetBox").fadeOut(200);
    })
})
