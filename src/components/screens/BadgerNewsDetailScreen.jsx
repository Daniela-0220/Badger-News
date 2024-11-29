import { useEffect, useState, useRef } from "react";
import { Text, View, ScrollView, Image, Animated, Pressable, Linking } from "react-native";

function BadgerNewsDetailScreen(props) {

    const [article, setArticle] = useState(null)
    const [loading, setLoading] = useState(true)
    const fadeAnim = useRef(new Animated.Value(0));

    useEffect(() => {
        fetch(`https://cs571.org/api/s24/hw8/article?id=${props.route.params.fullArticleId}`, {
            headers: {
                "X-CS571-ID":'bid_f7d7cde3983b9d53d64c5b90313792b9e019bc8d6c685390803c2f5c94b89fcc'
            }
        })
        .then(res => res.json())
        .then(data => {
            setArticle(data)
            Animated.timing(fadeAnim.current, {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true,
             }).start();
        })
        .finally(() => setLoading(false))
    }, [props.route.params])

    const handleReadMore = (url) => {
        Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
    }

    if(loading) {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{height: 168, width: 388, justifyContent: 'center', alignItems: 'center'}} source={{uri: `https://raw.githubusercontent.com/CS571-S24/hw8-api-static-content/main/${props.route.params.img}`}}></Image>
                <Text style={{margin: 24, fontSize: 28, textAlign: 'center'}}>{props.route.params.title}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>The content is loading!</Text>
            </View>
        )
    }

    return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <ScrollView>
            <Image style={{height: 168, width: 388, justifyContent: 'center', alignItems: 'center'}} source={{uri: `https://raw.githubusercontent.com/CS571-S24/hw8-api-static-content/main/${props.route.params.img}`}}></Image>
            <Text style={{margin: 24, fontSize: 28, textAlign: 'center'}}>{props.route.params.title}</Text>
            {article && (
                <Animated.View style={{opacity: fadeAnim.current}}>
                    <Text style={{margin: 24, fontSize: 22}}>By {article.author} on {article.posted}</Text>
                    <Pressable onPress={() => handleReadMore(article.url)} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{ color: 'blue', fontSize: 18 }}>Read full article here.</Text>
                    </Pressable>
                    {article.body && article.body.map((paragraph, index) => (
                    <Text key={index} style={{margin: 24, fontSize: 20}}>{paragraph}</Text>))}
                </Animated.View>
            )}
        </ScrollView>
    </View>
    )
}
export default BadgerNewsDetailScreen;