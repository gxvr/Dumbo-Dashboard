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
                fontSize: '11px',
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
                fontSize: '11px',
                fontWeight: 'normal',
                color: '#ddd',
                fontFamily: 'Inter, sans-serif'
            },
        }
    },
     tooltip: {
        style: {
            fontSize: '11px',
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
                fontSize: '11px',
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
                fontSize: '11px',
                fontWeight: 'normal',
                color: '#ddd',
                fontFamily: 'Inter, sans-serif'
            },
        }
    },
    tooltip: {
        style: {
            fontSize: '11px',
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

var chartCard3 = {
    chart: {
        height: 130,
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
        data: [30, 30, 40, 40, 44, 43, 43, 49],
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


new ApexCharts(document.querySelector("#chartCard1"), chartCard1).render();
new ApexCharts(document.querySelector("#chartCard2"), chartCard2).render();
new ApexCharts(document.querySelector("#chartCard3"), chartCard3).render();