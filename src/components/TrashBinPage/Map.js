import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "344px",
  height: "425px",
  borderRadius: "10px",
};

const center = {
  lat: 37.563,
  lng: 126.947,
};

const OPTIONS = {
  minZoom: 14,
  zoom: 16,
  maxZoom: 20,
};

const markers = [
  {
    position: { lat: 37.560182, lng: 126.946376 },
    title: "잔디광장 24번 부스 옆",
  },
  {
    position: { lat: 37.562185, lng: 126.945508 },
    title: "학생문화관 1층 출입구 우측",
  },
  {
    position: { lat: 37.562425, lng: 126.94587 },
    title: "학생문화관 숲 중간 통로 옆",
  },
  {
    position: { lat: 37.562277, lng: 126.945974 },
    title: "학생문화관 - ECC 연결 보도 안쪽",
  },
  {
    position: { lat: 37.562021, lng: 126.944924 },
    title: "생활환경관 부스 끝 모서리 1",
  },
  {
    position: { lat: 37.561976, lng: 126.944983 },
    title: "생활환경관 부스 끝 모서리 2",
  },
  {
    position: { lat: 37.563407, lng: 126.947353 },
    title: "포스코관 - 진선미관 사이",
  },
  {
    position: { lat: 37.561765, lng: 126.945371 },
    title: "대강당 19번 부스 옆",
  },
  {
    position: { lat: 37.564713, lng: 126.946664 },
    title: "교육관 2번 부스 옆",
  },
];

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={OPTIONS}
    >
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} title={marker.title} />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
