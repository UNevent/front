import React from 'react';
import { storiesOf } from '@storybook/react-native';

import UNEventHeader from '.';

const CenteredView = ({ children }) => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{children}</View>;

storiesOf('Common / UNEventHeader', module)
  // .addDecorator(content => <CenteredView>{content()}</CenteredView>)
  .add('default view', () => <UNEventHeader/>)