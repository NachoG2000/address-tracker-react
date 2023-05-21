import React, {useState, useEffect} from 'react'
import './App.css' 
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet'
import Menu from './Menu';
import ErrorMenu from './ErrorMenu';

import patternDesktop from './images/pattern-bg-desktop.png'
import patternMobile from './images/pattern-bg-mobile.png'
import locationIconSvg from './images/icon-location.svg'

function App() {

  const [inputAddress, setinputAddress] = useState("")
  const [submitInput, setSubmitInput] = useState(false)
  const [errorMessage, setErrorMessage] = useState("");
  const [APIinfo, setAPIinfo] = useState(
    {
      ipAddress: "8.8.8.8",
      city: "Mountain View",
      region: "California",
      postalCode: "94043",
      timezone: "-07:00",
      isp: "Google LLC",
      lat: "37.40599",
      lng: "-122.078514"
    }
  )
  const [mapKey, setMapKey] = useState(0);
  
  const locationIcon = new Icon({
    iconUrl: locationIconSvg,
    iconSize: [46,56]
   })

  useEffect(() => {
    const fetchIpAddress = async () => {
    try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    
    const ip = data.ip
    const response2 = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_N1zI8j8Btmq8Dlk6GyKzeycdAlxTH&ipAddress=${ip}`);
    const data2 = await response2.json();
   
    setAPIinfo({
    ipAddress: data2.ip,
    city: data2.location.city,
    region: data2.location.region,
    postalCode: data2.location.postalCode,
    timezone: data2.location.timezone,
    isp: data2.isp,
    lat: data2.location.lat,
    lng: data2.location.lng
    });
    setMapKey(prevKey => prevKey + 1);  
   
    } catch (error) {
    console.error(error);
    }
    };
    
    fetchIpAddress();
    }, []);   

  useEffect(() => {
    if (submitInput) {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_N1zI8j8Btmq8Dlk6GyKzeycdAlxTH&ipAddress=${inputAddress}`);
          const data = await response.json();
  
          if (response.ok) {
            setAPIinfo({
              ipAddress: data.ip,
              city: data.location.city,
              region: data.location.region,
              postalCode: data.location.postalCode,
              timezone: data.location.timezone,
              isp: data.isp,
              lat: data.location.lat,
              lng: data.location.lng
            });
            setErrorMessage("");
          } else {
            setErrorMessage("Invalid input address. Please try again.");
          }
        } catch (error) {
          console.error(error);
          setErrorMessage("An error occurred. Please try again later.");
        } finally {
          setSubmitInput(false);
          setMapKey(prevKey => prevKey + 1);
        }
      };
  
      fetchData();
    }
  }, [submitInput, inputAddress]);

  function onChange(event){
    setinputAddress(event.target.value)
  }

  function onSumbit(){
    if (inputAddress.trim() !== "") {
      setSubmitInput(true);
    } else {
      setErrorMessage("Please enter an input address.");
    }
  }

  function clearError(){
    setErrorMessage("")
    setinputAddress("")
  }

  return (
    <main className={`${errorMessage ? "" : "" }`}>
      <Menu 
        inputAddress={inputAddress}
        handleChange={onChange}
        handleSubmit={onSumbit}
        APIinfo={APIinfo}
      />
      {
        errorMessage 
        ?
          <ErrorMenu errorMessage={errorMessage} clearError={clearError}/> 
        :
          ""
      }

      <img src={patternDesktop} alt="pattern" className='w-full h-[40vh] hidden sm:block'/>
      <img src={patternMobile} alt="pattern" className='w-full h-[60vh] sm:hidden'/>

      <MapContainer
        key={mapKey}
        center={[parseFloat(APIinfo.lat), parseFloat(APIinfo.lng)]}
        zoom={13}
        style={{ height: '100vh', width: '100%' }}
        zoomControl={false}
        doubleClickZoom={false}
        closePopupOnClick={false}
        dragging={false}
        zoomSnap={false}
        zoomDelta={false}
        trackResize={false}
        scrollWheelZoom={false}
        touchZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        />

        <Marker position={[parseFloat(APIinfo.lat), parseFloat(APIinfo.lng)]} icon={locationIcon}/>
      </MapContainer>
    </main>
  )
}

export default App



  // useEffect(() => {
  //   const fetchIpAddress = async () => {
  //     try {
  //       const response = await fetch("https://api.ipify.org?format=json");
  //       const data = await response.json();
        
  //       const ip = data.ip
  //       const response2 = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_N1zI8j8Btmq8Dlk6GyKzeycdAlxTH&ipAddress=${data.ip}`);
  //       const data2 = await response.json();

  //       setAPIinfo({
  //         ipAddress: data2.ip,
  //         city: data2.location.city,
  //         region: data2.location.region,
  //         postalCode: data2.location.postalCode,
  //         timezone: data2.location.timezone,
  //         isp: data2.isp,
  //         lat: data2.location.lat,
  //         lng: data2.location.lng
  //       });

  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
    
  //   fetchIpAddress();
  // }, []);