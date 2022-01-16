import React from 'react'
import { useSelector } from 'react-redux';
import NavbarDasboard from '../NavBarDashboard/NavBarDashboard'
import CardMemberGroup from './CardMemberGroup';
import { Link } from "react-router-dom";
export default function FamilyGroupDetail() {
    const { group } = useSelector((state) => state.grupos);
    return (
        <div>
        {/* <NavbarDasboard/> */}

            {group && group.map(e => (
                    <CardMemberGroup key={e._id}
                    name={e.nombre}
                    lastname={e.apellido}
                    dni={e.DNI}
                    />
            ))}
            <Link to='/afiliado'>
            <button>Volver</button></Link>
        </div>
    )
}
