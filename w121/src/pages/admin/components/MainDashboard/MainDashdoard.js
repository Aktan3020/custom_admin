import React from 'react'
import scss from './main_Dashboard.module.scss'
import AdminNavBar from '../adminNavBar/AdminNavBar'
import humanImg from '../../../../assets/image/unsplash_7bMdiIqz_J4.png'
import Calendar from '../calnedar/Calendar'
import ToDoHumans from '../ToDoHumans/ToDoHumans'
import newsImg from '../../../../assets/image/Rectangle 39896.png'
import AdminSideBar from '../adminSideBar/AdminSideBar'
const Dashdoard = () => {
  return (
    <div className={scss.mainDashboard}>
      <section className={scss.mainDashboard__section}><AdminSideBar/></section>
      <section className={scss.mainDashboard__section}>
        <AdminNavBar />

        <div className={scss.section__block}>
          <h1 className={scss.banner__title}>Здравствуйте</h1>
          <div className={scss.wrap__block}>
            <div className={scss.section__block__banner}>
              <div className={scss.block}>
                <h1>Статистика на сегодня</h1>
                <div className={scss.block__item}>
                  <h4>Новых пациентов</h4>
                  <h1>40</h1>
                </div>
              </div>
              <div className={scss.block}>
                <img src={humanImg} />
              </div>
              <div className={scss.block}>

              </div>
            </div>  
            <div className={scss.section__block__banner}>
            <Calendar />
          
           </div>

          </div>
        </div>
  <div className={scss.patients}>
<ToDoHumans/>
<div className={scss.line}></div>
<ToDoHumans/>
<div className={scss.news}>
<div className={scss.item}>
  <div className={scss.boll}></div>
  <p>Последняя новость</p>
</div>

<div className={scss.item}>ЗАГОЛОВОК НОВОСТИ</div>
<div className={scss.item}><img src={newsImg} /></div>

</div>
  </div>
      </section>

    </div>
  )
}

export default Dashdoard