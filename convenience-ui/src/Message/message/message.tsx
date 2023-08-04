// 弹框组件，先分析一下
import React, { useEffect, useState } from 'react';
import './message.css';
import Button from '../button/button';

/**
 * 1.点击出现弹框
 * 2.点击X弹框消失
 * */
interface MessageProps {
  // 自定义message接口 
  /**
   * @description 鼠标点击时触发事件
   */
  onClick?: Function;
  /**
   * @description 信息提示窗的内容
   */
  children?: string | number;
  /**
  * @description 定义的类名
  */
  className?: string;
  delay?: number;
  title?: string | number; 
}

const Message: React.FC<MessageProps> = (props) => {
  const { children, className, delay, onClick, title } = props;
  const [flag, setFlag] = useState(false);
  const [showFirstSpan, setshowFirstSpan] = useState(false);
  const styleProps = [className].join(' ');
  const handleClick = () => {
    setFlag((prevState) => !prevState);
    if(title==="打开信息提示"){
        setshowFirstSpan(false)
    }
   else{
    setshowFirstSpan(true)
   }
  };
  // 三秒之后弹框自动消失
  useEffect(() => {
    let timer = setTimeout(() => {
      setFlag((prevState) => false);
    }, delay);
    return () => clearTimeout(timer);
  }, [flag]);
  return (
    <div style={{ position: 'relative' }} className={styleProps}>
      <Button onClick={handleClick} style={{ fontSize: '13px' }} >
        {title || 'hello'}
      </Button>
      {/* 弹窗 */}
      {flag && (
        <span className="box" >
          {children || '这是一个信息提示窗!'}&nbsp;&nbsp;&nbsp;&nbsp;
          {showFirstSpan ? (
             <span onClick={handleClick} className="xxx">
             X
           </span>
          ) : null}
        </span>
      )}
    </div>
  );
};
Message.defaultProps = {
  delay: 3000,
};
export default Message;
