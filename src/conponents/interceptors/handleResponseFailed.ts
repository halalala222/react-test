import { AxiosResponse } from "axios";

export const handleResponseSuccess =async (res:AxiosResponse) => {
    return Promise.resolve(res)
}
