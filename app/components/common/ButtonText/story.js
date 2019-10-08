import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import ButtonText from '.';

const CenteredView = ({ children }) => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{children}</View>;

storiesOf('Commons / ButtonText', module)
  .addDecorator(content => <CenteredView>{content()}</CenteredView>)
  .add('default view', () => <ButtonText icon="arrow-right" name="Hi" />);