import React, { Component } from 'react';
import api from '../services/api';

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: "Home"
  };

  state = {
    docs: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get("/products");

    const { docs } = response.data;

    this.setState({ docs });
  };

  renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>{item.title} </Text>
      <Text style={styles.productDescription}>{item.description} </Text>

      <TouchableOpacity style={styles.productButton} onPress={() => {}}>
        <Text style={styles.productButtonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  )

  render() {
    return(
      <View style={styles.container}>
        <FlatList 
          contentContainerStyle={styles.list}
          data={this.state.docs} 
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}


// ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA"
  },

  list: {
    padding: 20
  },

  productContainer: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20
  },

  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000"
  },

  productDescription: {
    fontSize: 16,
    color: "#999",
    marginTop: 5,
    lineHeight: 24
  },

  productButton: {
    height: 40,
    width: 130,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "#6b22d8",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },

  productButtonText: {
    fontSize: 16,
    color: "#6b22d8",
    fontWeight: "bold",
    textTransform: "uppercase"
  }
});