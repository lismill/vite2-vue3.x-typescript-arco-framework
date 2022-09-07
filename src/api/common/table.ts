import request from "@/packages/axios";

export function getTableList(params) {
    return request({
        url: "/api/getTableList",
        method: "get",
        params,
    });
}
export function getSearchRemoteList() {
    return request({
        url: "/api/getSearchRemoteList",
        method: "get",
    });
}
