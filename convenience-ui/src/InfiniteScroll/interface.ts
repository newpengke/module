export interface ScrollProps {
  //自定义container接口
  /**
   * @description 触发加载更多数据的回调函数
   *
   */
  loadMore?: any;
  /**
   * @description 是否加载
   */
  More?: Boolean;
  /**
  * @description 子节点
  */
  children?: any;

}

// }
// export type NativeScrollProps = Omit<React.HTMLAttributes<HTMLElement>, 'type'>; //原生button接口
