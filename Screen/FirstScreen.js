import { StyleSheet, View, TouchableOpacity, Image, Text, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function FirstScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/bg_pam.png")}>
      <Text style={styles.textbox}>Profil Produk Somethnic</Text>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')}>
          <AntDesign name='rightcircle' size={50} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.itemBottom}>
        <Text style={styles.footerText}>Copyright 120140168- Muhammad Haikal Fauzananda</Text>
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  itemBottom: {
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
    paddingBottom: 40,
  },
  footerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  background: {
    flex: 1,
    flexDirection: "column",
    resizeMode: "contain",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    margin: 20,
    top: 45,
    left: 155,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textbox: {
    color: 'white',
    bottom: 150,
    fontSize: 32,
    resizeMode: "contain",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
});