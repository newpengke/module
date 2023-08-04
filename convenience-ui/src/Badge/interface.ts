export interface BadgeProps {
  /**
   * @description 按钮主题
   * @default primary
   */
  type?: number;
  /**
   * @description 数量
   * @default 10
   */
  count?: string,
  /**
   * @description 大盒子背景颜色
   * @default px
   */
  background?: string,
  /**
   * @description icon背景颜色
   * @default px
   */
  backgroundColor?: string,
  /**
   * @description icon字体颜色
   * @default px
   */
  color?: string,
  /**
   * @description 盒子宽度
   * @default px
   */
  boxWidth?: string,
  /**
   * @description 盒子高度
   * @default px
   */
  boxHeight?: string,
  /**
   * @description 图标宽度
   * @default px
   */
  iconWidth?: string,
  /**
  * @description 图标高度
   * @default px
  */
  iconHeight?: string,
  /**
 * @description 字体大小
   * @default px
 */
  fontSize?: string,
  /**
* @description 上偏移量
   * @default px
*/
  top?: string,
  /**
 * @description 右偏移量
   * @default px
 */
  right?: string,
}