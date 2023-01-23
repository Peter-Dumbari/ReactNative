import React, { useState } from "react";
import { Text, View } from "react-native";
import RegisterComponent from "../../components/Signup";

const Signup = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState({});
  const [show, setShow] = useState(true);

  const regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });

    if (value !== "") {
      if (name === "passWord") {
        if (!regex.test(value)) {
          setError((prev) => {
            return {
              ...prev,
              [name]:
                "password should contain atleast one number and one special character",
            };
          });
        } else {
          setError((prev) => {
            return {
              ...prev,
              [name]: null,
            };
          });
        }
      } else {
        setError((prev) => {
          return { ...prev, [name]: null };
        });
      }
    } else {
      setError((prev) => {
        return { ...prev, [name]: "This field is required" };
      });
    }
  };

  const onSubmit = () => {
    //validation
    console.log("form", form);
    if (!form.userName) {
      setError((prev) => {
        return { ...prev, userName: "Please add a Username" };
      });
    }
    if (!form.firstName) {
      setError((prev) => {
        return { ...prev, firstName: "Please add a firstName" };
      });
    }
    if (!form.emailAdress) {
      setError((prev) => {
        return { ...prev, emailAdress: "Please add a Email" };
      });
    }
    if (!form.lastName) {
      setError((prev) => {
        return { ...prev, lastName: "Please add a Lastname" };
      });
    }
    if (!form.passWord) {
      setError((prev) => {
        return { ...prev, passWord: "Please add a Password" };
      });
    }
  };
  return (
    <RegisterComponent
      onSubmit={onSubmit}
      error={error}
      onChange={onChange}
      form={form}
      show={show}
      setShow={setShow}
    />
  );
};

export default Signup;
