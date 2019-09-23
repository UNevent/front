import React from 'react';
import LandingView from '../../components/views/LandingView'

const LandingScreen = ({ navigation }) => {
  return <LandingView 
    goToQRScanner={() => navigation.navigate('QRScannerScreen')}
    gotToAlbum={() => navigation.navigate('AlbumScreen')}
    gotToTreeListMap={() => navigation.navigate('TreeListMapScreen')}
  />;
}

export default LandingScreen;