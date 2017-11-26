var maxQue=10;
//当前题目数
var currentQue=1;

// ********图表对象
var KLChart = {
	//******定义线型图表对象
	chartLine: {	
		chart: "",
		charsetData: {
			type: "line",
			data: {
				labels: [],		//数据项（对应data）
		        datasets: [{
		            label: "",	//图表legend
		            data: [],	//数据值
		            // fill: 'false',	//线条下方区域是否填充颜色（false=不填充）
		            // backgroundColor: 'rgba(52,205,206, 0.2)',	//线条下方区域填充颜色
		            backgroundColor: '',	//线条下方区域填充颜色
		            borderColor: 'rgba(52,205,206, 1)',   
		            borderWidth: 3,		//线的宽度（以像素为单位）。
		            pointRadius: 1,		//点形状的半径。如果设置为0，则不呈现点。
		            // pointBorderColor: '#FEE75B', 	//点的边框颜色。
		            pointHoverBackgroundColor: 'rgba(52,205,206, 0.8)',		//徘徊时点背景颜色。
		            pointHoverBorderColor: '#FEE75B',	//徘徊时边框的颜色。
		            
		        }]
			},
			// Configuration options go here
		    options: {

		    	legend: {
                    labels: {
                    	display: false,
                        // 此处样式设置将覆盖全局设置
                        fontColor: '#555',	//图例文字颜色

                    },
                    position: "top",	//图例位置
                },
             	scales: {
     	            yAxes: [{
     	             	display:false,	//隐藏y标签与网格
		                ticks: {
		                    // beginAtZero:true,
		                    min: 50,
		                }
		            }],
		            xAxes: [{
          		        gridLines: {
          	            	color: '#fff',	//x轴颜色
		                    display: false,   	              
          	           }
		            }],
     	        },

		    },

		},
		init: function(legend,labels,data){
			var ctx = document.getElementById("lineChartCanvas").getContext('2d');
			
			//下方区域填充渐变色
			var screenHeight = window.screen.height;
			var grad  = ctx.createLinearGradient(0,0,0,screenHeight/3.7);
			grad.addColorStop(0,'rgba(52,205,206, 0.4)');    	// 
			// grad.addColorStop(0.25,'rgba(52,205,206, 0.3)');    	// 
			grad.addColorStop(0.5,'rgba(52,205,206, 0.2)'); 	// 
			grad.addColorStop(0.75,'rgba(52,205,206, 0.1)'); 	// 
			grad.addColorStop(1,'rgba(52,205,206, 0)');  
			this.charsetData.data.datasets[0].backgroundColor = grad;

			this.charsetData.data.labels = labels;
			this.charsetData.data.datasets[0].label = legend;
			this.charsetData.data.datasets[0].data = data;
			this.chart = new Chart(ctx, this.charsetData);
			this.activeSlideBar();
		},
		updataChart: function(data){
			var chartLinelabels = [],	//x轴
				chartLineData =  [];	//y轴
			for(var i=0,len=data.length; i<len; i++){
				chartLinelabels[i] = data[i].name;
				chartLineData[i] = data[i].points;
			}
			this.charsetData.data.labels = chartLinelabels;
			this.charsetData.data.datasets[0].data = chartLineData;
			this.chart.update();
		},
		activeSlideBar: function(){
			//slideBar滑动功能
			var ctx = document.getElementById("lineChartCanvas").getContext('2d');
			ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);

			// ctx.fillStyle = "#555";
            

			//
			var slideBar = document.getElementById("lineChartSlideBar");
			var range, lastrange;	//slideBar的range值
			slideBar.addEventListener("input",function(){
				range = this.value;
			
				showValue(lastrange,range);
				lastrange = range;

			})
			function showValue(lastrange,range){
				ctx.textAlign = 'center';
            	ctx.textBaseline = 'bottom';
				if(lastrange){
					ctx.fillStyle = "#fff";

					KLChart.chartLine.charsetData.data.datasets.forEach(function (dataset)
			        {
			            for(var key in dataset._meta)
			            {
			                var model = dataset._meta[key].data[lastrange-1]._model;
			                ctx.fillText(dataset.data[lastrange-1], model.x, model.y - 5);
			            }
			            
			        });
				}
				ctx.fillStyle = "#555";
				KLChart.chartLine.charsetData.data.datasets.forEach(function (dataset)
		        {
		            for(var key in dataset._meta)
		            {
		                var model = dataset._meta[key].data[range-1]._model;
		                ctx.fillText(dataset.data[range-1], model.x, model.y - 5);
		            }
		            
		        });
			}
			
		},
	},
	//******定义雷达图表对象
	chartRada: {
		charsetData: {
			type: "radar",
			data: {
				labels: [],		//数据项（对应data）
		        datasets: [
		        {
		            label: "",	//图表legend
		            data: [],	//数据值
		            backgroundColor: 'rgba(52,205,206, 0.2)',
		            borderColor: 'rgba(52,205,206, 1)',  
		            borderWidth: 0.1,		//线宽（px）
			        // borderCapStyle: "round",
			        // borderJoinStyle: "round",
			        pointBackgroundColor: "rgba(52,205,206, 1)",
			        pointBorderColor: "rgba(52,205,206, 1)",
			        pointBorderWidth: 2,	//交叉点的border的宽（px）
			        pointHoverBorderColor: "rgba(52,205,206,1)",	//hover时点的背景颜色
			        // pointHoverBorderWidth: "",	//hover时弹出框的宽度
			        // pointHoverRadius: "",
			        spanGaps: false,	
		        },
		        
		        ]
			},
			// Configuration options go here
		    options: {

			    title:{
               		display:false,
	                text:"这是一行标题"
	            },
	            labels:{
	            	display:true
	            },
	            elements: {
	                line: {
	                    tension: 0.0,	//线弯曲程度
	                }
	            },
	            legend: {
                    labels: {
                    	display: false,
                        // 此处样式设置将覆盖全局设置
                        fontColor: '#555',	//图例文字颜色
                    },
                    position: "top",	//图例位置
                },
	            scale: {
	                display: true,           
	                color: '#fff',
	                ticks: {   // ticks 0 10 20等标签
	                    display: false,		//坐标轴数值
	                    beginAtZero: true,
	                    // fontColor: "#646464",
	                    maxTicksLimit: 4,	//网格线数量最大值
	                    fontSize: 10,
	                    fontFamily: "'Arial', sans-serif",
	                },
	                // scaleLabel: {
	                //    fontColor: "#fff",
	                // },
	                // 线条
	                gridLines: {
	                    color: '#f4f4f4',
	                    // zeroLineColor: '#fff'
	                    display: true,
	                    drawTicks: true,
	                    offsetGridLines: true,
	                    // borderDash: [10],
	                    // borderDashOffset: 10,
	                    tickMarkLength: 1,
	                }
        
	            },
	            animation: {
	                onComplete: function () {
	                    var ctx = this.chart.ctx;
	                    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
	                    ctx.fillStyle = "#555";
	                    ctx.textAlign = 'center';
	                    ctx.textBaseline = 'bottom';

	                    this.data.datasets.forEach(function (dataset)
	                    {
	                        for (var i = 0; i < dataset.data.length; i++) {
	                            for(var key in dataset._meta)
	                            {
	                                var model = dataset._meta[key].data[i]._model;
	                                ctx.fillText(dataset.data[i], model.x, model.y - 5);
	                            }
	                        }
	                    });
	                }
	            }
	            
			}
		},
		init: function(legend,labels,data){
			

			var ctx = document.getElementById("radarChartCanvas").getContext('2d');
			// ctx.fillStyle = "#fefefe"; 		//用白色背景填充
			// ctx.fillRect(0,0,100,100);
			
			this.charsetData.data.labels = labels;
			//图例1
			this.charsetData.data.datasets[0].label = legend[0];
			this.charsetData.data.datasets[0].data = data[0];
			//图例2
			// this.charsetData.data.datasets[1].label = legend[1];
			// this.charsetData.data.datasets[1].data = data[1];

			//
			var myRadarChart = new Chart(ctx, this.charsetData);
		},
	},
	randomScalingFactor: function() {
		//返回0-100的整数
        return Math.round(Math.random() * 100);
    },
	lineChartInit: function(data){
    	//创建线型图表
		var chartLineLegend = "积分",
			chartLinelabels = [],	//x轴
			chartLineData =  [];	//y轴
		for(var i=0,len=data.length; i<len; i++){
			chartLinelabels[i] = data[i].name;
			chartLineData[i] = data[i].points;
		}
		KLChart.chartLine.init(chartLineLegend,chartLinelabels,chartLineData);
    },
    radarChartInit: function(data){
    	//创建雷达图表
    	var chartRadaLegend = ["能力状况"];
    	var chartRadalabels = [], chartRadaData = [[]];
    	for(var i=0,len=data.length; i<len; i++){
			chartRadalabels[i] = data[i].name;
			chartRadaData[0][i] = data[i].points;
		}
		
		KLChart.chartRada.init(chartRadaLegend,chartRadalabels,chartRadaData);
    },
    init: function(){
		//图表全局样式设置
		Chart.defaults.global.defaultFontColor = '#555';	//字体颜色
		// Chart.defaults.global.defaultFontSize = '9';		//字体大小	
		Chart.defaults.global.legend = 'false';

	},
}

//******数据设置
var headBarContent = "数据挖掘工程师";
var noticeBarContent = "您的HADOOP能力值较低，请进行提升并重新参加测试！";
// 雷达图数据
var dataRadar = [
      { name: '编程语言', points: 82 },
      { name: '机器学习理论', points: 80 },
      { name: '数据结构和算法', points: 97 },
      { name: '云计算和虚拟化', points: 78 },
      { name: 'HADOOP', points: 58 },
    ];
//能力榜样列表
var abilitiRangeItems = [
		{ range: 1, name: '李广源', score: 178 },
		{ range: 2, name: '张贺', score: 159 },
		{ range: 3, name: '程菲', score: 158 },
	];
//  折线图数据
var dataLine = [
      { name: '1月', points: 83 },
      { name: '2月', points: 80 },
      { name: '3月', points: 96 },
      { name: '4月', points: 78 },
      { name: '5月', points: 74 },
      { name: '6月', points: 83 },
      { name: '7月', points: 80 },
      { name: '8月', points: NaN },	//不存在的数据显示NaN
      { name: '9月', points: NaN },
    ];
//本次测试说明(v-html插入)
var testInstruct = "<p>测试时间：</p>\
					<p>2018/8/15至9/15</p>\
					<br>\
					<p>测试题目：</p>\
					<p>20道选择题</p>\
					<p>每题5分</p>\
					<br>\
					<p>测试总分：80分</p>";

// headBar
var vueHeadBar = new Vue({
	el: '.headBarContent',
	data: {
		text: headBarContent,
	}
})
// vueHeadBar.text = "h";	//修改text方式
var vueNoticeBar = new Vue({
	el: '.noticeBarContent.column_2',
	data: {
		text: noticeBarContent,
	}
})

//雷达图对应能力列表
var vueAbilityScoreList = new Vue({
  el: '#abilityScoreList',
  data: {
    abLiItems: dataRadar,
  }
})

var vueAbilityRangeList = new Vue({
	el: '#abilityRangeList',
	data: {
		abRanItems: abilitiRangeItems,
	}
})

//本次测试说明vue
var vueTestInstruct = new Vue({
	el: ".box2innerBoxRight .contentBox",
	data: {
		text: testInstruct,
	}
});
//*******
$(function(){

	//初始化图表
	KLChart.init();
	KLChart.radarChartInit(dataRadar);
	KLChart.lineChartInit(dataLine);

	// 
	var userphone = "13802885453";
	// when(oInterface.getAbilityIntegralsByPhone(userphone)).done(function(abilityIntegrals){

	// })
	
	// ******noticeBar关闭按钮
	$(".noticeBarCloseBtn").on("click",function(){
		$(".noticeBar").slideUp(200);
	});

	// $(".noticeBar").hide();
	var page1_2height = window.screen.height;
	$("#page1-2").css("height",page1_2height+'px');

	//开关
	var oswitchBtn = {	
		switch1_on : "",
        switch1_off : "",
        init: function(){
        	this.switch1_on = document.getElementById("switch1_on");
        	this.switch1_off = document.getElementById("switch1_off");
			this.switch1_on.onclick=function(){
				oswitchBtn.switch1_off.className = (oswitchBtn.switch1_off.className=="switch_off1")?"switch_on1":"switch_off1";
				oswitchBtn.switch1_on.className = (oswitchBtn.switch1_on.className=="switch_off2")?"switch_on2":"switch_off2";
			};
        } 
	};
	oswitchBtn.init();

	//******页面转跳
	var oPageSkip = {
		thisPageStack: ["#page1-1"],
		lastPageStack: [],
		thisPageTitleStack: [headBarContent],
		lastPageTitleStack: [],
		goNext: function(nextPage,nextTitle){
			var $thisPage = this.thisPageStack.pop();	//thisPageStack出栈当前页面
			if( $thisPage == nextPage ){
				//已是当前页面不转跳
				this.thisPageStack.push($thisPage);
				return false;
			}else{
				this.thisPageStack.push(nextPage);			//thisPageStack入栈下一个页面
				this.lastPageStack.push($thisPage);			//lastPageStack入栈当前页面

				//页面切换效果
				$($thisPage).hide(100);
				$(nextPage).show(100);	

				//标题修改
				vueHeadBar.text = nextTitle;
				var thisTitle = this.thisPageTitleStack.pop();
				this.lastPageTitleStack.push(thisTitle);	//记录当前标题
				this.thisPageTitleStack.push(nextTitle);	//记录下一页标题
				//如果是page2-1则修改内容
				if(nextPage == "#page2-1"){
					this.changeData(nextTitle);
				}
			}		
		},
		goBack: function(){
			if(this.lastPageStack.length < 1){
				//已经没有上一页了
				return false;
			}else{
				var $thisPage = this.thisPageStack.pop(),	//thisPageStack出栈当前页面
				$backPage = this.lastPageStack.pop();		//lastPageStack出栈前一个页面
				this.thisPageStack.push($backPage);			//thisPageStack出栈前一个页面

				$($thisPage).hide(100);
				$($backPage).show(100);

				//标题修改
				var thisTitle = this.lastPageTitleStack.pop();
				vueHeadBar.text = thisTitle;	
				this.thisPageTitleStack.push(thisTitle);
				//如果是page2-1则修改内容
				if($backPage == "#page2-1"){
					this.changeData(thisTitle);
				}
			}
		},
		changeData: function(title){
			//  折线图数据
			var dataLine1 = [
			      { name: '1月', points: 83 },
			      { name: '2月', points: 80 },
			      { name: '3月', points: 97 },
			      { name: '4月', points: 78 },
			      { name: '5月', points: 74 },
			      { name: '6月', points: 83 },
			      { name: '7月', points: 80 },
			      { name: '8月', points: NaN },	//不存在的数据显示NaN
			      { name: '9月', points: NaN },
			    ];
			var dataLine2 = [
			      { name: '1月', points: 90 },
			      { name: '2月', points: 85 },
			      { name: '3月', points: 82 },
			      { name: '4月', points: 71 },
			      { name: '5月', points: 75 },
			      { name: '6月', points: 77 },
			      { name: '7月', points: 80 },
			      { name: '8月', points: NaN },	//不存在的数据显示NaN
			      { name: '9月', points: NaN },
			    ];
			var dataLine3 = [
			      { name: '1月', points: 97 },
			      { name: '2月', points: 100 },
			      { name: '3月', points: 97 },
			      { name: '4月', points: 96 },
			      { name: '5月', points: 95 },
			      { name: '6月', points: 94 },
			      { name: '7月', points: 97 },
			      { name: '8月', points: NaN },	//不存在的数据显示NaN
			      { name: '9月', points: NaN },
			    ];
			var dataLine4 = [
			      { name: '1月', points: 73 },
			      { name: '2月', points: 78 },
			      { name: '3月', points: 80 },
			      { name: '4月', points: 78 },
			      { name: '5月', points: 77 },
			      { name: '6月', points: 80 },
			      { name: '7月', points: 81 },
			      { name: '8月', points: NaN },	//不存在的数据显示NaN
			      { name: '9月', points: NaN },
			    ];
			var dataLine5 = [
			      { name: '1月', points: 59 },
			      { name: '2月', points: 57 },
			      { name: '3月', points: 60 },
			      { name: '4月', points: 55 },
			      { name: '5月', points: 56 },
			      { name: '6月', points: 57 },
			      { name: '7月', points: 63 },
			      { name: '8月', points: NaN },	//不存在的数据显示NaN
			      { name: '9月', points: NaN },
			    ];
			var dataLine6 = [
			      { name: '1月', points: 83 },
			      { name: '2月', points: 80 },
			      { name: '3月', points: 97 },
			      { name: '4月', points: 78 },
			      { name: '5月', points: 74 },
			      { name: '6月', points: 83 },
			      { name: '7月', points: 80 },
			      { name: '8月', points: NaN },	//不存在的数据显示NaN
			      { name: '9月', points: NaN },
			    ];
			var dataLine = "";
			switch(title){
				case "编程语言":
					dataLine = dataLine1;
					break;
				case "机器学习理论":
					dataLine = dataLine2;
					break;
				case "数据结构和算法":
					dataLine = dataLine3;
					break;
				case "云计算和虚拟化":
					dataLine = dataLine4;
					break;
				case "HADOOP":
					dataLine = dataLine5;
					break;
				default:
					console.log("没有数据！")
					break;
			}

			KLChart.chartLine.updataChart(dataLine);
		}
	};
	//能力列表转跳按钮
	$("#abilityScoreList .toNextPage").on("click",function(){
		var nextTitle = $(this).parent().find(".column_2").text();
		oPageSkip.goNext("#page2-1", nextTitle);
		
	});
	//bar栏个人中心按钮
	$("#icon-myselected").on("click",function(){
		oPageSkip.goNext("#page1-2", "个人中心");
	});
	//bar栏返回按钮
	$("#backBtn").on("click",function(){
		oPageSkip.goBack();
	});
	//学习与练习
	$("#enterTestBtn").on("click",function(){
		__loadingMask();
		setTimeout(function(){
            $(".noticeBar").hide();
           currentQue=0;
            changePage("next",0);
			oPageSkip.goNext("#page3-1", "测试");
            //开始倒计时
            run();
		},1000)
		
	})
	//下一题
	$("#nextQuestion").on("click",function(){
		if(currentQue>maxQue) {
            __loadingMask();
            setTimeout(function () {
                oPageSkip.goNext("#page4-1", "测试报告");
            }, 1000)
        }
	})
	//完成测试
	$("#completeTest").on("click",function(){
		oPageSkip.goNext("#page1-1", "数据挖掘工程师");
	})

	//****loading遮罩
	function __loadingMask(){
		$(".loading").show();
		setTimeout(function(){
		    $(".loading").hide();
		},908);
	}


})