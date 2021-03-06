import React,{useState,useEffect} from 'react';

import { Chart,Line } from 'react-chartjs-2';
import numeral from "numeral";

Chart.defaults.global.defaultFontColor = "#66fcf1";
// Chart.defaults.global.point.radius = 3;
const options = {
    legend : {
        display : false
       
    },
    layout : {
        padding : {
            top : 10,
            right : 0,
            left : 0,
            bottom : 0
        },
    },
    elements : {
        point : {
            radius : 0,
        },
     },
     maintainAspectRatio : true,
     tooltips : {
        mode : "index",
        intersect : false,
        callbacks : {
            label : function (tooltipItem,data) {
                return numeral(tooltipItem.value).format("+0,0");
            },
        },

     },
     scales : {
         xAxes : [
             {
                 type : "time",
                 time : {
                     parser : "MM/DD/YY",
                     tooltipFormat : "ll"
                 },
             },
        ],
        yAxes : [
            {
                gridLines : {
                    dislplay : false,
                },
                ticks : {
                    callback : function (value, index, values) {
                        return numeral(value).format("0a");
                    },
                },
            },

        ],
     },

}

const buildChartData = (data,casesType = "cases") => {
    let chartData = [];
    let lastDataPoint;
    for(let date in data.cases){
        if(lastDataPoint){
            let newDataPoint = {
                x : date,
                y : data[casesType][date] - lastDataPoint,
            };
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];

    }

    return chartData;
};


function LineGraph({casesType, ...props}) {
    const [data,setData] = useState({});
    
    
   

    useEffect(() => {
        const fetchData = async () => {
         await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
            .then((response) => {
               return response.json();
            } )
            .then(data => {
                 
                 
                const chartData = buildChartData(data,casesType);
                
                setData(chartData);
                console.log(chartData);
            });
        };

        fetchData();
        },[casesType]);

      


    return (
        <div className={props.className}>
           
                {data?.length > 0 && (
                 <Line 
                 
                 data={{
                     
                     datasets : [
                         {
                         backgroundColor : "rgba(204,16,52,0.5)",
                         borderColor : "#cc1034",
                         
                         data : data,
                     },
                    ],
                   
                 }}
                 options={options}
                 
             /> 
            )}
            
        </div>
    );
}


export default LineGraph;
