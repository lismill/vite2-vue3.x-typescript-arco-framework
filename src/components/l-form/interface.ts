/**
 * 表单配置
 * - form - 表单基础配置
 * - sections - 表单区块
 */
export interface ILForm {
  /**
   * 表单基础配置
   * - title? - 表单标题
   * - disabled? - 表单禁用
   * - operatesAlign? - 底部操作按钮对齐方式
   * - operates? - 底部操作按钮
   * - data - 表单数据
   * - others? - 其他扩展属性
   */
  form: {
    /**
     * 表单标题
     */
    title?: string;
    /**
     * 表单禁用
     */
    disabled?: boolean;
    /**
     * 底部操作按钮对齐方式
     */
    operatesAlign?: "left" | "center" | "right";
    /**
     * 底部操作按钮
     * - left? - 底部左侧操作按钮
     * - centerShowResetButton? - 底部中间重置按钮
     * - centerShowSubmitButton? - 底部中间保存按钮
     * - center? - 底部中间操作按钮
     * - right? - 底部右侧操作按钮
     */
    operates?: {
      /**
       * 底部左侧操作按钮
       */
      left?: Array<ILFormOperates>;
      /**
       * 底部中间重置按钮
       */
      centerShowResetButton?: boolean;
      /**
       * 底部中间保存按钮
       */
      centerShowSubmitButton?: boolean;
      /**
       * 底部中间操作按钮
       */
      center?: Array<ILFormOperates>;
      /**
       * 底部右侧操作按钮
       */
      right?: Array<ILFormOperates>;
    };
    /**
     * 表单数据
     */
    data: any;
    /**
     * 其他扩展属性
     */
    others?: any;
  };
  /**
   * 表单区块
   * - title? - 区块标题
   * - items - 区块表单项
   */
  sections: Array<{
    /**
     * 区块标题
     */
    title?: string;
    /**
     * 区块表单项
     * - type - 表单项类型
     * - label - 表单项 label
     * - name - 表单项 name
     * - size? - 表单项大小 "small" | "medium" | "large"
     * - rules? - 表单项校验
     * - info? - 表单项介绍
     * - tooltip? - 表单项提示
     * - options? - 下拉 / 级联数据
     * - others? - 其他扩展属性
     */
    items: Array<{
      /**
       * 表单项类型
       */
      type:
        | undefined
        | "text"
        | "switch"
        | "input"
        | "textarea"
        | "number"
        | "select"
        | "select-search"
        | "cascader"
        | "radio"
        | "checkbox"
        | "phone"
        | "date"
        | "time"
        | "daterange"
        | "upload"
        | "editor"
        | "slot"
        | "hidden";
      /**
       * 表单项 label
       */
      label: string;
      /**
       * 表单项 name
       */
      name: string;
      /**
       * 表单项大小 "small" | "medium" | "large"
       */
      size?: "mini" | "small" | "medium" | "large";
      /**
       * 表单项校验
       */
      rules?: Array<any>;
      /**
       * 表单项介绍
       */
      info?: string;
      /**
       * 表单项提示
       */
      tooltip?: string;
      /**
       * 下拉 / 级联数据
       */
      options?: Array<any>;
      /**
       * 其他扩展属性
       */
      others?: any;
    }>;
  }>;
}

export interface ILFormOperates {
  /**
   * 操作按钮名称
   */
  name: string;
  /**
   * 操作按钮扩展属性
   */
  others?: {
    /**
     * 绑定权限节点
     */
    permission?: string;
    /**
     * 其他扩展属性
     */
    [key: string]: any;
  };
}
