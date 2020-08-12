import React from 'react';
import numeral from 'numeral';
import Pie from 'react-chartjs-2';




        // const buildPieChart = (data) => {
        //     let pieData = [];
        //     pieData.push(data.cases);
        //     pieData.push(data.recovered);
        //     pieData.push(data.deaths);
            
        //     return pieData;
        // }

       
        
            // let [data,setData] = useState([]);
          
            

            // useEffect(() => {
             
            //     fetch("https://disease.sh/v3/covid-19/all")
            //     .then(response => response.json())
            //     .then(data => {
            //       const pieData = buildPieChart(data);
            //       setData(pieData);
                 
                 
                  
               
                  
            //     });
            
            //   }, []);
            const options = {
                legend : {
                    display : true
                   
                },
                layout : {
                    padding : {
                        top : 10,
                        right : 0,
                        left : 0,
                        bottom : 0
                    },
                },
                maintainAspectRatio : false,
                
              
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
                     labels : ['TotalCases','TotalRecovered','TotalDeaths'],
                     datasets : [{
                         data : pieData,
                         backgroundColor : ["#ffac41","green","red"]
                     }]
                 }}
                 options={options}
                 
                 />
            </div>
        );
    }



export default PieGraph;
