import request from "@/packages/axios";

export function getAccountList(params) {
    return request({
        url: "/account/list",
        method: "get",
        params,
    });
}

export const getInformation = (params) => {
    return request({
        url: "/information/list",
        method: "get",
        params,
    });
};
