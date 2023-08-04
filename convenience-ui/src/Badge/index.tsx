import React, { FC, memo } from "react";
import Css from './Badge.module.less'
import { BadgeProps} from './interface';

const Badge:FC<BadgeProps> = memo((props)=>{
    let {count, background, backgroundColor, color, boxWidth, boxHeight, iconWidth, iconHeight, fontSize, top, right } = props

    return (
        <div>
            <div className={Css.box} style={
                {
                    backgroundColor: background ? background : '#bfbfbf',
                    width: boxWidth ? boxWidth : '50px',
                    height: boxHeight ? boxHeight : '50px',
                }
            }>
                <div className={Css.icon}
                    style={
                        {
                            backgroundColor: backgroundColor ? backgroundColor : "#ff4d4f",
                            color: color ? color : "#fff",
                            width: iconWidth ? iconWidth : '30px',
                            height: iconHeight ? iconHeight : '30px',
                            fontSize: fontSize ? fontSize : '14px',
                            top: top ? top : '-10px',
                            right: right ? right : '-10px',
                        }
                    }>
                    <span>{count ? count : "99"}</span>
                </div>
            </div>
        </div>
    )
})

export default Badge