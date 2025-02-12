import React from 'react';
import {Text, View} from 'react-native';
import Card from './src/components/card/Card';

function App(): React.JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        marginTop: 64,
        paddingLeft: 16,
        paddingRight: 16,
      }}>
      <Card contentStyle={{padding: 16}}>
        <Text>Hello</Text>
      </Card>
    </View>
  );
}

export default App;
