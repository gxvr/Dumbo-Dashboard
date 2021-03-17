var chartCard1 = {
    series: [{
        name: 'Engagement',
        type: 'bar',
        data: [44, 55, 57, 56, 58, 63, 30]
    }, {
        name: 'Traffic',
        type: 'line',
        data: [13, 23, 20, 30, 40, 30, 100]
    }],
    colors: ['#e0e7ef', '#ffb000'],
    chart: {
        height: 280,
        stacked: true,
        toolbar: {
            show: false
        }
    },
    stroke: {
        width: [0, 2],
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '25%',
            endingShape: 'rounded',
        },
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        labels: {
            style: {
                fontSize: '12px',
                fontWeight: 'normal',
                color: '#ddd',
                fontFamily: 'Inter, sans-serif'
            },
        }
    },
    yaxis: {
        labels: {
            formatter: function (val) {
                return val + "k"
            },
            style: {
                fontSize: '12px',
                fontWeight: 'normal',
                color: '#ddd',
                fontFamily: 'Inter, sans-serif'
            },
        }
    },
    tooltip: {
        style: {
            fontSize: '12px',
            fontWeight: 'normal',
            color: '#ddd',
            fontFamily: 'Inter, sans-serif'
        },
    },
    fill: {
        opacity: 1
    },
    legend: {
        show: false
    },
};

var chartCard2 = {
    series: [{
        name: 'Sales',
        data: [44, 55, 57, 56, 58, 63, 60]
    }, {
        name: 'Expenses',
        data: [13, 23, 20, 8, 13, 27, 10]
    }],
    colors: ['#62BE00', '#e0e7ef'],
    chart: {
        type: 'bar',
        height: 280,
        stacked: true,
        toolbar: {
            show: false
        },
        animations: {
            enabled: false
        },
        sparkline: {
            enabled: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '25%',
            endingShape: 'rounded',
        },
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        labels: {
            style: {
                fontSize: '12px',
                fontWeight: 'normal',
                color: '#ddd',
                fontFamily: 'Inter, sans-serif'
            },
        }
    },
    yaxis: {
        labels: {
            formatter: function (val) {
                return val + "k"
            },
            style: {
                fontSize: '12px',
                fontWeight: 'normal',
                color: '#ddd',
                fontFamily: 'Inter, sans-serif'
            },
        }
    },
    tooltip: {
    custom: function({ series, seriesIndex, dataPointIndex, w }) {
      return (
        '<div class="arrow_box">' +
        "<span>" + "$" + " " +
        series[seriesIndex][dataPointIndex] + "k" +
        "</span>" +
        "</div>"
      );
    }
  },
    fill: {
        opacity: 1
    },
    legend: {
        show: false
    },
};

var chartCard3 = {
    chart: {
        height: 100,
        type: "area",
        toolbar: {
            show: false
        },
        animations: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: ['#62BE00'],
        width: 1,
        dashArray: 0,
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        name: "Series 1",
        data: [50, 50, 100],
    }],
    fill: {
        type: "gradient",
        colors: ['#62BE00'],
        gradient: {
            shadeIntensity: 1,
            gradientFromColors: ['#62BE00'],
            opacityFrom: 0.5,
            opacityTo: 0.9,
        }
    },
    yaxis: {
        show: false,
        showAlways: false,
    },
    xaxis: {
        labels: {
            show: false,
        },
    },
    grid: {
        show: false,
    },
    tooltip: {
        enabled: false,
    }
};

var chartCard4 = {
    series: [44, 55, 13],
    chart: {
        width: 390,
        type: 'donut',
    },
    labels: ['Instagram', 'Tiktok', 'Twitter'],
    colors: ['#62BE00', '#ffb000', '#ff4560'],
    stroke: {
        show: false,
    },
    plotOptions: {
        pie: {
            donut: {
                size: '75%',
                background: 'transparent',
                labels: {
                    show: true,
                    total: {
                        show: true,
                        showAlways: true,
                        label: 'Impressions',
                        fontFamily: 'Inter, sans-serif',
                        formatter: function (w) {
                            return w.globals.seriesTotals.reduce((a, b) => {
                                return a + b
                            }, 0)
                        }
                    },
                    value: {
                        show: true,
                        fontSize: '26px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        color: undefined,
                        formatter: function (val) {
                            return val
                        }
                    },
                }
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        position: 'bottom',
        offsetY: 0,
    },
    tooltip: {
        style: {
            fontSize: '12px',
            fontWeight: 'normal',
            color: '#ddd',
            fontFamily: 'Inter, sans-serif'
        },
    },
};


new ApexCharts(document.querySelector("#chartCard1"), chartCard1).render();
new ApexCharts(document.querySelector("#chartCard2"), chartCard2).render();
new ApexCharts(document.querySelector("#chartCard3"), chartCard3).render();
new ApexCharts(document.querySelector("#chartCard4"), chartCard4).render();