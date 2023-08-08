import React from 'react'
import scss from './adminNavBar.module.scss'
import InputUI from '../UI/InputUI/InputUI'
import talkIcon from '../../../../assets/icons/talk.svg'
import bellIcon from '../../../../assets/icons/bell.svg'

const AdminNavBar = () => {
  return (
    <div className={scss.adminNavbar}>
              <div className={scss.nav__block}><InputUI styles={{width:'100%',background:'#E5E5E5',}}/></div>
            <div className={scss.nav__block}>
              <div className={scss.nav__block_item}><img  src={talkIcon}/></div>
              <div className={scss.nav__block_item}><img src={bellIcon}/></div>
              <div className={scss.nav__block_item}><div className={scss.imgBox}><img src='https://pp.userapi.com/c630930/v630930816/3d8cc/judO6eAJ61E.jpg'/></div><div>Админ</div></div>

            </div>
        
    </div>
  )
}

export default AdminNavBar