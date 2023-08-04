import React, { useState } from 'react';
import Loading from '..';
import Button from '../../Button';
export default function LoadingDemo1() {
    let [value, setValue] = useState(false)
    let [style, setStyle] = useState("white")
    const handleClick = () => {
        setValue(true)
        setTimeout(() => {
            setValue(false)
        }, 2000)
    }
    return (
        <div style={{ position: 'relative', width: "600px", height: "200px" }}>
            {/* <Button type="main" onClick={ handleClick}>指令方式</Button> */}
            <button onClick={() => handleClick()}>指令方式</button>
            <Loading mask="block" loading={value} text="拼命加载中..." all={true}>
            </Loading>
        </div>
    );
}
