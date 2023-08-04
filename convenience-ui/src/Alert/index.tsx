import React, { useMemo, FC, memo ,useRef, } from 'react';
import  style  from './Alert.module.less';
import { AlertProps, AlertStyle, NativeAlertProps } from './interface';

const Alert: FC<AlertProps & NativeAlertProps> = memo((props) => {
    // console.log(props); // log一下点击事件能不能使用
    const { type, width, height, children,show } = props;
    const AlertStyle = useMemo(() => {
        if (!type && type !== 'warning' && type !== 'success' && type !== 'error' ) {
            return 'info';
        }
        return type as any;
    }, [type]);
    const AlertSize = useMemo(() => {
        var size: AlertStyle = {
            width: '',
            height: '',
        };
        if (width) {
            size.width = width + 'px';
        }
        if (height) {
            size.height = height + 'px';
        }
        return size;
    }, [width, height,]);

    // 调用useref 创建 名为myRef 的引用 将初始值设置为null 
    const myRef = useRef<HTMLDivElement>(null);
    //  声明一个为change 函数 
     function change() {
        console.log(myRef);
        if(myRef.current){
           myRef.current.hidden=true ;
        }
    } 
    return (
        // 通过ref 将myref 绑定到div 上
        <div className={style.Alert} ref={myRef}>
            <div className={style[AlertStyle]} style={AlertSize as any}>
                {/* 渲染 */}
                    <div className={style.title}>{props.title}</div>
                    {children}
                    {/*  change 为传值   change()为点击运行事件 */}
                    <div className={ style.span} style={ {display:show?"none":"block" }} onClick={ ()=>change()} >x</div>
            </div>
        </div>
    );
});

export default Alert;
