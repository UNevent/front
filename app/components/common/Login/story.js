import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from "react-native";

import LoginView from'.';

const CenteredView = ({ children }) => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{children}</View>;


storiesOf('Commons/Login', module)
  //.addDecorator(content => <CenteredView>{content()}</CenteredView>)
  .add('default view', () => <LoginView/>);
