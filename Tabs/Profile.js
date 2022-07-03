import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text> Kenneth Melendez</Text>
      <Image>file:///Users/txt-30/Pictures/Photos%20Library.photoslibrary/originals/5/549CAE8D-A617-42FA-9A7B-845CCC2B0390.jpeg</Image>
      <Text>I'm Kenneth Melendez. I'm 15 years old. I like to play video games and read books, particularly manga or light novels. I'm somewhat lazy and I'm only motivated when a subject interests me. I want to be a person who will not die with any regrets.</Text>
      {/* <Image source={} /> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});