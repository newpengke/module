export interface NotProps{
     //自定义button接口
    /**
     * @description 自定义弹出位置
     * @default topRight
     */
    type?: String;
    /**
     * @description 宽度
     */
    width?: Number;
    /**
     * @description 高度
     */
    height?: Number;
    /**
     * @description 通知提醒内容
     */
    description?:String;
    /**
     * @description 通知提醒标题
     */
    message?:String;
     /**
     * @description 设置延时器
     */
     duration?:number;
}


export interface NotStyle{
    description?:String;
    duration?:Number;
    topleft?:Number;
    width?:String;
    height?:String;
}

// Omit 相当于？ 可选
export type NotsProps = Omit<React.AllHTMLAttributes<HTMLElement>,'type'>;