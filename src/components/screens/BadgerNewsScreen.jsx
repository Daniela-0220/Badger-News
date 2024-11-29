import { Text, View, ScrollView } from "react-native";
import BadgerNewsItemCard from '../BadgerNewsItemCard';
import { useEffect, useState, useContext } from "react";
import { UserPreferencesContext } from "./PreferencesContext"

function BadgerNewsScreen(props) {

    const [articles, setArticles] = useState([]) 
    const { preferences } = useContext(UserPreferencesContext)

    useEffect(() => {
      fetch("https://cs571.org/api/s24/hw8/articles", {
          headers: {
              "X-CS571-ID": 'bid_f7d7cde3983b9d53d64c5b90313792b9e019bc8d6c685390803c2f5c94b89fcc'
          }
      })
      .then(res => res.json())
      .then(data => {
            const filteredArticles = data.filter(article => {
                return article.tags.some(tag => preferences[tag]);
            });
          setArticles(filteredArticles)
      })
    }, [preferences])

    return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {articles.length === 0 ? (
            <Text style={{fontWeight: 'bold', fontSize: 30}}>There are no articles that fit your preferences!</Text>
        ) : (
            <ScrollView>
                {articles.map(article => (
                    <BadgerNewsItemCard
                        key={article.id}
                        {...article}
                    />
                ))}
            </ScrollView>
        )}
        
    </View>
}

export default BadgerNewsScreen;