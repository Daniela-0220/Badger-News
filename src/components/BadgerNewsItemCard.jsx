import { Pressable, Text, View, Image, Button, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

function BadgerNewsItemCard(props) {

  const navigation = useNavigation()

    return <Pressable onPress={() => navigation.push('SpecificNews', props)}>
        <View style={styles.card}>
            <Image style={styles.logo} source={{uri: `https://raw.githubusercontent.com/CS571-S24/hw8-api-static-content/main/${props.img}`}}></Image>
            <Text style={styles.paragraph}>{props.title}</Text>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    paragraph: {
      margin: 24,
      marginTop: 0,
      fontSize: 20,
      textAlign: 'center',
    },
    logo: {
      height: 168,
      width: 228,
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        padding: 16,
        elevation: 5,
        borderRadius: 15,
        backgroundColor: '#e0e0e0',
        width: 350, 
        height: 330,
        marginBottom: 16,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    }
  });

export default BadgerNewsItemCard;