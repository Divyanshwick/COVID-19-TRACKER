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
            let Rcolors = [
                "#000000","#000033","000080",	 
                "#00008B","#00009C","#0000CD",
                "#0000EE","#0000FF","#003300",	 
                "#003EFF","#003F87","#004F00",	 
                "#00611C","#006400","#006633",	 
                "#00688B","#006B54","#007FFF",	 
                "#008000","#008080","#00868B",	 
                "#008B00","#008B45","#008B8B",	 
                "#009900","#0099CC","#009ACD",	 
                "#00AF33","#00B2EE","#00BFFF",	 
                "#00C5CD","#00C78C","#00C957",	 
                "#00CD00","#00CD66","#00CDCD",	 
                "#00CED1","#00E5EE","#00EE00",	 
                "#00EE76","#00EEEE","#00F5FF",	 
                "#00FA9A","#00FF00","#00FF33",	 
                "#00FF66","#00FF7F","#00FFAA",	 
                "#00FFCC","#00FFFF","#00FFFF",	 
                "#0147FA","#0198E1","#01C5BB",	 
                "#0276FD","#030303","#03A89E",	 
                "#050505","#05B8CC","#05E9FF",	 
                "#05EDFF","#068481","#080808",	 
                "#0A0A0A","#0AC92B","#0BB5FF",	 
                "#0D0D0D","#0D4F8B","#0E8C3A",	 
                "#0EBFE9","#0F0F0F","#0FDDAF",	 
                "#104E8B","#108070","#120A8F",	 
                 "#121212","#138F6A","#141414",	 
                "#1464F4","#162252","#171717",	 
                "#174038","#1874CD","#191970",	 
                "#1A1A1A","#1B3F8B","#1B6453",	 
                "#1C1C1C","#1C86EE","#1D7CF2",	 
                "#1DA237","#1E90FF","#1F1F1F",	 
                "#20B2AA","#20BF9F","#212121",	 
                "#213D30","#215E21","#218868",	 
                "#22316C","#228B22","#23238E",	 
                "#236B8E","#238E68","#242424",	 
                "#24D330","#262626","#26466D",	 
                "#27408B","#283A90","#284942",	 
                "#28AE7B","#292421","#292929",	 
                "#2A8E82","#2B2B2B","#2B4F81",	 
                "#2C5197","#2C5D3F","#2E0854",	 
                "#2E2E2E","#2E37FE","#2E473B",	 
                "#2E5090","#2E6444","#2E8B57",	 
                "#2F2F4F","#2F4F2F","#2F4F4F",	 
                "#2F4F4F","#2FAA96","#302B54",	 
                "#303030","#3063A5","#308014",	 
                "#31B94D","#3232CC","#3232CD",	 
                "#324F17","#325C74","#327556",	 
                "#329555","#3299CC","#32CC99",	 
                "#32CD32","#32CD99","#330000",	 
                "#3300FF","#333333","#3333FF",	 
                "#337147","#33A1C9","#33A1DE",	 
                "#33FF33","#344152","#34925E",	 
                "#353F3E","#35586C","#3579DC",	 
                "#362819","#363636","#36648B",	 
                "#36DBCA","#37BC61","#37FDFC",	 
                "#380474","#383838","#385E0F",	 
                "#388E8E","#38B0DE","#395D33",	 
                "#397D02","#39B7CD","#3A3A38",	 
                "#3A5894","#3A5FCD","#3A6629",	 
                "#3A66A7","#3B3178","#3B3B3B",	 
                "#3B4990","#3B5323","#3B5E2B",	 
                "#3B6AA0","#3B8471","#3CB371",	 
                "#3D3D3D","#3D5229","#3D59AB",	 
                "#3D5B43","#3D8B37","#3D9140",	 
                "#3E6B4F","#3E766D","#3E766D",	 
                "#3E7A5E","#3EA055","#3F602B",	 
                "#3F6826","#3F9E4D","#404040",	 
                "#40664D","#40E0D0","#414F12",	 
                "#4169E1","#422C2F","#424242",	 
                "#42426F","#42526C","#426352",
                "#435D36","#436EEE","#4372AA"];	
                let Numbers = [
                    1000,1500,9080,	 
                    9100,10000,5120,
                    200,8270,9082,	 
                    5324,1234,9080,	 
                    2345,5678,3456,	 
                    4567,5678,6789,	 
                    7890,8901,9012,	 
                    1909,9456,1233,	 
                    1234,5426,6262,	 
                    9083,8475,7468,	 
                    2314,231,4123,	 
                    3214,1111,2222,	 
                    33333,4444,5555,	 
                    6666,7777,8888,	 
                    9999,1200,1300,	 
                    1400,1500,3300,	 
                    4400,5500,6600,	 
                    9081,7700,8800,	 
                    1029,8889,9019,	 
                    1000,1500,9080,	 
                    9100,10000,5120,
                    200,8270,9082,	 
                    5324,1234,9080,	 
                    2345,5678,3456,	 
                    4567,5678,6789,	 
                    7890,8901,9012,	 
                    1909,9456,1233,	 
                    1234,5426,6262,	 
                    9083,8475,7468,	 
                    2314,231,4123,	 
                    3214,1111,2222,	 
                    33333,4444,5555,	 
                    6666,7777,8888,	 
                    9999,1200,1300,	 
                    1400,1500,3300,	 
                    4400,5500,6600,	 
                    9081,7700,8800,	 
                    1029,8889,9019,	
                    1000,1500,9080,	 
                    9100,10000,5120,
                    200,8270,9082,	 
                    5324,1234,9080,	 
                    2345,5678,3456,	 
                    4567,5678,6789,	 
                    7890,8901,9012,	 
                    1909,9456,1233,	 
                    1234,5426,6262,	 
                    9083,8475,7468,	 
                    2314,231,4123,	 
                    3214,1111,2222,	 
                    33333,4444,5555,	 
                    6666,7777,8888,	 
                    9999,1200,1300,	 
                    1400,1500,3300,	 
                    4400,5500,6600,	 
                    9081,7700,8800,	 
                    1029,8889,9019,	
                    1000,1500,9080,	 
                    9100,10000,5120,
                    200,8270,9082,	 
                    5324,1234,9080,	 
                    2345,5678,3456,	 
                    4567,5678,6789,	 
                    7890,8901,9012,	 
                    1909,9456,1233,	 
                    1234,5426,6262,	 
                    9083,8475,7468,	 
                    2314,231,4123,	 
                    3214,1111,2222,	 
                    33333,4444,5555,	 
                    6666,7777,8888];	 
                   
                  


            
            const Boptions = {
               
                legend : {
                    display : false,
                    
                   
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
            const options = {
               
                legend : {
                    display : true,
                    fullWidth : true,
                    labels : {
                        boxWidth : 5,

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
                        backgroundColor :["#ffac41","green","red"],
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
                    backgroundColor : Rcolors,
                    data : Numbers,
                    borderWidth : 1.5,
                    borderColor : "#66fcf1"
                 }]
             }}
             height="1000px"
             options={{ 
                title: {
                    display: true,
                    text: "Stats-Total",
                    fontSize : 20
                },Boptions}}
             />
            </div>
        );
    }



export {PieGraph,PieGraphToday,PieGraphCustom,PieGraphTotal};
