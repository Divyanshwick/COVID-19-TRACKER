import React,{useState, useEffect} from 'react';
import {
  MenuItem,
  FormControl,
  Select,Card,CardContent,
} from '@material-ui/core';
import InfoBox from './InfoBox';
import Map from './Map'
import Table from './Table';

import {sortData} from './util';
import LineGraph from './LineGraph';
import {PieGraph, PieGraphToday,PieGraphCustom,PieGraphTotal} from './PieGraph';

import "leaflet/dist/leaflet.css";
import {prettyPrintStat} from './util';
import './App.css';

function App() {
  const [countries,setCountries]=useState([]);
  const [country,setCountry]=useState("worldwide");
  const [countryInfo,setCountryInfo]  = useState({});
  const [casesType,setCasesType] = useState("cases");
  const [tableData,setTableData] = useState([]);
  const [mapCenter,setMapCenter] = useState({lat: 34.80746,lng: -40.4796});
  const [countrySelected,setCountrySelected] = useState({});
  const [mapZoom,setMapZoom] = useState(3);
  const [mapCountries,setMapCountries] = useState([]);
  const [pieData,setPieData] = useState({});
  let [countryList,setCountryList] = useState([]);
  // const [worldData,setWorldData] = useState({});
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data);
      setPieData(data);
    

      
    });
  }, []);
 

  useEffect(() => {
    const getCountriesData = async() => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name : country.country,
            value : country.countryInfo.iso2
          }
        ));
        let sortedData = sortData(data);
        setMapCountries(data);
        setTableData(sortedData);
        setCountries(countries);
      });
    };
    getCountriesData();

   

  },[]);
  
  const onCountryChange = async(event) => {
    const countryCode = event.target.value;

    setCountry(countryCode);

  const url = 
  countryCode === "worldwide"
  ? "https://disease.sh/v3/covid-19/all" 
  : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

  await fetch(url)
  .then(response => response.json())
  .then(data => {
    setCountry(countryCode);
    setCountryInfo(data);
    setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
   
    setCountrySelected(data);
    setMapZoom(4);
  });

  
  
}
console.log(countryInfo);
let cList = [];
useEffect(() =>{
  const fetchCountryData = async() => {
      await fetch('https://disease.sh/v3/covid-19/countries')
      .then((response) => response.json())
      .then((data) => {
           data.map((country) => (
              fetch(`https://disease.sh/v3/covid-19/countries/${country.countryInfo.iso2}`)
              .then((response) => response.json())
              .then((data)=>{
                  cList.push(data.cases);
              })
          ));
          setCountryList(cList);
           console.log(cList);
      })
  }
  fetchCountryData();
},[])
  return (
    <div>
      <div className="app">
        <div className="app_left">
          <div className="app_header">
            <div className="app__heading">
              <img src="https://ak.picdn.net/shutterstock/videos/8145814/thumb/1.jpg" alt="World Logo"></img> 
              &nbsp;&nbsp;&nbsp;<h1>COVID-19 TRACKER</h1>
            </div>
              <FormControl className="app__dropdown">
                <Select className="app__select" variant="outlined" onChange={onCountryChange} value={country}>
                  <MenuItem className="app__menuItem" value="worldwide">WorldWide</MenuItem>
                  
                  {countries.map((country) =>(
                    <MenuItem className="app__menuItem" value={country.value}>{country.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            
            <div className="app_stats">
              <InfoBox isRed active={casesType === "cases"}  onClick={e => setCasesType("cases")} title="Coronavirus Cases" cases={prettyPrintStat(countryInfo.todayCases)} total={prettyPrintStat(countryInfo.cases)}/>
              <InfoBox active={casesType === "recovered"} onClick={e => setCasesType("recovered")} title="Recovered" cases={prettyPrintStat(countryInfo.todayRecovered)} total={prettyPrintStat(countryInfo.recovered)}/>
              <InfoBox isRed active={casesType === "deaths"} onClick={e => setCasesType("deaths")} title="Deaths" cases={prettyPrintStat(countryInfo.todayDeaths)} total={prettyPrintStat(countryInfo.deaths)}/>
            </div>
                    
            
            <Map countries={mapCountries} casesType={casesType} center={mapCenter} zoom={mapZoom} />
          </div>
          <Card className="app_right">
            <CardContent>
              <div className="app_information">
                <h3 className="app_graphTitle">Total Cases For All Countries</h3>
                <Table countries={tableData} />

                  <h3 className="app_graphTitle">WorldWide new {casesType}</h3>  
                <LineGraph className="app_graph" casesType={casesType} />
              </div>
            </CardContent>          
          </Card>
      
      </div>
      <div className="app__main">
        <Card className="app__mainRow">
          <CardContent>
            <div className="app_pieGraph">
              <PieGraph className="app-pie" data={pieData}/>
              <PieGraphCustom className="app-pie" data={countrySelected}/>
              <PieGraphToday className="app-pie" data={pieData}/>
            </div>
          </CardContent>
          <CardContent>
            <div className="app_pieGraph">
              <PieGraphTotal className="app-pie" data={countryList} />
            </div>
          </CardContent>
        
      </Card>
      </div>
    </div>
  );
}

export default App;
