import request from "@/packages/axios";

export const getAccountList = (params: any) => request.get("/account/list", {params});
export const getInformation = (data: any) => request.post("/information/list", data);
