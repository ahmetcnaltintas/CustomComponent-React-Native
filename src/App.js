import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Card from './components/card/index';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card title="Başlık" text="Açıklama" />
      <Card title="Başlık2" text="Açıklama2" />
      <Card title="Başlık3" text="Açıklama3" />
      <Card title="Başlık4" text="Açıklama4" />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});
