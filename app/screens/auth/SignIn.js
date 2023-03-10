import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import firebase from "../../config/firebase";
import Loading from "../Loading";

const SignInScreen = ({ navigation }) => {
  const [windowHeight, setWindowHeight] = useState(200);
  const [windowWidth, setWindowWidth] = useState(200);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setWindowHeight(Dimensions.get("window").height);
    setWindowWidth(Dimensions.get("window").width);
  }, []);

  const loginWithEmail = () => {
    setIsLoading(true);
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(user);
        })
        .catch((error) => {
          Alert.alert(error.toString());
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  if (IsLoading) {
    return <Loading />;
  } else {
    return (
      <SafeAreaView style={styles.defaultStyle}>
        <ImageBackground
          source={require("../../images/login_screen.jpg")}
          style={styles.backgroundImage}
        >
          <ScrollView>
            <View
              style={{
                height: windowHeight,
                display: "flex",
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 75,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingTop: 100,
                  }}
                >
                  Hello
                </Text>
                <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                  Sign In To Your Account
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  paddingTop: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: windowWidth * 0.8,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    borderWidth: 2,
                    borderRadius: 20,
                    shadowOffset: { width: 5, height: 2 },
                    elevation: 1,
                    shadowColor: "black",
                    shadowOpacity: 0.2,
                  }}
                >
                  <Ionicons name="ios-mail" size={30} color="#000" />
                  <TextInput
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    style={{
                      width: windowWidth * 0.6,
                      height: 50,
                      fontWeight: "bold",
                    }}
                    placeholder="Email"
                    placeholderTextColor="black"
                    keyboardType="email-address"
                  />
                </View>
                <View
                  style={{
                    width: windowWidth * 0.8,
                    display: "flex",
                    flexDirection: "row",
                    margin: 10,
                    justifyContent: "space-around",
                    alignItems: "center",
                    borderWidth: 2,
                    borderRadius: 20,
                    shadowOffset: { width: 5, height: 2 },
                    elevation: 1,
                    shadowColor: "black",
                    shadowOpacity: 0.2,
                  }}
                >
                  <Ionicons name="ios-lock" size={30} color="#000" />
                  <TextInput
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    style={{
                      width: windowWidth * 0.6,
                      height: 50,
                      fontWeight: "bold",
                    }}
                    placeholder="Password"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    keyboardType="default"
                  />
                </View>
              </View>
              <TouchableOpacity onPress={loginWithEmail}>
                <View
                  style={{
                    paddingTop: -20,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    padding: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 30,
                      padding: 10,
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Sign In
                  </Text>
                  <Ionicons
                    name="ios-arrow-dropright-circle"
                    color="#0af"
                    size={50}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.push("Sign Up")}>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Don't have an Account?{" "}
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        textDecorationLine: "underline",
                      }}
                    >
                      Create
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
};

export default SignInScreen;

const styles = StyleSheet.create({
  defaultStyle: {
    display: "flex",
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});
