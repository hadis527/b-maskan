
import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";


const LineChart = ({ title, series,height,years,xTitle,yTitle}) => {
    const [chartOptions, setChartOptions] = useState({
        title: {
            text: title
        },
        chart: {
            type: 'line',
            height,
            zoomType : 'xy'
        },
        colors: [ 
            '#dc74d5',
            '#c2d5ed',
            '#e5dbc0',
            ],
        subtitle: {
            text: ''
        },
        yAxis: {
            title: {
                text: yTitle
            }
        },
    
        xAxis: {
            categories: years,
            title: {
                text: xTitle
            }
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
    
        series: series,
        tooltip: {
            useHTML: true,
            borderColor: '#2c3e50',
            formatter: function () {
                return `
                <div style="text-align: right">
                <span>${this.series.name}</span><br/>
                <span>${this.point.y} <span></div>`;
            }
        },
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
       
    useEffect(() => {
        setChartOptions(prevState => ({
            ...prevState,
            series: series
        }))
    }, [series])

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions} />
    )
}

export default LineChart;