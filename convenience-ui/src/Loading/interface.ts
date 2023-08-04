export interface LoadingProps {
  //自定义container接口
  /**
   * @description 容器主题
   * @default primary
   */
  type?: String;
  /**
   * @description 遮盖层样式
   * 
  */
  mask?: String;
  /**
   * @description 加载文案
   */
  text?: String;
  /**
  * @description 子节点
  */
  children?: any;
  /**
 * @description 控制显示隐藏
 * 
 */
  loading?: Boolean;
  /**
* @description 控制整页加载
* 
*/
  all?: Boolean;
  /**
* @description 点击事件
* 
*/
  handleClick?: Function | undefined;

}
