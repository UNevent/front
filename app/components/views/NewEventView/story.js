import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from "react-native";

import NewEventView from'.';

const CenteredView = ({ children }) => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{children}</View>;


storiesOf('Views/NewEventView', module)
  //.addDecorator(content => <CenteredView>{content()}</CenteredView>)
  .add('default view', () => <NewEventView/>);
