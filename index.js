//1 柱形图-就业行业
(function () {
  var myChart = echarts.init(document.querySelector('.bar .chart'));
  console.log(myChart);
 
  // 指定图表的配置项和数据
  var option = {
    color: ['#2F89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      top: '10px',
      left: '0%',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: [
          "旅游行业",
          "教育培训",
          "游戏行业",
          "医疗行业",
          "电商行业",
          "社交行业",
          "金融行业"
        ],
        axisTick: {
          alignWithLabel: true
        },
        // 修改x轴坐标文字颜色
        axisLabel: {
          color: "rgba(255 , 255, 255, .6)",
          fontSize: 12
        },
        // 隐藏坐标轴
        axisLine: {
          show: false
        },
       
      }
     
    ],
    yAxis: [
      {
        type: 'value',
        // y轴相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12,
               
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 1
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
            
              
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          borderRadius: 5
        }
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  // 让图表跟随屏幕自适应
  window.addEventListener('resize', () => myChart.resize())
})();

// 2 柱形图
(function () {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  var myChart = echarts.init(document.querySelector('.bar2 .chart'))
  var option = {
    grid: {
      top: '10%',
      left: '22%',
      bottom: '10%',
      // containLabel: true
    },
    xAxis: {
      show: false
    },
    yAxis: [{
      type: 'category',
      data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
      inverse: true,
      axisLabel: {
        color: '#fff'
      },
      axisLine: {
        show: false
      },
      axisTick: { show: false }
    },
        
    {
      data: [702, 350, 610, 793, 664],
      inverse: true,
      axisLabel: {
        color: '#fff'
      },
      axisLine: {
        show: false
      },
      axisTick: { show: false }
    }],
    series: [
      {
        name: '条',
        type: 'bar',
        data: [70, 34, 60, 78, 69],
        yAxisIndex: 0,
        // 修改成圆角
        itemStyle: {
          barBorderRadius: 20,
          // 修改柱子的颜色
          color: function (item) {
            // console.log(item);
            return myColor[item.dataIndex]
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 10,
        // 图形上的文字标签
        label: {
          show: true,
          position: 'inside',//在柱子内部显示
          formatter: "{c}%" //{c} 自动解析为 数据 data里面的数据
        },
          
      },
      {
        name: '框',
        type: 'bar',
        yAxisIndex: 1,
        // 修改柱子的距离
        barCategoryGap: 50,
        barWidth: 15,
        data: [100, 100, 100, 100, 100],
        // 修改柱子
        itemStyle: {
          color: 'none',
          borderWidth: 3,
          borderColor: '#00c1de',
          barBorderRadius: 15,
              
        }
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize', () => myChart.resize())
})();

  // 3 折线图
(function () {
  var yearDate = [
    {
      year: '2020',
      data: [
        [120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210],
        [220, 182, 191, 234, 290, 330, 310, 120, 132, 101, 134, 900]
      ]
    },
    {
      year: '2021',
      data: [
        [220, 182, 191, 234, 290, 330, 310, 120, 132, 101, 134, 90],
        [120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210]
      ]
    }
  ];
  var myChart = echarts.init(document.querySelector('.line .chart'));
  var option = {
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
      textStyle: {
        color: '#4c9dfb',
        
      },
      right: '10%'
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,
      borderColor: '#012f4a',
      containLabel: true
    },
     
    xAxis: {
      type: 'category',
      boundaryGap: false,
      // 去除刻度
      axisTick: {show:false},
      // x周刻度标签字体颜色
      axisLabel: {
        textStyle: {
          color: '#4c9bfd',
       }
      },
      // 影藏x轴的坐标轴
      axisLine: { show: false },
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
    },
    yAxis: {
      type: 'value',
      // 去除刻度
      axisTick: {show:false},
      // x周刻度标签字体颜色
      axisLabel: {
        color: '#4c9bfd',
      },
      splitLine:
      {
        lineStyle: {
          color: '#012f4a'
        }
      }
    },
    series: [
      {
        name: '邮件营销',
        type: 'line',
              
        smooth: true,//圆滑显示
        data: yearDate[0].data[0]
      },
      {
        name: '联盟广告',
        type: 'line',
        smooth: true,
        data: yearDate[0].data[1]
      },
        
    ]
  };
  myChart.setOption(option)
  window.addEventListener('resize', () => myChart.resize())
  // 数据切换
  $('.line h2').on('click', 'a', function () {
    // console.log($(this).index()) //获取到点击按钮的索引
    // console.log(yearDate[$(this).index()]); //获取到年份的对象值
    var obj = yearDate[$(this).index()]
    // console.log(obj);
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    myChart.setOption(option)
  })
})();
  
// 4 折线图
  (function () {
    var myChart = echarts.init(document.querySelector('.line2 .chart'))
    var option = {
   
      tooltip: {
          trigger: 'axis',
          
      },
      legend: {
        top:'0%',
        textStyle: {
          color: 'rgba(255,255,255,.5)',
          fontSize:12
        }
      },
  
      grid: {
        top:'30',
          left: '10',
          right: '10',
          bottom: '10',
          containLabel: true
      },
      xAxis: [
          {
              type: 'category',
              boundaryGap: false,
          // x轴更换数据
        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "26",
          "28",
          "29",
          "30"
        ],
          axisLabel: {
            textStyle: {
              color: 'rgba(255,255,255,.6)',
              fontSize:12
            }
          },
          axisLine: {
            lineStyle: {
            color:'rgba(255,255,255,.2)'
              
            }
          }
          }
      ],
      yAxis: [
          {
          type: 'value',
          axisTick: {show:false},
          axisLine: {
            lineStyle: {
              color:'rgba(255,255,255,.1)'
            }
          },
          axisLabel: {
            textStyle: {
              color: 'rgba(255,255,255,.6)',
              fontSize:12
            }
          },
          // 修改分割线的颜色
          splitLine: {
            lineStyle: {
              color:'rgba(255,255,255,0.1)'
            }
          }
          }
      ],
      series: [
          {
              name: '邮件营销',
          type: 'line',
          smooth: true,//圆滑线条
              // 单独设置线条样式
          lineStyle: {
            color: '#0184d5',
            width:2
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(1, 132, 213, 0.4)'//渐变起始颜色
            }, {
                offset: 0.8,
                color: 'rgba(1, 132, 213, 0.1)'//渐变结束颜色
              }], false),
            shadowColor: "rgba(0,0,0,0.1)",
          },
           
              emphasis: {
                  focus: 'series'
              },
              data: [
                30,
                40,
                30,
                40,
                30,
                40,
                30,
                60,
                20,
                40,
                30,
                40,
                30,
                40,
                30,
                40,
                30,
                60,
                20,
                40,
                30,
                40,
                30,
                40,
                30,
                40,
                20,
                60,
                50,
                40
              ],
              // 设置拐点小圆点
          symbol: 'circle',
          // 设置拐点小圆点大小
          symbolSize: 8,
          // 设置拐点颜色和边框
           // 默认不展示拐点
           showSymbol:false,
          itemStyle: {
            color: '#0184d5',
            borderColor: 'rgba(221,220,107,.1)',
            borderWidth:12
          }
         
          },
          {
              name: '联盟广告',
            type: 'line',
            smooth: true,
             // 单独设置线条样式
          lineStyle: {
            color: '#00d887',
            width:2
            },
         
          
            areaStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0, 216, 135, 0.4)'
            }, {
                offset: 1,
                color: 'rgba(0, 216, 135, 0.1)'
                }],false) ,
              shadowColor:"rgba(0,0,0,.1)"
              },
              emphasis: {
                  focus: 'series'
              },
              data: [
                130,
                10,
                20,
                40,
                30,
                40,
                80,
                60,
                20,
                40,
                90,
                40,
                20,
                140,
                30,
                40,
                130,
                20,
                20,
                40,
                80,
                70,
                30,
                40,
                30,
                120,
                20,
                99,
                50,
                20
              ],
               // 设置拐点小圆点
          symbol: 'circle',
          // 设置拐点小圆点大小
          symbolSize: 8,
          // 设置拐点颜色和边框
          itemStyle: {
            color: '#00d887',
            borderColor: 'rgba(221,220,107,.1)',
            borderWidth:12
          },
          // 默认不展示拐点
          showSymbol:false
          },
        
         
      ]
    };
    
    myChart.setOption(option)
    window.addEventListener('resize', () => {
      myChart.resize()
    })
  })()