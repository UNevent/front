import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import CheckBoxList from '.';

const CenteredView = ({ children }) => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{children}</View>;

storiesOf('Commons / CheckBoxList', module)
 // .addDecorator(content => <CenteredView>{content()}</CenteredView>)
  .add('default view', () =>
      <CheckBoxList  
                  data={[{id:1, name: "nombre1"},{id:2, name: "nombre2"}]}
                  title={"titulo"}
                  />);