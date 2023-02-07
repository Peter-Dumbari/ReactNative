import {
  GET_CONTACT_LOADING,
  GET_CONTACT_SUCCESS,
} from "../../../constants/actionTypes";

export default () => (dispatch) => {
  dispatch({
    type: GET_CONTACT_LOADING,
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
      contact_picture:
        "https://res.cloudinary.com/tamstech-computer-repair-center/image/upload/v1651502946/download_1_yfs0hz.jpg",
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
    type: GET_CONTACT_SUCCESS,
    payload: informations,
  });
};
