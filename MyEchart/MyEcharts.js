/**
 * create 2018.9.6
 * 使用echarts可以实现很多复杂的图标，但是每次需要配置大量的重复的js,为了方便使用，进行二次封装
 * 适用于同类型的图标，若突变很复杂特殊可单独考虑；
 * 参考了其他大牛的代码逻辑
 * */
/**
 * 分四步：
 * 1、确定数据格式
 * 2、格式化数据（处理成图标可用的数据格式）
 * 3、生成图形
 * 4、图形展示
 * */
//判断数组中是否包含某个元素
Array.prototype.contains = function (obj) {
    var i = this.length;
    //while循环会在指定条件为真时循环执行代码块
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
};

var MyEcharts = {
    //格式化数据
    ChartDataFormate: {
        FormateNOGroupData: function (data) {
            var categories = [];
            var datas = [];
            for (var i = 0; i < data.length; i++) {
                categories.push(data[i].name || '');
                temp_series = { value: data[i].value || 0, name: data[i].name };
                datas.push(temp_series);
            }
            return { category: categories, data: datas };
        },
        //梳理分组数据，数据格式：group：XXX，name：XXX，value：XXX用于折线图、柱形图（分组，堆积）
        //参数： 数据、展示类型
        FormatGroupData: function (data, type) {
            console.log(data);
            var groups = new Array();
            var names = new Array();
            var series = new Array();
            for (var i = 0; i < data.length; i++) {
                if (!groups.contains(data[i].group)) {
                    groups.push(data[i].group);
                }
                if (!names.contains(data[i].name)) {
                    names.push(data[i].name);
                }
            }
            console.log(groups,names);
            for (var i = 0; i < groups.length; i++) {
                var temp_series = {};
                var temp_data = new Array();
                for (var j = 0; j < data.length; j++) {
                    for (var k = 0; k < names.length; k++)
                        if (groups[i] == data[j].group && data[j].name == names[k])
                            temp_data.push(data[j].value);
                }
                temp_series = { name: groups[i], type: type, data: temp_data };
                series.push(temp_series);
            }
            return {legend: groups, category: names, series: series}
            console.log(groups,names);
        }
    },
    //生成图形
    ChartOptionTemplates: {
        //柱状图
        Bar: function (title, subtext, data) {
            var datas = MyEcharts.ChartDataFormate.FormatGroupData(data, 'bar');
            var option = {
                title: {
                    text: title || '',
                    subtext: subtext || ''
                },
                legend: {
                    data: datas.legend,
                },
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataView: { // 数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
                            show: true,
                            readOnly: false, // 是否不可编辑（只读）
                        },
                        magicType: { // 动态切换示例
                            show: true,
                            type: ['line', 'bar']
                        }
                    }
                },
                xAxis: [
                    {
                        type: 'category', // 类目
                        data: datas.category
                    }
                ],
                yAxis: {
                    type: 'value' // 坐标轴类型，value数值轴，适用于连续数据
                },
                series: datas.series
            }
            return option;
        },
        //折线图
        //饼图
    },
    //图形展示
    /*所需要的参数： 图形option，图形展示区域id*/
    RenderChart: function (option, containerId) {
        // 获取图形显示区域
        var container = eval("document.getElementById('" + containerId + "');");
        var myChart = echarts.init(container);
        // 为echarts对象加载数据
        myChart.setOption(option);
    }
};
