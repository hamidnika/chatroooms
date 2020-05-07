import React from "react";
import moment from 'moment';
import { Comment, Tooltip, Avatar } from 'antd';

function ChatCard(props) {
    return (
        <div style={{ width: '100%' }} >
            <Comment
            className="font-weight-bolder"
                author={props.sender.name}
               
                avatar={
                    <Avatar
                        src={props.sender.image} alt={props.sender.name}
                    />
                } 
                content={
                    props.message.substring(0, 8) === "uploads/" ?
                        // this will be either video or image 

                        props.message.substring(props.message.length - 3, props.message.length) === 'mp4' ?
                            <video
                                style={{ maxWidth: '200px' }}
                                src={`http://localhost:5000/${props.message}`} alt="video"
                                type="video/mp4" controls
                            />
                            :
                            <img
                                style={{ maxWidth: '200px' }}
                                src={`http://localhost:5000/${props.message}`}
                                alt="img"
                            />
                        :
                        <p className="text-dark font-weight-bolder ">
                            {props.message}
                        </p>
                }
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')} className="text-danger font-weight-bolder">
                        <span>{props.createdAt}</span>
                       
                    </Tooltip>
                }
            />
        </div>
    )
}

export default ChatCard;

