import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView,View } from 'react-native';
import CategoryListItem from './components/categoryListItem';


class App extends Component {
  render() 
  {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.containerScrollView}>
          <CategoryListItem  title="Kem Đánh Răng"/>
          <CategoryListItem  title="Tăm Xỉa Răng"/>
          <CategoryListItem  title="Bàn Đánh Răng"/>
          <CategoryListItem  title="Chỉ Xỉa Răng"/>
          <CategoryListItem  title="Nước Xúc Răng"/>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerScrollView: {
    width: '100%',
    padding: 20
  }
});

export default App;
