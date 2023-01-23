import React, { useContext } from "react";
import LoginComponent from "../../components/Login";
import { loginFn } from "../../context/actions/auth/login";
import { GlobalContext } from "../../context/Provider";

const Login = () => {
  const [form, setForm] = React.useState({});
  const [error, setError] = React.useState({});
  const [show, setShow] = React.useState(true);

  const { authDispatch } = useContext(GlobalContext);

  const onChange = ({ name, value }) => {
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

  const onSubmit = () => {
    //validation
    if (!form.userName) {
      setError((prev) => {
        return { ...prev, userName: "Please add a Username" };
      });
    }

    if (!form.passWord) {
      setError((prev) => {
        return { ...prev, passWord: "Please add a Password" };
      });
    } else {
      loginFn(form)(authDispatch);
      console.log("form", form);
    }
  };
  return (
    <LoginComponent
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      form={form}
    />
  );
};

export default Login;
