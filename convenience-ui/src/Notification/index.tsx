//useMemo 用来缓存计算结果 依赖项发生变化时会重新计算
import React,{ memo, useMemo,FC ,useRef, Children, useEffect} from "react";
import  style from'./Notification.module.less'
import { NotProps,NotStyle,NotsProps} from './interface' ;

const Not: FC<NotProps & NotsProps> = memo((props) => {
    // console.log(props);
    
    const { type, width, height,duration,children } = props;
    const NotStyle = useMemo(() => {
        if (!type && type !== 'topLeft' && type !== 'topRight' && type !== 'bottomLeft' && type !== 'bottomLeft' ) {
            return 'topRight';
        }
        return type as any;
    }, [type]);

    const NotSize = useMemo(()=>{
        var size: NotStyle = {
            width: '100px',
            height: '40px',
          };
          if (width) {
            size.width = width + 'px';
          }
          if (height) {
            size.height = height + 'px';
          }
          return size;
    },[height,width])

    // 点击按钮出现
    function onchange(){
        if(divref.current){
            divref.current.hidden=false ;
        }
        console.log(divref);
        // 如果duration存在 执行延时器
        if(duration){
            setTimeout(()=>{
                if(divref.current){
                    divref.current.hidden= true;
                } 
            },duration)
        }
    }
    // 初始化的时候 隐藏
    useEffect(()=>{
        if(divref.current){
            divref.current.hidden=true
        }
    },[])
   
    const divref =useRef<HTMLDivElement>(null);
    //  点击x 消失
    function change(){
        // console.log(divref.current.hidden);
        if(divref.current){
            divref.current.hidden=true;
        }        
    }
    return (
         <>
            <button  className={ style.button} style={NotSize as any} onClick={()=>onchange()}>{children}</button>
            <div className={style[NotStyle]} ref={divref}>
               <div className={ style.error} onClick={()=>change()}>x</div>
               <h3>{props.message} </h3>
               <div>{props.description} </div>
            </div>
         </>
    );
});

export default Not;
