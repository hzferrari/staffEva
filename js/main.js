// ********图表对象
var KLChart = {
	//******定义线型图表对象
	chartLine: {	
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
		                    // beginAtZero:true
		                }
		            }],
		            xAxes: [{
     	             	display:false,	//隐藏y标签与网格
		               
		            }],
     	        }
		    }
		},
		init: function(legend,labels,data){
			var ctx = document.getElementById("lineChartCanvas").getContext('2d');
			//下方区域填充渐变色
			var screenHeight = window.screen.height;
			var grad  = ctx.createLinearGradient(0,0,0,screenHeight/3.5);
			grad.addColorStop(0,'rgba(52,205,206, 0.4)');    	// 
			grad.addColorStop(0,'rgba(52,205,206, 0.3)');    	// 
			grad.addColorStop(0.5,'rgba(52,205,206, 0.2)'); 	// 
			grad.addColorStop(0.75,'rgba(52,205,206, 0.1)'); 	// 
			grad.addColorStop(1,'rgba(52,205,206, 0)');  
			this.charsetData.data.datasets[0].backgroundColor = grad;

			this.charsetData.data.labels = labels;
			this.charsetData.data.datasets[0].label = legend;
			this.charsetData.data.datasets[0].data = data;
			var chart = new Chart(ctx, this.charsetData);
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
			        // pointHoverBorderColor: "",	//hover时弹出框的颜色
			        // pointHoverBorderWidth: "",	//hover时弹出框的宽度
			        // pointHoverRadius: ""	
		        },
		        
		        ]
			},
			// Configuration options go here
		    options: {
			    title:{
               		display:false,
	                text:"这是一行标题"
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
	                // beginAtZero: true,
	                display: false,
		            // xAxes: [{
		            //     stacked: true
		            // }],
		            // ticks 0 10 20等标签
	                // fontColor: '#000',
	                ticks: {
	                    display: false,		//坐标轴数值
	                    beginAtZero: true,
	                    fontColor: "#000",
	                    maxTicksLimit: undefined,	//最大值
	                },
	                scaleLabel: {
	                   fontColor: "#000",
	                },
	                // 线条
	                gridLines: {
	                    color: '#fff',
	                    //zeroLineColor: '#fff'
	                }
        
	            }
			}
		},
		init: function(legend,labels,data){
			

			var ctx = document.getElementById("radarChartCanvas").getContext('2d');
			
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
//*******
$(function(){

	//******数据设置
	var headBarContent = "数据挖掘工程师";
	// 雷达图数据
	var dataRadar = [
	      { name: '编程语言', points: 83 },
	      { name: '机器学习理论', points: 80 },
	      { name: '数据结构和算法', points: 97 },
	      { name: '云计算和虚拟化', points: 78 },
	      { name: 'HADOOP', points: 44 },
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
	      { name: '3月', points: 97 },
	      { name: '4月', points: 78 },
	      { name: '5月', points: 74 },
	      { name: '6月', points: 83 },
	      { name: '7月', points: 80 },
	      { name: '8月', points: 97 },
	      { name: '9月', points: 78 },
	    ];


	// headBar
	var vueHeadBar = new Vue({
		el: '.headBarContent',
		data: {
			text: headBarContent,
		}
	})
	// vueHeadBar.text = "h";	//修改text方式

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
	//初始化图表
	KLChart.init();
	KLChart.radarChartInit(dataRadar);
	KLChart.lineChartInit(dataLine);
	// ******noticeBar关闭按钮
	$(".noticeBarCloseBtn").on("click",function(){
		$(".noticeBar").slideUp(200);
	})

	// $(".pages").hide();
	$("#page2-1").show();
	vueHeadBar.text = "机器学习理论";	//修改标题
})