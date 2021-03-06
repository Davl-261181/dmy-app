import axios from 'axios';
import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';

let Users = (props) => {

    if (props.users.lenght === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users", { withCredentials: true }, { 
            
        headers: {
            'API-KEY': '552c0a5d-31ed-44af-807c-85564617984b'
            
        }
          }).then(response => {props.setUsers(response.data.items);
            

        });

    }

    return <div>
         {
             props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={ u.photos.small !=null ? u.photos.small : userPhoto } className={styles.userPhoto} />
                        </div>
                        <div>
                            {u.followed 
                            ?<button onClick={ () => {props.unfollow(u.id)} }>UnFollow</button>
                            :<button onClick={ () => {props.follow(u.id)} }>Follow</button> }
                            
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{/*u.location.city*/}</div>
                            <div>{/*u.location.country*/}</div>
                        </span>
                    </span>
             </div>)
         }
    </div>
}

export default Users;
