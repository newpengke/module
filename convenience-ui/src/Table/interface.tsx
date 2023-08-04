export interface TableProps {
    //自定义button接口
    /**
     * @description 按钮主题
     * @default info
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
     * @description 是否显示表格
     * @default true
     * 
     */
    show?:Boolean;
    /**
     * @description 表头
     */
    columns?:any
    /**
     * @description 显示的数据
     */
    items?:any
    /**
     * @description 是否为斑马纹 table
     */
    cell?:Boolean
    
    
  }
  export interface TableStyle {
     
  }
  export type NativeTableProps = Omit<React.AllHTMLAttributes<HTMLElement>, 'type'>; //原生接口
   