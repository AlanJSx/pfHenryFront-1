import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../utils/authUtils";
import NavBarDashAdmin from "../../Components/NavBarDashboard/NavbarDashAdmin";

import ABMSpecialities from "../../Components/ABMAdmin/ABMSpecialties/ABMSpecialties";
import ABMAffiliates from "../../Components/ABMAdmin/ABMAffiliates/ABMAffiliates";
import ABMPharmacies from "../../Components/ABMAdmin/ABMPharmacies/ABMPharmacies";
import ABMPlans from "../../Components/ABMAdmin/ABMPlan/ABMPlans";
import ABMProfessionals from "../../Components/ABMAdmin/ABMProfessionals/ABMProfessionals";
import ABMPrescriptions from "../../Components/ABMAdmin/ABMPrescriptions/ABMPrescriptions";
import ABMPharmaciesList from "../../Components/ABMAdmin/ABMPharmacies/ABMPharmaciesList";
import IndexProfessional from "../../Components/Professionals/indexProfessional";
import { getProfessionalData } from "../../actions/professionalsActions";

function DashProfessional() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { route } = useSelector((state) => state.auth);
  const { professionalData } = useSelector((state) => state.professionals);

  useEffect(() => {
    if (route !== "") navigate(`/${route}`);
  }, [dispatch, route, navigate]);

  useEffect(() => {
    if (!!professionalData) dispatch(getProfessionalData());
  }, []);

  return (
    <div className="min-h-[91vh]">
      <IndexProfessional />
    </div>
  );
}

export default DashProfessional;
