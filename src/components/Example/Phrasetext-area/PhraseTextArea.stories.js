
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import PhraseTextArea from './PhraseTextArea';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',

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
          <PhraseTextArea styles={styles.container}
            editable={true}
            placeholder={'roa ambin folo'}
            inputValue={state.value}
            onChange={(text) => setState({ value: text })}
          />
        )}
      </Parent>

    )
  }

  )

  .add('uneditable', () => <PhraseTextArea styles={styles.container} editable={false} placeholder={'roa ambin folo'} inputValue={'35 words phrases'} />)





