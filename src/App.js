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
  const [mapZoom,setMapZoom] = useState(3);
  const [mapCountries,setMapCountries] = useState([]);
  
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data);
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
    setMapZoom(4);
  });

  
  
}
console.log(countryInfo);
  return (
    <div className="app">
      <div className="app_left">
        <div className="app_header">
          <h1>COVID-19 Stats</h1>
            <FormControl className="app__dropdown">
              <Select variant="outlined" onChange={onCountryChange} value={country}>
                <MenuItem value="worldwide">WorldWide</MenuItem>
                
                {countries.map((country) =>(
                  <MenuItem value={country.value}>{country.name}</MenuItem>
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
              <h3>Live cases by country</h3>
              <Table countries={tableData} />

                <h3 className="app_graphTitle">WorldWide new {casesType}</h3>  
              <LineGraph className="app_graph" casesType={casesType} />
            </div>
          </CardContent>          
        </Card>
    
    </div>
  );
}

export default App;