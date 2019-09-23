import React from 'react';
import { Image, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import styles from './storyStyles'
import Images from '../../../assets/Images';
import CenteredView from '../../storybookDecorators/CenterView'

storiesOf('Commons / Image', module)
  .addDecorator(content => <CenteredView style={styles.container}>{content()}</CenteredView>)
  .add('default view', () => <Image source={Images.pino} />);