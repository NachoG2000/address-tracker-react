import React from 'react'
import './App.css' 
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-shadow.png'

import patternDesktop from './images/pattern-bg-desktop.png'
import patternMobile from './images/pattern-bg-mobile.png'
import Menu from './Menu';

function App() {
 return (
  <main className=' h-[100vh]'>
    <Menu />
    <img src={patternDesktop} alt="pattern" className='w-full h-[40vh] hidden sm:block'/>
    <img src={patternMobile} alt="pattern" className='w-full h-[40vh] sm:hidden'/>

    <MapContainer 
      center={[51.505, -0.09]} 
      zoom={13} 
      style={{ height: '60vh', width: '100%'}} 
      zoomControl={false}
      doubleClickZoom= {false}
      closePopupOnClick= {false} 
      dragging= {false}
      zoomSnap= {false} 
      zoomDelta= {false} 
      trackResize= {false}
      scrollWheelZoom= {false}
      touchZoom={false}
      >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={[51.505, -0.09]} />
    </MapContainer>
  </main>
 )
}

export default App

// function App() {
//   return (
//     <div className="relative">
//       <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px' }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
//         />
//       </MapContainer>

//       <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full pointer-events-none">
//         {/* Content on top of the map */}
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h1 className="text-xl font-bold">Hello, World!</h1>
//           <p>Some additional text here...</p>
//         </div>
//       </div>
//     </div>
//   );
// }