import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import axios from 'axios';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const NewsScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchdata1 = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchdata1();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Todays News</Text>
      {data.length ? (
        <View style={styles.dataContainer}>
          {data.map(item => (
            <View key={item.id} style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemBody}>{item.body}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text>No data available</Text>
      )}
    </ScrollView>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: responsiveFontSize(4),
    color: 'red',
    marginBottom: 20,
  },
  dataContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  itemContainer: {
    marginBottom:15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  itemTitle: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: 'green',
  },
  itemBody: {
    fontSize: responsiveFontSize(1.7),
    color: '#333',
    marginTop: 5,
  },
});
