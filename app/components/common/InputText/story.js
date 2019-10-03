import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import InputText from '.';

const CenteredView = ({ children }) => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{children}</View>;

storiesOf('Commons / InputText', module)
 // .addDecorator(content => <CenteredView>{content()}</CenteredView>)
  .add('default view', () => <InputText placeholder="Nombre:"  type="username" />);