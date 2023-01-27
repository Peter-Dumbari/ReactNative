import { View, Text } from "react-native";
import React, { useContext } from "react";
import Container from "../../components/common/container";
import ContactComponent from "../../components/ContactComponent";
import { GlobalContext } from "../../context/Provider";
import getContact from "../../context/actions/Contact/getContact";

const Contacts = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const {
    contactDispatch,
    contactState: {
      getContact: { data, loading },
    },
  } = useContext(GlobalContext);

  React.useEffect(() => {
    getContact()(contactDispatch);
  }, []);
  return (
    <ContactComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      data={data}
      loading={loading}
    />
  );
};

export default Contacts;
