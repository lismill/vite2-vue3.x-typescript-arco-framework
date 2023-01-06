import {getTableList} from "@/api/common/table";
import {ILTable} from "@/components/l-table/interface";

export const modalTableConfig: ILTable = {
  request: getTableList,
  title: "",
  search: {
    data: {},
    forms: [
      {type: "input", field: "input", label: "名称"},
      {
        type: "select",
        field: "select",
        label: "类型",
        options: [
          {label: "A", value: "a"},
          {label: "B", value: "b"},
          {label: "C", value: "c"},
        ],
      },
    ],
  },
  table: {
    data: [],
    selectedType: "checkbox",
    selectedRows: [],
    columns: [
      {title: "名称", dataIndex: "名称"},
      {title: "类型", dataIndex: "类型"},
      {title: "地区", dataIndex: "地区"},
      {title: "联系人", dataIndex: "联系人"},
      {title: "联系方式", dataIndex: "联系方式"},
    ],
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
    },
  },
};

export const selectedTableConfig: ILTable = {
  table: {
    data: [],
    columns: [
      {title: "名称", dataIndex: "名称"},
      {title: "类型", dataIndex: "类型"},
      {title: "地区", dataIndex: "地区"},
      {title: "联系人", dataIndex: "联系人"},
      {title: "联系方式", dataIndex: "联系方式"},
      {type: "slot", title: "操作", dataIndex: "operate", align: "center", width: 190},
    ],
  },
};
