import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () =>{
    const defaultProps = {
      center: {
        lat: 10.99835602,
        lng: 77.01502627
      },
      zoom: 11
    };
  
    return (
      // Important! Always set the container height explicitly
     <div className='bg-white mt-10 rounded-xl'>
         <div className='p-10 ' style={{ borderRadius:'10px', height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
     </div>
    );
  }

export default Map;