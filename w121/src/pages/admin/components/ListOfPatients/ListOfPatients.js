import React from 'react'
import scss from './listOfPatients.module.scss'
import AdminSideBar from '../adminSideBar/AdminSideBar'
import AdminNavBar from '../adminNavBar/AdminNavBar'
import PatientUI from '../UI/patientUI/PatientUI'
import InputUI from '../UI/InputUI/InputUI'

const ListOfPatients = () => {
    return (
        <div className={scss.listOfPatients}>
            <section className={scss.section}><AdminSideBar /></section>
            <section className={scss.section}>
                <AdminNavBar />
                <div className={scss.container}>
                    <div className={scss.block}>
                        <div className={scss.item} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <h1>Список пациентов</h1>
                            <select style={{ border: 'none', color: 'rgba(0, 0, 0, 0.6)', fontSize: '19px' }}>
                                <option>Cегодня</option>
                                <option>Завтра</option>


                            </select>
                        </div>
                        <div className={scss.item}>
<InputUI styles={{width:'100%',background:'rgba(18, 137, 131, 0.25) '}}/>
                        </div>
                    </div>
                    <div className={scss.patients}>
                        <PatientUI />
                        <PatientUI />
                        <PatientUI />
                        <PatientUI />
                        <PatientUI />
                 
                        <PatientUI />
                        <PatientUI />
                        <PatientUI />
                        <PatientUI />
                        <PatientUI />
                        <PatientUI />
                        <PatientUI />
                        <PatientUI />
                        <PatientUI />
                        <PatientUI />
                        <PatientUI />
                        <PatientUI />
                        <PatientUI />

                    </div>
                </div>
            </section>

        </div>
    )
}

export default ListOfPatients