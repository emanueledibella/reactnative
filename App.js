import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  ScrollView,
  Text, 
  View, 
  SafeAreaView, 
  Image, 
  TouchableWithoutFeedback, 
  TouchableOpacity,  
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert
} from 'react-native';
// SafeAreaView per evitare il notche
// Text -> props: numberOfLines={1}
export default function App() {

  const press = () => alert('press')
//style={styles.container}
  return (
    <ScrollView >
      <StatusBar style="auto" />
      <Text numberOfLines={1} onPress={press}>Immagine TouchableWithoutFeedback</Text>
      <TouchableWithoutFeedback onPress={() => alert('Tapped')} onLongPress={() => alert('Long Tapped')}>
        <Image 
          resizeMode={'contain'}
          fadeDuration={1000}
          blurRadius={10}
          source={
            {
              uri: "https://picsum.photos/200/300",
              width: 100,
              height: 300
            }
        }/> 
      </TouchableWithoutFeedback>
      <Text numberOfLines={1} onPress={press}>Immagine TouchableOpacity</Text>
      <TouchableOpacity onPress={() => alert('Tapped')} onLongPress={() => alert('Long Tapped')}>
        <Image 
          resizeMode={'contain'}
          fadeDuration={1000}
          blurRadius={10}
          source={
            {
              uri: "https://picsum.photos/200/300",
              width: 100,
              height: 300
            }
        }/> 
      </TouchableOpacity>
      <Text numberOfLines={1} onPress={press}>Immagine TouchableHighlight</Text>
      <TouchableHighlight onPress={() => alert('Tapped')} onLongPress={() => alert('Long Tapped')}>
        <Image 
          resizeMode={'contain'}
          fadeDuration={1000}
          blurRadius={10}
          source={
            {
              uri: "https://picsum.photos/200/300",
              width: 100,
              height: 300
            }
        }/> 
      </TouchableHighlight>
      <Text numberOfLines={1} onPress={press}>Immagine TouchableNativeFeedback (android solo)</Text>
      <TouchableNativeFeedback onPress={() => alert('Tapped')} onLongPress={() => alert('Long Tapped')}>
        <View style={{width: 200, height: 70, backgroundColor: 'dodgerblue'}}></View>
      </TouchableNativeFeedback>
    <Button 
      color="orange"
      title="Alert.alert" onPress={() => Alert.alert('My Title', 'Messaggio', [
        {text: "Yes", onPress: () => Alert.alert('YES')},
        {text: "No", onPress: () => Alert.alert('No')}
      ])}/>
     <Button 
      color="orange"
      title="Alert.prompt(Solo Ios)" onPress={() => Alert.prompt("My Title", "Messaggio", (text) => Alert.alert(text))}/>
    </ScrollView>
  );
}
const container = {backgroundColor: 'orange'};

// si usa con style={styles.container} oppure style={[styles.container], [styles.container2]} per includere 2 stili
// Create permette di fare la validazione dele proprietà e include alcune ottimizzazioni
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
