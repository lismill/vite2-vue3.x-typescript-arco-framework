import request from "@/packages/axios";

export const getTableList = (params: any) => request.get("/api/getTableList", {params});
export const getDictList = (params: any) => request.get("/api/getDictList", {params});
export const getSearchRemoteList = (params: any) => request.get("/api/getSearchRemoteList", {params});
