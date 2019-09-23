import { registerRootComponent } from 'expo';
import { getStorybookUI, configure } from '@storybook/react-native';

configure(() => {
  require('../app/components/common/stories');
  require('../app/components/views/stories');
  // require('../app/components/common/stories');
}, module);

const StorybookUIRoot = getStorybookUI({});

registerRootComponent(StorybookUIRoot)
