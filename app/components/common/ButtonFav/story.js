import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import ButtonFav from '.';

const CenteredView = ({ children }) => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{children}</View>;

storiesOf('Commons / ButtonFav', module)
  .addDecorator(content => <CenteredView>{content()}</CenteredView>)
  .add('default view', () => <ButtonFav />);