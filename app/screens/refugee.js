import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import Colors from "../constants/colors";
import { Button, TextInput } from "../components";
import { useTranslation } from "react-i18next";

export default function Refugee() {
  const { t } = useTranslation();

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
              placeholder={t("placeholder_fullname")}
              onChangeText={props.handleChange("name")}
              value={props.values.name}
            />
            <TextInput
              icon="building"
              placeholder={t("placeholder_company_name")}
              onChangeText={props.handleChange("company")}
              value={props.values.company}
            />
            <BouncyCheckbox
              size={25}
              fillColor={Colors.primary}
              unfillColor={Colors.white}
              text={t("placeholder_has_family")}
              textStyle={{ textDecorationLine: "none" }}
              onPress={(isChecked) =>
                props.setFieldValue("hasFamilyMember", isChecked)
              }
            />
            <Button title={t("button_submit")} onPress={props.handleSubmit} />
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
