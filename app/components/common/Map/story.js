import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Map from '.';

const CenteredView = ({ children }) => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{children}</View>;

const region = {
	latitude: 37.78825,
	longitude: -122.4324,
	latitudeDelta: 0.0922,
	longitudeDelta: 0.0421
};

const markers = [
	{
		title: "marcador 1",
		description: "Mock marker",
		coordinates: {
			latitude: 37.78825,
			longitude: -122.4324
		}
	},
	{
		title: "marcador 1",
		description: "Mock marker",
		coordinates: {
			latitude: 37.78785,
			longitude: -122.4890
		}
	},
	{
		title: "marcador 1",
		description: "Mock marker",
		coordinates: {
			latitude: 37.78989,
			longitude: -122.4180
		}
	},
	{
		title: "marcador 1",
		description: "Mock marker",
		coordinates: {
			latitude: 37.781633,
			longitude: -122.4908
		}
	},
];

storiesOf('Common / Map', module)
  // .addDecorator(content => <CenteredView>{content()}</CenteredView>)
  .add('default view', () => <Map
  								reg={region} 
  								marks={markers} 
  								onRegionChangeCB={reg => console.log("Region Changed To", reg)} 
  								onMapReadyCB={() => console.log("MAP READY")} 
  								onPressCB={i => console.log("Marker pressed and Returned: ", i.nativeEvent.coordinate)}/>)

  .add('empty markers', () => <Map
  								reg={region} 
  								marks={[]} 
  								onRegionChangeCB={reg => console.log("Region Changed To", reg)} 
  								onMapReadyCB={() => console.log("MAP READY")} 
  								onPressCB={i => console.log("Marker pressed and Returned: ", i.nativeEvent.coordinate)}/>);