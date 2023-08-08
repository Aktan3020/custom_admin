import React from 'react'
import scss from './toDoHumans.module.scss'
import InputUI from '../UI/InputUI/InputUI'
import PatientUI from '../UI/patientUI/PatientUI'
import Select from '../select/Select'
const ToDoHumans = () => {
    return (
        <div style={{ width: '30%' }}>
            <div className={scss.item} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <h1>Список пациентов</h1>
                <select style={{ border: 'none', color: 'rgba(0, 0, 0, 0.6)', fontSize: '19px' }}>
                    <option>Cегодня</option>
                    <option>Завтра</option>


                </select>
            </div>
            <div className={scss.item}>
                <InputUI styles={{ width: '100%', background: 'linear-gradient(0deg, rgba(18, 137, 131, 0.25), rgba(18, 137, 131, 0.25))', }} />
            </div>

            <PatientUI />
        </div>
    )
}

export default ToDoHumans