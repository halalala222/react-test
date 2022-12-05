import { AxiosError } from "axios"

export const handleResponseFailed = (err : AxiosError<{data? : any,msg : string,code : number}>) => {
    const {code : ClientErrorCode} = err

    console.log(err)

    const Err = err?.response?.data

    switch (ClientErrorCode) {
        case 'ERR_NETWORK':
          alert('网络异常，请检查网络环境')
          break;
        case 'ECONNABORTED':
          alert('请求超时，请检查网络环境')
          break;
        default:
          if(Err) alert('同步失败')
      }
    return Promise.reject(err.response?.data)    
}