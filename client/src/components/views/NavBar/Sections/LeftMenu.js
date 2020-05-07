import React from 'react';
import { Menu } from 'antd';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode} className="bg-info">
    <Menu.Item key="mail">
      <a href="/" className="text-white">Home</a>
    </Menu.Item>
    <Menu.Item key="chat">
      <a href="/chat" className="text-white">ChatRoom</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu