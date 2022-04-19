import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/FormImagePicker";
import {
  AppForm,
  AppFormField as AFF, //alias
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});
const categories = [
  { label: "Furniture", value: 1, backgroundColor: "#fc5c65", icon: "lamp" },
  {
    label: "Clothing",
    value: 2,
    backgroundColor: "green",
    icon: "shoe-formal",
  },
  { label: "Camera", value: 3, backgroundColor: "blue", icon: "camera" },
  { label: "Games", value: 4, backgroundColor: "yellow", icon: "cards" },
  {
    label: "Movies & Music",
    value: 5,
    backgroundColor: "purple",
    icon: "cards",
  },
  { label: "Books", value: 6, backgroundColor: "pink", icon: "book" },

  { label: "Other", value: 7, backgroundColor: "black", icon: "cards" },
];
function ListEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AFF maxLength={255} name="title" placeholder="Title" />
        <AFF
          keyboardType="numeric"
          maxLength={8}
          name="price"
          width={120}
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          PickerItemComponent={CategoryPickerItem}
          name="category"
          numberOfColumns={3}
          placeholder="Category"
          width="50%"
        />
        <AFF
          maxLength={255}
          multiline
          numberOfLines={3}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
export default ListEditScreen;
