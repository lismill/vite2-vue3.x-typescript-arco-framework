import {getDictList} from "@/api/common/table";
import {ILTable} from "@/components/l-table/interface";
import {ILFormDialog} from "@/components/l-form-dialog/interface";

export const tableConfig: ILTable = {
  request: getDictList,
  title: "字典列表",
  search: {
    data: {
      status: "0",
    },
    forms: [
      {
        type: "input",
        field: "name",
        label: "名称",
        others: {},
      },
      {
        type: "input",
        field: "code",
        label: "编码",
        others: {},
      },
      {
        type: "select",
        field: "status",
        label: "状态",
        options: [
          {label: "全部", value: "0"},
          {label: "启用", value: "1"},
          {label: "禁用", value: "2"},
        ],
      },
    ],
  },
  toolbar: {
    rightOperates: [{name: "新建字典", others: {type: "primary"}}, {name: "导出字典"}],
  },
  table: {
    data: [],
    columns: [
      {
        title: "名称",
        dataIndex: "name",
      },
      {
        title: "编码",
        dataIndex: "code",
      },
      {
        type: "slot",
        title: "状态",
        dataIndex: "status",
      },
      {
        title: "备注",
        dataIndex: "remark",
      },
      {
        title: "创建时间",
        dataIndex: "create_time",
      },
      {
        type: "slot",
        title: "操作",
        dataIndex: "operate",
        width: 165,
      },
    ],
    others: {
      size: "large",
    },
  },
  footer: {
    pagination: {
      props: {
        page: "currentPge",
        size: "pageSize",
      },
      total: 0,
      page: 1,
      size: 10,
      pageSizes: [10, 20, 30, 50, 100],
      others: {},
    },
  },
};

export const formConfig: ILFormDialog = {
  dialog: {
    title: "新建字典",
    visible: false,
    others: {
      width: 520,
    },
  },
  form: {
    operates: {
      centerShowResetButton: true,
    },
    data: {
      status: "1",
    },
  },
  sections: [
    {
      title: "",
      items: [
        {
          type: "input",
          label: "名称",
          name: "name",
          size: "large",
          info: "用于在页面上显示的名称",
          rules: [{required: true, message: "请输入类型名称"}],
        },
        {
          type: "radio",
          label: "状态",
          name: "status",
          size: "large",
          rules: [{required: true, message: "请选择类型状态"}],
          options: [
            {label: "启用", value: "1"},
            {label: "禁用", value: "2"},
          ],
        },
        {
          type: "textarea",
          label: "描述",
          name: "remark",
          size: "large",
          others: {
            maxLength: 255,
          },
        },
      ],
    },
  ],
};
