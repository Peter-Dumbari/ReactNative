import {
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
} from "../../../constants/actionTypes";

export default () => (dispatch) => {
  dispatch({
    type: CREATE_CONTACT_LOADING,
  });

  const informations = [
    {
      id: 0,
      first_Name: "Peterz",
      countryCode: "+234",
      phoneNumber: "3892839242",
      contact_picture: "",
      last_Name: "Dum",
    },
    {
      id: 1,
      first_Name: "Peterz",
      countryCode: "+234",
      phoneNumber: "3892839242",
      contact_picture: "",
      last_Name: "Peter",
    },
    {
      id: 2,
      first_Name: "Peterz",
      countryCode: "+234",
      phoneNumber: "3892839242",
      contact_picture: "",
      last_Name: "Dumbari",
    },
  ];
  dispatch({
    type: CREATE_CONTACT_SUCCESS,
    payload: informations,
  });
};
