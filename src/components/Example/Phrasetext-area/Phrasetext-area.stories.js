
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Phrasetextarea from './Phrasetext-area';


storiesOf('Phrasetest', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Input', () => <Phrasetextarea text= {'Input'}/>)
  // .add('test2', () => <Phrasetextarea text= {'test2'}/>)
 
