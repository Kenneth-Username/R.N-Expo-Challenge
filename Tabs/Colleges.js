import { StyleSheet, Text, View } from 'react-native';

export default function Colleges() {
    return (
      <View style={styles.container}>
        <Text> 1. UCLA</Text>
        <Text>2.Santa Monica College</Text>
        <Text>3. CSULA</Text>
        {/* <Image source={} /> */}
        {/* <StatusBar style="auto" /> */}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });