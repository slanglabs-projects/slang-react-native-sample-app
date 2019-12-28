/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import Slang from 'react-native-slang';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import JSONTree from 'react-native-json-tree';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    Slang.initialize(
      'fill_buddy_id',
      'fill_api_key',
      {
        locale: 'LOCALE_ENGLISH_IN', // Other possible values: LOCALE_HINDI_IN, LOCALE_ENGLISH_US
        position: 'CENTER_BOTTOM', // Other possible values: LEFT_TOP, CENTER_TOP, RIGHT_TOP, CENTER, LEFT_BOTTOM, RIGHT_BOTTOM etc.
      },
      () => {
        console.log('Slang initialized successfully');
      },
    );
    Slang.setIntentActionHandler(intent => {
      this.setState({data: intent});
    });
  }
  render() {
    return (
      <>
        <View>
          <Text>Hello world</Text>
          <JSONTree data={this.state.data} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
