import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import Button from '.';

const CenteredView = ({ children }) => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{children}</View>;

storiesOf('Commons / Button', module)
  .addDecorator(content => <CenteredView>{content()}</CenteredView>)
  .add('default view', () => <Button name="Hi" style={{backgroundColor : 'grey'}}/>);