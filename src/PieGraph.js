import React from 'react';
import numeral from 'numeral';
import colors from './colors';
import Pie from 'react-chartjs-2';




        // const buildPieChart = (data) => {
        //     let pieData = [];
        //     pieData.push(data.cases);
        //     pieData.push(data.recovered);
        //     pieData.push(data.deaths);
            
        //     return pieData;
        // }

       
        
            // // let [data,setData] = useState([]);
          
            

            // // useEffect(() => {
             
            // //     fetch("https://disease.sh/v3/covid-19/all")
            // //     .then(response => response.json())
            // //     .then(data => {
            // //       const pieData = buildPieChart(data);
            // //       setData(pieData);
                 
                 
                  
               
                  
            // //     });
            
            // //   }, []);
            // const title_1={
            //     title: {
            //         display: true,
            //         text: 'WorldWide-Total-Stats',
            //         fontSize : 20
            //     }
            // }
            // const title_2={
            //     title: {
            //         display: true,
            //         text: 'WorldWide-Total-Stats',
            //         fontSize : 20
            //     }
            // }
            // const title_3={
            //     title: {
            //         display: true,
            //         text: 'WorldWide-Today-Stats',
            //         fontSize : 20
            //     }
            // }
            
            const options = {
               
                legend : {
                    display : true,
                    fullWidth : true,
                    labels : {
                        boxWidth : 15,

                    }
                   
                },
                layout : {
                    padding : {
                        top : 10,
                        right : 0,
                        left : 0,
                        bottom : 10
                    },
                },
                maintainAspectRatio : true,
                
              
            }
            function PieGraph({data}) {
                let pieData = [];
                pieData.push(data.cases);
                pieData.push(data.recovered);
                pieData.push(data.deaths);
              

        return(
            <div>
                <Pie 
                 data={{
                     labels : ['Total-Cases','Total-Recovered','Total-Deaths'],
                     datasets : [{
                         data : pieData,
                         backgroundColor : ["#ffac41","green","red"],
                         borderWidth : 1.5,
                         borderColor : "#66fcf1"
                     }]
                 }}
                 height="300px"
                 options={{  title: {
                    display: true,
                    text: 'WorldWide-Stats-Total',
                    fontSize : 20
                    },options}}
                 
                 />
            </div>
        );
    }

    function PieGraphToday({data}) {
        let todayPieData = [];
        todayPieData.push(data.todayCases);
        todayPieData.push(data.todayRecovered);
        todayPieData.push(data.todayDeaths);
        

        return (
            <div>
                <Pie
                 data={{
                     labels : ["Cases-Today","Recovered-Today","Deaths-Today"],
                     datasets : [{
                        data : todayPieData,
                        backgroundColor : ["#ffac41","green","red"],
                        borderWidth : 1.5,
                        borderColor : "#66fcf1"
                     }]
                 }}
                 height="300px"
                 options={{  
                    title: {
                        display: true,
                        text: 'WorldWide-Stats-Today',
                        fontSize : 20
                    },options}}
                 />
            </div>
        );

    }

    function PieGraphCustom({data}) {
        let countryData = [];
        countryData.push(data.cases);
        countryData.push(data.recovered);
        countryData.push(data.deaths);
        return(
            
            <div>
            
            <Pie
             data={{
                 labels : ["Total-Cases","Total-Recovered","Total-Deaths"],
                 datasets : [{
                    data : countryData,
                    backgroundColor : ["#ffac41","green","red"],
                    borderWidth : 1.5,
                    borderColor : "#66fcf1"
                 }]
             }}
             height="300px"
             options={{ 
                title: {
                    display: true,
                    text: `${data.country}-Stats-Total`,
                    fontSize : 20
                },options}}
             />
             
        </div>
        );
    }
    
    function PieGraphTotal({data}) {
        let countryCases = [];
        countryCases.push(data);
        console.log(countryCases);

        return(
            <div>
                 <Pie
             data={{
                    datasets : [{
                    backgroundColor : colors,
                    data : countryCases,
                    borderWidth : 1.5,
                    borderColor : "#66fcf1"
                 }]
             }}
             options={{ 
                title: {
                    display: true,
                    text: "Stats-Total",
                    fontSize : 20
                },options}}
             />
            </div>
        );
    }



export {PieGraph,PieGraphToday,PieGraphCustom,PieGraphTotal};
