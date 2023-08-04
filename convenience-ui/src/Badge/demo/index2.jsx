import React from "react";
import Badge from '..'

export default () => {
    return (
        <div>
            <Badge
                count={888}
                background={"#1f1f1f"}
                backgroundColor={"#1677ff"}
                color="#bfbfbf"
                boxWidth={"100px"}
                boxHeight={"100px"}
                iconWidth={"50px"}
                iconHeight={"50px"}
                fontSize={"18px"}
                top={"-5px"}
                right={"-5px"}
            ></Badge>
        </div>
    )
}
