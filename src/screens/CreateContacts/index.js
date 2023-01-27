import React, { useContext, useRef, useState } from "react";
import { Text, View } from "react-native";
import CreateContactComponents from "../../components/CreateContactComponents";
import createContacts from "../../context/actions/Contact/createContacts";
import { GlobalContext } from "../../context/Provider/";

const CreateContacts = () => {
  const { contactDispatch } = useContext(GlobalContext);
  const sheetRef = useRef(null);
  const [form, setForm] = useState({});
  const [error, setError] = React.useState({});
  const onChangeText = ({ name, value }) => {
    setForm({ ...form, [name]: value });

    if (value == "") {
      setError((prev) => {
        return { ...prev, [name]: "This field is required" };
      });
    } else {
      setError((prev) => {
        return { ...prev, [name]: null };
      });
    }
  };
  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const onSubmit = () => {
    if (!form.firstName) {
      setError((prev) => {
        return { ...prev, firstName: "Please add a first Name" };
      });
    }

    if (!form.lastName) {
      setError((prev) => {
        return { ...prev, lastName: "Please add a Last Name" };
      });
    }
    if (!form.phoneNumber) {
      setError((prev) => {
        return { ...prev, phoneNumber: "Please add a Phone Number" };
      });
    } else {
      console.log("form", form);
    }
  };

  const toggleValueChange = () => {
    setForm({ ...form, IsFavorite: !form.IsFavorite });
  };
  return (
    <CreateContactComponents
      onChangeText={onChangeText}
      form={form}
      onSubmit={onSubmit}
      setForm={setForm}
      error={error}
      toggleValueChange={toggleValueChange}
      closeRef={closeSheet}
      openRef={openSheet}
      sheetRef={sheetRef}
    />
  );
};

export default CreateContacts;
