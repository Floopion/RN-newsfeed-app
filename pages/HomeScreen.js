// Import statements
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Linking,
  Platform,
  Button,
  Image
} from 'react-native';
import axios from 'axios';
import Loading from '../assets/settings.gif'

export default function HomeScreen() {
  // Sets states for images, content and data
  const [data, setData] = useState([]);
  const [content, setContent] = useState(<Text style={styles.load} >Loading Top Stories %0</Text>);
  const [loading, setloading] = useState(<Image style={styles.image} />);
  
  // use effect to run on update and mount
  useEffect(() => {
    getNews();
  } ,[]);
  
  //get news function grabs all the data from the api, slices the first 100 entries and then uses tose ids to get the stories
  function getNews(){
    setloading(
      <Image source={Loading} style={styles.image} />
    )
    axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
    .then(async function (response) {
      let all = []
      all = response.data.slice(0,100)
      for(let i in all ){
        let x = await  axios.get(`https://hacker-news.firebaseio.com/v0/item/${all[i]}.json?print=pretty`)
        data.push({ id: i, title: x.data.title, score: x.data.score, url: x.data.url})
        setContent(
            <Text style={styles.load}>Loading Top Stories %{i}</Text>
          )
      }
    })
     //catch any errors
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      setloading(null) 
      setCards();
    });
  }
  
   //function maps the data to the flat list
  function setCards(){
    setContent(
        <FlatList
          data={data}
          renderItem={({ item }) =>
            <View style={styles.item}>
              <Button
                onPress={() => {
                  if(Platform.OS == 'web'){
                    window.open(item.url, '_blank')
                  } else {
                    Linking.openURL(item.url)
                  }              
                }} 
                title={item.title + " Score: " + item.score}
                color="#406458"
                raised = {true}
              />    
            </View>     
          }
          keyExtractor={item => item.id}
        />
    );
  }

  return(<View style={styles.container}>
        {loading}
        {content}
  </View>);
}

// styles for the hook
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image:{
    height: 40,
    width:40
  },
  load:{
    fontSize: 22,
    color: '#f7f7f7',
    marginTop:8
  }
});
