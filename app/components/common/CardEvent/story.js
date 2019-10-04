import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import CardEvent from '.';

const CenteredView = ({ children }) => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{children}</View>;

storiesOf('Commons / CardEvent', module)
 // .addDecorator(content => <CenteredView>{content()}</CenteredView>)
  .add('default view', () => 
      <CardEvent  poster={'https://www.las2orillas.co/wp-content/uploads/2017/04/UNal-1-780x514.jpg'}
                  event={"Evento"}
                  place={"lugar"}
                  username={"cuenta que lo creo"}
                  followers={123}
                  />);