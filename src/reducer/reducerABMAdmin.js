const initialState = {
  cities: [],
  provinces: [],
  allSpecialities: [],
  allAffiliates: [],
  allPlans: [],
  allPharmacies: [],
  pharmacies: [],
  allProfessionals: [],
  allPlansData: [],
  allEmployees: [],
  prescriptionDNI: [],
  affiliatePrescriptionData: [],
  updateData: {},
  viewPlan: [],
  limitPaged: 0,
};

export default function reducerABMAdmin(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_PROVINCES":
      return {
        ...state,
        provinces: action.payload,
      };
    case "GET_ALL_CITIES":
      return {
        ...state,
        cities: action.payload,
      };

    case "GET_SPECIALITIES":
      return {
        ...state,
        allSpecialities: action.payload,
        limitPaged: action.limitPaged,
      };

    case "SPECIALITY_DATA":
      let speData = state.allSpecialities.filter(
        (element) => element._id === action.payload
      );
      return {
        ...state,
        updateData: speData[0],
      };

    case "GET_AFFILIATES":
      return {
        ...state,
        allAffiliates: action.payload,
        limitPaged: action.limitPaged,
      };

    case "AFFILIATE_DATA":
      return {
        ...state,
        updateData: action.payload,
      };

    case "GET_PLANS":
      return { ...state, allPlans: action.payload };

    case "GET_PHARMACIES":
      return {
        ...state,
        allPharmacies: action.payload,
        pharmacies: action.payload,
        limitPaged: action.limitPaged,
        cities: [],
      };

    case "PHARMACY_DATA":
      let pharmData = state.allPharmacies.filter(
        (element) => element._id === action.payload
      );
      return {
        ...state,
        updateData: pharmData[0],
      };

    case "GET_ALL_PLANS_DATA":
      return { ...state, allPlansData: action.payload };

    case "PLAN_DATA":
      let planData = state.allPlansData.filter(
        (element) => element._id === action.payload
      );
      return {
        ...state,
        updateData: planData[0],
      };

    case "GET_PROFESSIONALS":
      return {
        ...state,
        allProfessionals: action.payload,
        limitPaged: action.limitPaged,
      };

    case "PROFESSIONAL_DATA":
      let profData = state.allProfessionals.filter(
        (element) => element._id === action.payload
      );
      return {
        ...state,
        updateData: profData[0],
      };

    case "GET_PRESCRPTION_ID": //En caso de sacar la action sacar este case
      return { ...state, updateData: action.payload };

    case "GET_PRESCRPTIONS_DNI":
      return {
        ...state,
        prescriptionDNI: action.payload,
        affiliatePrescriptionData: action.payload[0].afiliadoID,
      };

    case "PRESCRIPTION_DATA":
      let prescData = state.prescriptionDNI.filter(
        (element) => element._id === action.payload
      );
      return {
        ...state,
        updateData: prescData[0],
        limitPaged: action.limitPaged,
      };

    case "GET_EMPLOYEES":
      return {
        ...state,
        allEmployees: action.payload,
        limitPaged: action.limitPaged,
      };

    case "EMPLOYEE_DATA":
      let emploData = state.allEmployees.filter(
        (element) => element._id === action.payload
      );
      return {
        ...state,
        updateData: emploData[0],
      };

    case "DATA_RESET":
      return { ...state, updateData: action.payload };

    case "GET_PLANES_VIEW":
      let plan = state.allPlansData.filter((e) => e._id === action.payload);

      return {
        ...state,
        viewPlan: plan,
      };

    case "FILTER_ACTIV":
      let filteredPharm = state.pharmacies;
      if (action.payload !== "") {
        filteredPharm =
          action.payload === "Si"
            ? filteredPharm.filter((element) => element.activo === true)
            : filteredPharm.filter((element) => element.activo !== true);
      }
      return { ...state, allPharmacies: filteredPharm };

    default:
      return state;
  }
}
