import React from 'react';
import moment from 'moment';

const Msg = React.memo(({ msg, userId}) => (
    <div key={msg.id} id="msg">
        <div className={msg.user.id === userId ? 'my_msg' : 'not_my_msg'}>
            <div>
                <img src={msg.user.picture ? `/uploads/users/${msg.user.picture}` : '/build/images/default-avatar.png'} alt={msg.user.name}
                 width="30" height="30" className="rounded-circle" />
                <span className="user_name"> { msg.user.name } </span>
                <small className="text-muted">
                    {moment(new Date(msg.updatedAt)).from()}
                </small>
            </div>
            <div className="msg-text">
                {msg.content}
            </div>
        </div>
    </div>
));


export default Msg;