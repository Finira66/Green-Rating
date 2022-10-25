$(document).ready(function () {
    $('.js-select-lang').select2({
        minimumResultsForSearch: Infinity,
    });

    $('.js-token-time').select2({
        minimumResultsForSearch: Infinity,
        dropdownCssClass: "token-time-dropdown"
    });

    const menuMob = document.querySelector('.menu-mob');

    document.querySelector('.header__menu-btn').addEventListener('click', (e) => {
        e.preventDefault();
        menuMob.classList.toggle('open');
        document.querySelector('.menu').classList.toggle('hidden');
        document.querySelector('.close').classList.toggle('show');
        document.body.classList.toggle('overflow-hidden');
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });


    let series = {
        monthDataSeries1: {
            prices: [1, 50, 2000, 3000, 150, 1000],
            dates: ['2021-04-22', '2021-04-23', '2021-04-24', '2021-04-25', '2021-04-26', '2021-04-28']
        }
    }

    let options = {
        series: [{
            name: "STOCK ABC",
            data: series.monthDataSeries1.prices
        }],
        chart: {
            toolbar: {
                show: false,
            },
            type: 'area',
            height: 130,
            width: '100%',
            zoom: {
                enabled: false
            }
        },
        colors: ["#00EEA7"],
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: false,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1,
            dashArray: 0,
        },
        labels: series.monthDataSeries1.dates,
        xaxis: {
            type: 'datetime',
            labels: {
                show: false,
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
        },
        yaxis: {
            opposite: true,
            show: false,

        },
        legend: {
            horizontalAlign: 'left'
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            strokeDashArray: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: "vertical",
                shadeIntensity: 0.5,
                gradientToColors: [],
                opacityFrom: 0.2,
                opacityTo: 0.9,
                colorStops: [
                    {
                        offset: 20,
                        color: "#00EEA7",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: "#00694A",
                        opacity: 0.3
                    }
                ]
            }
        },

    };
    let options2 = {
        series: [{
            name: "STOCK ABC",
            data: series.monthDataSeries1.prices
        }],
        chart: {
            toolbar: {
                show: false,
            },
            type: 'area',
            height: 130,
            width: '100%',
            zoom: {
                enabled: false
            }
        },
        colors: ["#3233FF"],
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: false,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1,
            dashArray: 0,
        },
        labels: series.monthDataSeries1.dates,
        xaxis: {
            type: 'datetime',
            labels: {
                show: false,
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
        },
        yaxis: {
            opposite: true,
            show: false,

        },
        legend: {
            horizontalAlign: 'left'
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            strokeDashArray: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: "vertical",
                shadeIntensity: 0.5,
                gradientToColors: [],

                colorStops: [
                    {
                        offset: 10,
                        color: "#3233FF",
                        opacity: 1
                    },
                    {
                        offset: 90,
                        color: "#3233FF",
                        opacity: 0.3
                    }
                ]
            }
        },

    };
    let tableGraphOptions = {
        series: [{
            name: "STOCK ABC",
            data: series.monthDataSeries1.prices
        }],
        chart: {
            toolbar: {
                show: false,
            },
            type: 'area',
            height: 66,
            width: '100%',
            zoom: {
                enabled: false
            }
        },
        colors: ["#F63EA1"],
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: false,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1,
            dashArray: 0,
        },
        labels: series.monthDataSeries1.dates,
        xaxis: {
            type: 'datetime',
            labels: {
                show: false,
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
        },
        yaxis: {
            opposite: true,
            show: false,
        },
        legend: {
            horizontalAlign: 'left',
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            strokeDashArray: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: "vertical",
                shadeIntensity: 0.5,
                gradientToColors: [],

                colorStops: [
                    {
                        offset: 10,
                        color: "#3233FF",
                        opacity: 1
                    },
                    {
                        offset: 90,
                        color: "#3233FF",
                        opacity: 0.3
                    }
                ]
            }
        },

    };

    const chart = document.querySelector("#chart");
    const chartSecond = document.querySelector("#chart2");
    const chartGraphTable = document.querySelector("#graph-table");


    if (chart != undefined) {
        let chartInit = new ApexCharts(chart, options);
        chartInit.render();
    }
    if (chartSecond != undefined) {
        let chartSecondInit = new ApexCharts(chartSecond, options2);
        chartSecondInit.render();
    }
    if (chartGraphTable != undefined) {
        let graphTableInit = new ApexCharts(chartGraphTable, tableGraphOptions);
        graphTableInit.render();
    }

    $('.js-country-lang').select2({
        minimumResultsForSearch: Infinity,
        dropdownCssClass: "country-dropdown"
    });

    if ($(".js-range-slider") != undefined) {
        $(".js-range-slider").ionRangeSlider({
            min: 0,
            max: 100000,
            hide_from_to: true,
            onChange: function (data) {
                const parent = data.input.closest('.vote-card');
                parent.find('.jsVoteValue')[0].value = data.from;
            }
        });

        let $range = $(".range-slider-time");

        let values = [1, 3, 5, 10, 15, 20, 25, 60];
        let values_p = ["1m", "3m", "5m", "10m", "15m", "20m", "25m", "∞"];

        $(".range-slider-time").ionRangeSlider({
            type: "double",
            grid: true,
            values: values,
            hide_min_max: true,
            hide_from_to: true,
            prettify: function (n) {
                let ind = values.indexOf(n);
                return values_p[ind];
            },
            onStart: function(data) {
                // $result.text(data.from_value);
            },
            onChange: function(data) {
                // $result.text(data.from_value);
            }
        });
    }


    function randNumbers() {
        let numbers = [];

        for (let i = 0; i < 20; i += 1) {
            numbers.push(Math.random() * 50);
        }

        return numbers;
    }

    document.querySelectorAll(".sparkline").forEach(function (svg) {
        sparkline.sparkline(svg, randNumbers());
    });
    // setInterval(function() {
    //     document.querySelectorAll(".sparkline").forEach(function(svg) {
    //         sparkline.sparkline(svg, randNumbers());
    //     });
    // }, 1000);


    new Swiper('.news-swiper', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.news-swiper-next',
            prevEl: '.news-swiper-prev',
        }
    });
    new Swiper('.news-swiper-two', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.news-swiper-two-next',
            prevEl: '.news-swiper-two-prev',
        }
    });
    new Swiper('.news-swiper-three', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.news-swiper-three-next',
            prevEl: '.news-swiper-three-prev',
        }
    });
    new Swiper('.news-swiper-four', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.news-swiper-four-next',
            prevEl: '.news-swiper-four-prev',
        }
    });
});
