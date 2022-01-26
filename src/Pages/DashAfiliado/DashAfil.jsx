import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashAuthorizations from '../../Components/DashAuthorizations/DashAuthorizations'
import FamilyGroupDash from '../../Components/FamilyGroup/FamilyGroupDash'
import MedicalHistory from '../../Components/MedicalHistory/MedicalHistory'
import { TokenMedico } from '../../Components/TokenMedico/TokenMedico'
import Logo from "./../../assets/bg2.jpg"
import { useNavigate } from "react-router-dom"
import { getGroup } from '../../actions/actionGroup'
import { getAfiliate, getItem, getMedicalToken, removeItem } from '../../actions/actionAuth';
import Credencial from '../../Components/Credencial/Credencial'
import { getRecetas } from '../../actions/actionRecet'
import Modal from '../../Components/Modal/Modal'
import {motion} from 'framer-motion'
import { IdentificationIcon, KeyIcon } from '@heroicons/react/outline'

function DashAfil() {
    const { user, route } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isActive, setActive] = useState({
        credencial: false,
        token: false,
        farmacia: false,
        cartilla: false
    });

    useEffect(() => {
        dispatch(getAfiliate(getItem('userToken')))
        if (route !== '') {
            removeItem('userType')
            navigate(`/${route}`)
        }
    }, [dispatch, route, navigate])


    useEffect(() => {
        if (user.grupFamID) dispatch(getGroup(user.grupFamID))
    }, [dispatch, user])

    useEffect(() => {
        dispatch(getRecetas())
    }, [])

    const { medicalToken } = useSelector(state => state.auth)
    useEffect(() => {
        if (medicalToken.length < 3) dispatch(getMedicalToken())
        // if (medicalToken.length === 3) setActive(false)
    }, [dispatch, medicalToken.length])
    
    const toggleClass = (e) => {
    
        const name = e.target.getAttribute('name')
        const modal = isActive[name]
        setActive({
            ...isActive,
            [name]: !modal
        })
    };

    return (
        <motion.div >
            <style dangerouslySetInnerHTML={{ __html: "\n\t@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap');\n\n\t* {\n\t\tfont-family: 'Noto Sans JP', sans-serif;\n\t}\n\n\t.bg-app {\n\t\tbackground-image: url('');\n\t}\n" }} />
            <div className="flex flex-row items-center justify-center min-h-screen bg-center bg-no-repeat bg-cover opacity-80 bg-app" style={{ backgroundImage: `url(${Logo})` }}>
                <main className="flex flex-col w-full max-w-5xl m-4 overflow-hidden bg-white shadow-lg lg:flex-row backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl lg:m-6">
                    <div className="flex-1 p-4 lg:p-6">
                        <div className="flex items-center mb-8 text-4xl text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokelineloin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="ml-4 font-bold">Bienvenidx {user.nombre}</div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-3 sm:grid-rows-3 md:grid-rows-2 md:grid-cols-3">
                            <MedicalHistory  />
                            <DashAuthorizations />
                            <FamilyGroupDash />

                            <div name='credencial' onClick={toggleClass} className="relative flex flex-col items-center justify-start object-top p-4 bg-white cursor-pointer rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined" >
                                <div className="flex flex-col items-center justify-start mt-4 mb-2 text-lg text-center text-white">
                                    <label name='credencial' className='text-xl font-medium cursor-pointer'>Credencial</label>
                                    <button name="credencial" onClick={toggleClass}>
                                        <IdentificationIcon className="text-white pointer-events-none h-28 w-28" />
                                    </button>
                                </div>
                            </div>
                            {
                                isActive.credencial && <Credencial toggleClass={toggleClass} name={user.nombre} lastname={user.apellido} dni={user.DNI} plan={user.planID.name} />
                            }

                            <div name="token" onClick={toggleClass} className="relative flex flex-col items-center justify-start object-top p-4 bg-white cursor-pointer rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined">
                                <div className="flex flex-col items-center justify-start mt-4 mb-2 text-lg text-center text-white">
                                    <label name="token" className='text-xl font-medium cursor-pointer '>Token</label>
                                    <button name="token" onClick={toggleClass}>
                                        <KeyIcon className="text-white pointer-events-none h-28 w-28" />
                                    </button>
                                </div>
                            </div>
                            {
                                isActive.token && <TokenMedico toggleClass={toggleClass} />
                            }
                        </div>
                    </div>
                </main>
            </div>
        </motion.div>
    )
}

export default DashAfil
