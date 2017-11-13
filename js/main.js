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
			            fill: 'false',	//线条下方区域是否填充颜色（false=不填充）
			            backgroundColor: 'rgba(255, 99, 132,0.1)',	//线条下方区域填充颜色
			            borderColor: 'rgb(255, 99, 132)',	
			            
			        }]
				},
				// Configuration options go here
			    options: {}
			},
			init: function(legend,labels,data){
				var ctx = document.getElementById("lineChartCanvas").getContext('2d');
			
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
			            backgroundColor: 'rgba(52,205,206, 0.3)',
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
			        // {
			        //     label: "",	//图表legend
			        //     data: [],	//数据值
			        //     backgroundColor: 'rgba(77,154,229,0.3)',
			        //     borderColor: 'rgba(77,154,229,0.9)',  
			        //     borderWidth: 3,		//线宽（px）
				       //  // borderCapStyle: "round",
				       //  // borderJoinStyle: "round",
				       //  pointBackgroundColor: "rgba(77,154,229,0.9)",
				       //  pointBorderColor: "#ffffff",
				       //  // pointBorderWidth: 1,	//交叉点的border的宽（px）
				       //  // pointHoverBorderColor: "",	//hover时弹出框的颜色
				       //  // pointHoverBorderWidth: "",	//hover时弹出框的宽度
				       //  // pointHoverRadius: ""	
			        // },
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
	                    	display: true,
	                        // 此处样式设置将覆盖全局设置
	                        fontColor: '#555',	//图例文字颜色

	                    },
	                    position: "top",	//图例位置
	                },
		            scale: {
		                beginAtZero: true,
		                // display: true
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
	    init: function(){
			//图表全局样式设置
			Chart.defaults.global.defaultFontColor = '#555';	//字体颜色
			// Chart.defaults.global.defaultFontSize = '9';		//字体大小	
		},
		lineChartInit: function(data){
	    	//创建线型图表
			var chartLineLegend = "My First dataset",
				chartLinelabels = ["January", "February", "March", "April", "May", "June", "July"],	//x轴
				chartLineData = [0, 10, 5, 2, 20, 30, 45];	//y轴
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
			

				// chartRadalabels = ['编程语言', '机器学习理论', '数据结构和算法', '云计算和虚拟化', 'HADOOP'],
				// chartRadaData = [
				// 	[KLChart.randomScalingFactor(),
				// 	 KLChart.randomScalingFactor(),
				// 	 KLChart.randomScalingFactor(),
				// 	 KLChart.randomScalingFactor(),
				// 	 KLChart.randomScalingFactor(),],
				// 	// [KLChart.randomScalingFactor(),
				// 	//  KLChart.randomScalingFactor(),
				// 	//  KLChart.randomScalingFactor(),
				// 	//  KLChart.randomScalingFactor(),
				// 	//  KLChart.randomScalingFactor(),],
				// ];
			KLChart.chartRada.init(chartRadaLegend,chartRadalabels,chartRadaData);
	    }
	}
//*******
$(function(){
	// 
	var abLiItems = [
	      { name: '编程语言', points: '83' },
	      { name: '机器学习理论', points: '80' },
	      { name: '数据结构和算法', points: '97' },
	      { name: '云计算和虚拟化', points: '78' },
	      { name: 'HADOOP', points: '44' },
	    ];
	var vueAbilityScoreList = new Vue({
	  el: '#abilityScoreList',
	  data: {
	    abLiItems: abLiItems,
	  }
	})

	
	KLChart.init();
	KLChart.radarChartInit(abLiItems);
})