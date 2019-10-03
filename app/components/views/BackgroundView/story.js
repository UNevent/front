import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from "react-native";

import BackgroundView from'.';

const CenteredView = ({ children }) => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{children}</View>;


storiesOf('BackgroundView', module)
  //.addDecorator(content => <CenteredView>{content()}</CenteredView>)
  .add('default view', () => <BackgroundView/>);
