import React from "react";
import MapView from "react-native-maps";
import { View, Text, Image } from "react-native";
import styles from './styles';
import mapStyle from './mapStyle';

import Images from '../../../assets/Images';

const Map = ({reg, marks, onRegionChangeCB, onMapReadyCB, onPressCB}) => {
	

	const renderMarkers = 
		marks.map((marker, index) => (
			<MapView.Marker 
				key={index}
				coordinate={marker.coordinates}
				title={marker.title}
				description={marker.description}
				onPress= {onPressCB}
			>

			</MapView.Marker>
		))

	return(
		<MapView 
			style={styles.mapView} 
			initialRegion={reg} 
			onRegionChange={onRegionChangeCB}
			onMapReady={onMapReadyCB}
			customMapStyle={mapStyle}
			provider={MapView.PROVIDER_GOOGLE}>
			
			{renderMarkers}

		</MapView>
	);
}

export default Map;