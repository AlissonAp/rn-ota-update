import React from 'react';
import {View, Text} from 'react-native';
import CodePush from 'react-native-code-push';

const App = () => {
  return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Hello Code Push alterado</Text>
  </View>;
};

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
