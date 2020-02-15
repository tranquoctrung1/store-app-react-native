import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CategoryListItem from '../components/categoryListItem';


class Categories extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      categories: [
        {id: 1, name: "Kem Đánh Răng"},
        {id: 2, name: "Tăm Xỉa Răng"},
        {id: 3, name: "Bàn Đánh Răng"},
        {id: 4, name: "Chỉ Xỉa Răng"},
        {id: 5, name: "Nước Xúc Răng"},
      ]
    }

  }
  render() 
  {
    const {navigation} = this.props;
    const {categories} = this.state;
    return (
      <View style={styles.container}>
        {/* <ScrollView style={styles.containerScrollView}>
          {
            categories.map(category => <CategoryListItem  key={category.id} category={category} />)
          }
        </ScrollView> */}
        {/* render list item use FlatList instead of ScrollView */}
        <FlatList data={categories} renderItem={({ item }) => 
        <CategoryListItem  category={item} onPress={() => navigation.navigate('Category', {
          name: item.name
        })}/>} keyExtractor={(item) => `${item.id}`}  
        style={styles.containerScrollView} 
        contentContainerStyle={{backgroundColor: '#DDD', padding: 20}} />
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
  }
});

export default Categories;
