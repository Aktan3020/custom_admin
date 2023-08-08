import React from 'react';
import AdminNavBar from '../adminNavBar/AdminNavBar';
import AdminSideBar from '../adminSideBar/AdminSideBar';
import scss from './AdminDoctors.module.scss';
import newsImg from '../../../../assets/image/DSC_0352_1 2.png'
const AdminDoctors = () => {
    return (
        <div className={scss.adminDoctors}>
            <section>
                <AdminSideBar />

            </section>
            <section>

                <AdminNavBar />
                <div className={scss.container}>


                    <div className={scss.container__header}>
                        <h1>Новости</h1>
                        <button>добавить новость</button>
                    </div>
                    <div className={scss.container_body}>
                        <div className={scss.container_body_item}>
                            <div className={scss.container_body_block}>
                                <img src={newsImg} /> <p>18.02.2024</p>
                            </div>
                            <div className={scss.container_body_text}>
                                <h1>Договоренность о создании
                                    совместного предприятия</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet odio lobortis ex ultrices commodo et ultricies elit. Praesent leo lectus, dictum nec nisl eget, facilisis laoreet risus. Pellentesque fringilla metus purus, eget dapibus libero ultricies sed. Cras facilisis pharetra tempus. Maecenas gravida ullamcorper ligula
                                </p>
                                <p>Подробнее</p>
                            </div>
                        </div>
                        <div className={scss.container_body_item}>
                            <div className={scss.container_body_block}>
                                <img src={newsImg} /> <p>18.02.2024</p>
                            </div>
                            <div className={scss.container_body_text}>
                                <h1>Договоренность о создании
                                    совместного предприятия</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet odio lobortis ex ultrices commodo et ultricies elit. Praesent leo lectus, dictum nec nisl eget, facilisis laoreet risus. Pellentesque fringilla metus purus, eget dapibus libero ultricies sed. Cras facilisis pharetra tempus. Maecenas gravida ullamcorper ligula
                                </p>
                                <p>Подробнее</p>
                            </div>
                        </div>
         
                       
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdminDoctors