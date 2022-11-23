import {AxiosPromise} from "axios";

/**
 * 表格配置
 * - request? - 配置默认请求接口
 * - title? - 配置页面标题
 * - search? - 配置搜索条件
 * - status? - 配置状态栏
 * - toolbar? - 配置工具栏
 * - table - 配置表格
 * - footer? - 配置底部栏
 */
export interface ILTable {
  /**
   * 配置默认请求接口
   */
  request?: (params: any) => AxiosPromise<any>;
  /**
   * 配置页面标题
   */
  title?: string;
  /**
   * 配置搜索条件
   * - data - 配置搜索的数据
   * - forms? - 配置搜索的表单
   */
  search?: {
    /**
     * 配置搜索的数据
     */
    data: {
      status?: string | number;
    };
    /**
     * 配置搜索的表单
     * - type? - 配置搜索的类型 undefined | "input" | "select" | "select-search" | "date" | "daterange" | "slot" | "hidden"
     * - field - 配置搜索的字段
     * - label - 配置搜索的标题
     * - options? - 配置下拉项数据
     * - others? - 配置 UI 组件库扩展属性
     */
    forms?: Array<{
      /**
       * 配置搜索的类型
       */
      type?: undefined | "input" | "select" | "select-search" | "date" | "daterange" | "slot" | "hidden";
      /**
       * 配置搜索的字段
       */
      field: string;
      /**
       * 配置搜索的标题
       */
      label: string;
      /**
       * 配置下拉项数据
       */
      options?: Array<{label: string; value: string | number}>;
      /**
       * 配置 UI 组件库扩展属性
       */
      others?: any;
    }>;
  };
  /**
   * 配置状态栏
   * - prop - 配置状态栏表单值
   * - items - 配置状态栏元素
   */
  status?: {
    /**
     * 配置状态栏表单值
     */
    prop: string;
    /**
     * 配置状态栏元素
     * - name - 配置状态栏元素名称
     * - value - 配置状态栏元素值
     * - total? - 配置状态栏元素总数
     */
    items: Array<{
      /**
       * 配置状态栏元素名称
       */
      name: string;
      /**
       * 配置状态栏元素值
       */
      value: string | number;
      /**
       * 配置状态栏元素总数
       */
      total?: string | number;
    }>;
  };
  /**
   * 配置工具栏
   * - leftOperates? - 配置左侧操作元素
   * - rightOperates? - 配置右侧操作元素
   */
  toolbar?: {
    /**
     * 配置左侧操作元素
     * - name - 配置操作元素名称
     * - split? - 配置操作元素分割线
     * - others? - 配置 UI 组件库扩展属性
     */
    leftOperates?: Array<{
      /**
       * 配置操作元素名称
       */
      name: string;
      /**
       * 配置操作元素分割线
       */
      split?: boolean;
      /**
       * 配置 UI 组件库扩展属性
       * - hidden? - 显示隐藏
       * - permission? - 权限节点
       * - [key: string] - 其他
       */
      others?: {
        /**
         * 显示隐藏
         */
        hidden?: boolean;
        /**
         * 权限节点
         */
        permission?: string;
        [key: string]: any;
      };
    }>;
    /**
     * 配置右侧操作元素
     * - name - 配置操作元素名称
     * - others? - 配置 UI 组件库扩展属性
     */
    rightOperates?: Array<{
      /**
       * 配置操作元素名称
       */
      name: string;
      /**
       * 配置 UI 组件库扩展属性
       * - hidden? - 显示隐藏
       * - permission? - 权限节点
       * - [key: string] - 其他
       */
      others?: {
        /**
         * 显示隐藏
         */
        hidden?: boolean;
        /**
         * 权限节点
         */
        permission?: string;
        [key: string]: any;
      };
    }>;
  };
  /**
   * 配置表格
   * - data - 表格数据
   * - selectedType? - 表格选中类型 "checkbox" | "radio" | undefined
   * - selectedRows? - 选中的表格数据
   * - columns - 表格项配置
   * - others? - 配置 UI 组件库扩展属性
   */
  table: {
    /**
     * 表格数据
     */
    data: Array<any>;
    /**
     * 表格选中类型
     */
    selectedType?: "checkbox" | "radio" | undefined;
    /**
     * 选中的表格数据
     */
    selectedRows?: Array<any>;
    /**
     * 表格项配置
     * - type? - 配置列类型 undefined | "slot"
     * - title - 配置列标题
     * - dataIndex - 配置列属性
     * - width? - 配置列宽度
     * - align? - 配置列对齐方式
     * - others? - 配置 UI 组件库扩展属性
     */
    columns: Array<{
      /**
       * 配置列类型
       */
      type?: undefined | "slot";
      /**
       * 配置列标题
       */
      title: string;
      /**
       * 配置列属性
       */
      dataIndex: string;
      /**
       * 配置列宽度
       */
      width?: number;
      /**
       * 配置列对齐方式
       */
      align?: "left" | "center" | "right";
      /**
       * 配置 UI 组件库扩展属性
       */
      others?: {
        /**
         * 配置是否显示省略号
         */
        ellipsis?: boolean;
        /**
         * 配置是否显示提示信息
         */
        tooltip?: boolean;
        /**
         * 配置扩展属性
         */
        [key: string]: any;
      };
    }>;
    /**
     * 配置 UI 组件库扩展属性
     */
    others?: any;
  };
  /**
   * 配置底部栏
   * - operates? - 配置左侧操作元素
   * - pagination? - 配置右侧分页
   */
  footer?: {
    /**
     * 配置左侧操作元素
     * - name - 配置操作元素名称
     * - others? - 配置 UI 组件库扩展属性
     */
    operates?: Array<{
      /**
       * 配置操作元素名称
       */
      name: string;
      /**
       * 配置 UI 组件库扩展属性
       */
      others?: any;
    }>;
    /**
     * 配置右侧分页
     * - props? - 配置自定义分页参数属性
     * - total - 配置分页总数
     * - page? - 配置默认当前分页
     * - size? - 配置默认页数
     * - pageSizes? - 配置可选择的每页数量
     * - others? - 配置 UI 组件库扩展属性
     */
    pagination: {
      /**
       * 配置自定义分页参数属性
       */
      props?: {
        page?: string;
        size?: string;
      };
      /**
       * 配置分页总数
       */
      total: number;
      /**
       * 配置默认当前分页
       */
      page?: number;
      /**
       * 配置默认页数
       */
      size?: number;
      /**
       * 配置可选择的每页数量
       */
      pageSizes?: Array<number>;
      /**
       * 配置 UI 组件库扩展属性
       */
      others?: any;
    };
  };
}
