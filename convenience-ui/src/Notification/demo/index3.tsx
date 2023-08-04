
import React from 'react'
import Notification from '..'


export default function index3() {
  return (
    <div>
      <Notification description={"通知内容"} message={"标题"} duration={3000}   type="topLeft">左上角</Notification> 
      <Notification description={"通知内容"} message={"标题"}  duration={3000}  type="topRight">右上角</Notification> 
      <Notification description={"通知内容"} message={"标题"}  duration={3000}  type="bottomLeft">左下角</Notification> 
      <Notification description={"通知内容"} message={"标题"}  duration={3000}  type="bottomRight">右下角</Notification> 


    </div>
  )
}