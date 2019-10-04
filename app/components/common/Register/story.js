import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from "react-native";

import RegisterView from'.';

const CenteredView = ({ children }) => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{children}</View>;


storiesOf('Commons/Register', module)
  //.addDecorator(content => <CenteredView>{content()}</CenteredView>)
  .add('default view', () => <RegisterView/>);
