import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../constants/Colors";
import Header from "../components/Header";
import IconF from "react-native-vector-icons/Feather";
import IconE from "react-native-vector-icons/EvilIcons";

const { height, width } = Dimensions.get("window");

const Field = ({ name, multiple }) => (
  <View>
    <Text style={styles.formText}>{name}</Text>
    {multiple ? (
      <View
        style={[
          styles.formInput,
          {
            borderRadius: 20
            //height: "45%"
          }
        ]}
      >
        <TextInput
          style={{
            height: 140,
            width: "100%",
            justifyContent: "flex-start",
            textAlignVertical: "top"
          }}
          multiline
          numberOfLines={8}
          placeholder="type something"
          maxLength={400}
        />
      </View>
    ) : (
      <TextInput maxLength={100} style={styles.formInput} />
    )}
  </View>
);

export default class ContactUsScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        //keyboardVerticalOffset={500}
      >
        <View style={{ flex: 1, width, backgroundColor: Colors.$white }}>
          <ScrollView style={{ flex: 1, height: "100%" }}>
            <Header
              title="contact us"
              leftIcon={
                <Icon name="menu" size={25} color={Colors.$primaryBlue} />
              }
              drawer
              //rightIcon={<Icon name="star" size={22} color={Colors.$starOrange} />}
            />
            <View style={styles.contactContainer}>
              <TouchableOpacity>
                <View style={styles.whatappBtn}>
                  <Icon name="whatsapp" size={35} color={Colors.$white} />
                  <View style={{ marginLeft: 5 }}>
                    <Text style={styles.wASubText}>
                      click here to contact us directly on
                    </Text>
                    <Text style={styles.wAText}>whatsApp</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <View style={styles.textcontainer}>
                <IconF name="map-pin" size={16} color={Colors.$white} />
                <Text style={styles.text}>tripoli-lebanon</Text>
              </View>
              <View style={styles.textcontainer}>
                <IconE name="envelope" size={25} color={Colors.$white} />
                <Text style={styles.text}>Trkram.lb@gmail.com</Text>
              </View>
            </View>
            <View style={styles.separator} />
            <View style={styles.formContainer}>
              <Text style={styles.formTitle}>
                Please contact us using the form below
              </Text>
              <Field name="name" />
              <Field name="email" />
              <Field name="message" multiple />
              <View
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  contactContainer: {
    backgroundColor: Colors.$primaryBlue,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20
  },
  whatappBtn: {
    backgroundColor: Colors.$whatappBG,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 25,
    marginTop: 20,
    marginBottom: 15
  },
  wAText: {
    fontSize: 18,
    color: Colors.$white,
    fontWeight: "bold"
  },
  wASubText: {
    fontSize: 8,
    color: Colors.$white,
    marginBottom: -5
  },
  text: {
    fontSize: 15,
    color: Colors.$white,
    textTransform: "capitalize",
    fontWeight: "bold",
    paddingLeft: 5,
    borderLeftColor: Colors.$lightOrange,
    borderLeftWidth: 1.2,
    marginLeft: 5,
    marginBottom: 10
  },
  textcontainer: {
    flexDirection: "row",
    alignItems: "baseline"
  },
  separator: {
    width,
    height: 4,
    borderBottomColor: Colors.$borderHeader,
    borderBottomWidth: 1
  },
  formContainer: {
    margin: 25
  },
  formTitle: {
    color: Colors.$lightOrange,
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 15,
    marginBottom: 20
  },
  formText: {
    color: Colors.$gray,
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "capitalize",
    marginLeft: 15,
    marginBottom: 4
  },
  formInput: {
    backgroundColor: Colors.$textInputGray,
    borderColor: Colors.$borderGray,
    borderWidth: 1.5,
    borderRadius: 50,
    marginBottom: 15,
    alignItems: "center",
    padding: 8,
    paddingHorizontal: 20
  },
  button: {
    backgroundColor: Colors.$primaryBlue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
    paddingHorizontal: 25,
    width: "80%",
    marginTop: 10
  },
  buttonText: {
    color: Colors.$white,
    fontSize: 16,
    paddingHorizontal: 25,
    paddingVertical: 7,
    textTransform: "capitalize"
    //width: "100%"
  }
});

export { ContactUsScreen };
