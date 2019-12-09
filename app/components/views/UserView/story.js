import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from "react-native";

import UserView from'.';

const CenteredView = ({ children }) => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{children}</View>;


storiesOf('Views/UserView', module)
  .add('default view', () => <UserView/>);
