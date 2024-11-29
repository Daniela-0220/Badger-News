import { Text, View, Switch, StyleSheet, ScrollView } from "react-native";
import { useState, useContext, useEffect } from 'react';
import { UserPreferencesContext } from "./PreferencesContext"

function BadgerPreferencesScreen(props) {

    const {preferences, updatePreference} = useContext(UserPreferencesContext)

    useEffect(() => {
        fetch("https://cs571.org/api/s24/hw8/articles", {
            headers: {
                "X-CS571-ID": 'bid_f7d7cde3983b9d53d64c5b90313792b9e019bc8d6c685390803c2f5c94b89fcc'
            }
        })
        .then(res => res.json())
        .then(data => {
            const uniqueTags = new Set()
            data.forEach((article) => {
                article.tags.forEach((tag) => uniqueTags.add(tag));
            })
            uniqueTags.forEach(tag => {
                updatePreference(tag, true)
            })
          })
    }, []);

    return <ScrollView>
        {
            Object.entries(preferences).map(([tag, value]) => {
                return (
                <View key={tag} style={styles.card}>
                    <Text style={styles.paragraph}>Currently{!value && " NOT"} showing {<Text style={{ fontWeight: 'bold' }}> {tag} </Text>} articles.</Text>
                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={value ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={(newValue) => updatePreference(tag, newValue)}
                        value={value}
                    />
                </View>
            )})
        }
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        padding: 16,
        elevation: 5,
        borderRadius: 15,
        backgroundColor: '#e0e0e0',
        width: 390, 
        height: 110,
        marginBottom: 16,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    paragraph: {
        margin: 24,
        marginBottom: 10,
        fontSize: 17,
        textAlign: 'center',
    }
  });

export default BadgerPreferencesScreen;