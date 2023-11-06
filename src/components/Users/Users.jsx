import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import User from './User';


let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
  return <div>
    <Pagination currentPage={currentPage} onPageChanged={onPageChanged} 
                totalItemsCount={totalUsersCount} pageSize={pageSize} />
    {
      users.map(u => <User  user={u} key={u.id}
                            followingInProgress={props.followingInProgress}
                            unfollow={props.unfollow}
                            follow={props.follow}/>
      )
    }
  </div>
}

export default Users;
