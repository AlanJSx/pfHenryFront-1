import axios from "axios";
const { ROUTE_BACK} = process.env;

//${ROUTE_BACK}/planesMutual
export function getPlanes() {
    return async function (dispatch) {
      var json = await axios.get(`https://arpymedical.herokuapp.com/arpymedicalback/planesMutual`);
       
      return dispatch({
        type: "GET_PLANES",
        payload: json.data,
      });
      
    };
  }

