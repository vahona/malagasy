import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Mycomponent from './Phrasetest';


storiesOf('Mycomponent', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('test1', () => <Mycomponent label= {'test1'}/>)
  .add('test2', () => <Mycomponent label= {'test2'} />)
  