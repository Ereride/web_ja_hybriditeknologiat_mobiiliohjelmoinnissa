import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

export default function Map(props) {
  const [marker, setMarker] = useState([]);

  const showMarker = (e) => {
    const coords = e.nativeEvent.coordinate;
    setMarker([...marker, coords]);
  };

  return (
    <MapView
      style={styles.map}
      region={props.location}
      mapType={props.mapType}
      onLongPress={showMarker}
    >
      {marker.map((markerCoords, index) => (
        <Marker
          key={index}
          title={`Marker ${index + 1}`}
          coordinate={{ latitude: markerCoords.latitude, longitude: markerCoords.longitude }}
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
  },
});
