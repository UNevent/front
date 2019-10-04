import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import CardHeader from '.';

const CenteredView = ({ children }) => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{children}</View>;

storiesOf('Commons / CardHeader', module)
 // .addDecorator(content => <CenteredView>{content()}</CenteredView>)
  .add('default view', () =>
      <CardHeader  
                  event={"Evento"}
                  place={"lugar"}
                  username={"cuenta que lo creo"}
                  followers={123}
                  />);