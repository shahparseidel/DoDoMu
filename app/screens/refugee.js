import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import Colors from "../constants/colors";
import { Button, TextInput } from "../components";

export default function Refugee() {
  const getInitialFormState = {
    name: "",
    company: "",
    mobile: "",
    hasFamilyMember: false,
    dedicatedSponsor: false,
    location: "",
    dedicatedHelper: false,
  };

  let onFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={getInitialFormState} onSubmit={onFormSubmit}>
        {(props) => (
          <View>
            <TextInput
              icon="user"
              placeholder="Your full name"
              onChangeText={props.handleChange("name")}
              value={props.values.name}
            />
            <TextInput
              icon="building"
              placeholder="Company name"
              onChangeText={props.handleChange("company")}
              value={props.values.company}
            />
            <BouncyCheckbox
              size={25}
              fillColor={Colors.primary}
              unfillColor={Colors.white}
              text="Have family members?"
              textStyle={{ textDecorationLine: "none" }}
              onPress={(isChecked) =>
                props.setFieldValue("hasFamilyMember", isChecked)
              }
            />
            <Button title="Submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    margin: 10,
  },
});
