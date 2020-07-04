import React from "react";
import GoogleMapReact from "google-map-react";
import { Segment, Icon } from "semantic-ui-react";

const Marker = () => <Icon name='marker' size='big' color='red' />;

const EventDetailedMap = ({ lat, lng }) => {
  const zoom = 14;
  return (
    <Segment attached='buttom' style={{padding: 0}}>
      <div style={{ height: "300px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCiH9rhPKUfYL6LlcbTXKvoyuDF1kOt9-0" }}
          defaultCenter={{ lat, lng }}
          defaultZoom={zoom}
        >
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
};

export default EventDetailedMap;
