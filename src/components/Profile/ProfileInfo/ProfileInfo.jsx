import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return <div>
       <div>
           <img src='https://www.pnp.ru/upload/entities/2019/12/18/article/detailPicture/90/ac/96/c7/28dc349f219c5ff70af0b64bbae3632b.jpg'/>
       </div>
        <div className={s.descriptionBlock}>ava+discription </div>
    
    </div>
}

export default ProfileInfo;