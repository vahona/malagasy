
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import PhraseTextArea from './PhraseTextArea';

const styles = StyleSheet.create({
  container: {
    color: '#111827',
  }
})

storiesOf('Phrasetextarea ', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('editable', () => {

    function Parent({ children, ...props }) {
      const [state, setState] = useState({ value: '' });

      return <View>{children(state, setState)}</View>;
    }

    return (
      <Parent>
        {(state, setState) => (
          <PhraseTextArea
            multiline={true}
            styles={styles.container}
            editable={true}
            placeholder={'enter here'}
            inputValue={state.value}
            onChange={(text) => setState({ value: text })}
          />
        )}
      </Parent>

    )
  }

  )

  .add('uneditable', () => <PhraseTextArea styles={styles.container} editable={false} placeholder={'roa ambin folo'} inputValue={"roa ambin'ny folo"} />)





