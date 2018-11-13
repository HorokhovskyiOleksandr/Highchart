var chart;
Highcharts.chart('card1', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'GDP Growth Rate'
    },
    subtitle: {
        
    },
    xAxis: {
        categories: ['2000', '2005', '2010', '2015', '2017'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'Billions'
        },
        labels: {
            formatter: function () {
                return this.value / 1000;
            }
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ' millions'
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'USA',
        data: [13131000 , 14913000, 15599000, 17387000,18051000]
    }, {
        name: 'Ukraine',
        data: [31260, 86140, 136100, 91030, 112200]
    }, 
    ]
});
Highcharts.chart('card2', {

    title: {
        text: 'Ukraine population growth'
    },

    subtitle: {
        
    },

    yAxis: {
        title: {
            text: 'Number of population,millions'
        },
           labels: {
            formatter: function () {
                return this.value / 1000;
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

      xAxis: {
        categories: ['2000', '2005', '2010', '2015', '2017'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    series: [{
        name: 'Ukraine',
        data: [48840, 46892, 45792, 44657, 44000]
    }, 


    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    })
});

// Build the chart
Highcharts.chart('card3', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Обсяг реалізованої продукції суб’єктів господарювання за видами економічної діяльності, 2017 '
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
                
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                },
                connectorColor: 'silver'
            }
        }
    },
    series: [{
        name: 'Доля',
        data: [
            { name: 'сільське господарство', y: 467636},
            { name: 'промисловість', y: 2862308},
            { name: 'будівництво', y: 236497},
            { name: 'оптова та роздрібна торгівля', y: 3351185 },
            { name: 'тимчасове розміщування й організація харчування', y: 48965 },
            { name: 'інформація та телекомунікації', y: 216803 },
            { name: 'фінансова та страхова діяльність', y: 225512 },
            { name: 'операції з нерухомим майном', y: 121182 },
            { name: 'професійна, наукова та технічна діяльність', y: 326310 },
            { name: 'діяльність у сфері адміністративного та допоміжного обслуговування', y: 81057 },
            { name: 'освіта', y: 5000 },
            { name: 'охорона здоров’я та надання соціальної допомоги', y: 21525 },
            { name: 'мистецтво, спорт, розваги та відпочинок', y: 10500 },
            { name: 'надання інших видів послуг', y: 16458 },
        ]
    }]
});