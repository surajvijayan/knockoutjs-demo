//Refer: https://knockoutjs.com/documentation/component-registration.html
// Recommended AMD module pattern for a Knockout component that:
//  - Can be referenced with just a single 'require' declaration
define(['knockout'], function(ko)
{
    Refer: 
    https://www.jqwidgets.com/jquery-widgets-documentation/documentation/requirejs/requirejs_tutorial_knockout.htm
	var root = (typeof window === "object" && window) || this;
   	root.ko = ko;
   	ko.components.register('first-comp',
                            { require: "viewmodels/firstCompViewModel"});
   	ko.components.register('chart-comp',
                            {require: "viewmodels/jqxChartViewModel"});
	class App
	{
		// top level viewmodel
		constructor()
		{
       		var self = this;
			var newItems = [];
            self.items = ko.observableArray([]);
            var sampleData =
            [
                { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
                { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
                { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
                { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
                { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
                { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
                { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
            ];
            for (var i = 0; i < 7; i++)
            {
                var item = $.extend({}, sampleData[i]);
                item.Keith = Math.floor(Math.random() * 50);
                item.Erica = Math.floor(Math.random() * 30);
                item.George = Math.floor(Math.random() * 90);
                newItems[i] = item;
            }
            self.items(newItems);
			self.chartSettings =
            {
                //backgroundColor: "#E0FFFF",
                title: "Weekly scorecard",
                description: "Time spent",
                showLegend: true,
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                source: self.items,
                categoryAxis: {
                    dataField: "Day",
                    valuesOnTicks: false,
                    showGridLines: true
                },
                colorScheme: "scheme06",
                enableAnimations: true,
                seriesGroups: [
                    {
                        type: "column",
                        columnsGapPercent: 50,
                        seriesGapPercent: 0,
                        valueAxis: {
                            unitInterval: 10,
                            minValue: 0,
                            maxValue: 100,
                            displayValueAxis: true,
                            description: "Time in minutes",
                            axisSize: "auto",
                            tickMarksColor: "#888888"
                        },
                        series: [
                            { dataField: "Keith", displayText: "Keith" },
                            { dataField: "Erica", displayText: "Erica" },
                            { dataField: "George", displayText: "George" }
                        ]
                    }
                ]
            };
            self.updateItem = function () {
				newItems = [];
				for (var i = 0; i < 7; i++) {
					var item = $.extend({}, self.items()[i]);
					item.Keith = Math.floor(Math.random() * 50);
					item.Erica = Math.floor(Math.random() * 30);
					item.George = Math.floor(Math.random() * 90);
					newItems[i] = item;
				}
				self.items(newItems);
			};
   		};
	};
	return(App);
});
