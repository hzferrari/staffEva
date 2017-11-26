window.onload = function(){
    var canvas = document.getElementById("Sriptcanvas");
    var ctx = canvas.getContext("2d");
    canvas.height = document.documentElement.clientHeight-48;
    canvas.width = document.documentElement.clientWidth;

    ctx.lineWidth = 3.0;
    ctx.strokeStyle = "#585355"; // 设置线的颜色
    canvas.addEventListener('touchstart',function(event){//触摸点按下事件
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            ctx.beginPath();
            ctx.moveTo(touch.clientX-canvas.offsetLeft,touch.clientY-canvas.offsetTop);
            canvas.addEventListener('touchmove',function (event) {//手机拖动触摸点事件
                var touche = event.targetTouches[0];
                ctx.lineTo(touche.clientX - canvas.offsetLeft, touche.clientY - canvas.offsetTop);
                ctx.stroke();
            },false)
            canvas.addEventListener('touchend',function (event) {//手机离开屏幕的事件
                ctx.closePath();

            },false)

        }
    },false)

    var clear = document.getElementById('clearScript');
    clear.addEventListener('click',function()
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    },false);

}