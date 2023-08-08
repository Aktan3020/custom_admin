import React from 'react'
import scss from './AdminSideBar.module.scss'
import dashboardIcon from '../../../../assets/icons/dashboard.svg'
import patientListIcon from '../../../../assets/icons/patientList.svg'
import plusIcon from '../../../../assets/icons/plus.svg'
import humansIcon from '../../../../assets/icons/humans.svg'
import { Link } from 'react-router-dom'
import logoImg from '../../../../assets/icons/logo.svg'

const AdminSideBar = () => {
  return (
    <div className={scss.adminSideBar}>
        <div className={scss.logo}><img src={logoImg}/></div>
       

        <ul>
       <Link to={'/admin'}><li><img src={dashboardIcon} /></li></Link>     
        <Link to={'/admin/patients'}>  <li><img src={patientListIcon} /></li></Link> 
       <Link to={'/admin/news'}>   <li><img src={plusIcon} /></li></Link>  
        <Link to={'/admin/doctors'}>   <li><img src={humansIcon} /></li></Link> 
        </ul>
    </div>
  )
}

export default AdminSideBar