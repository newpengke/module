import React from "react";
import Alert from '..'


export default function index1() {
  return (
    <div >
        <Alert type='warning'  title="警告提示的文案"></Alert>
        <Alert type='success'  title="成功提示的文案"></Alert>
        <Alert type='error'    title="错误提示的文案"></Alert>
        <Alert type='info'    title="消息提示的文案"></Alert>

    </div>
  )
}
