import axios from "axios";

export class Api {
    private readonly axios = axios

    async get(url: string, param?: any){
        const { data, status } = await this.axios.get(url, param);
        return {data, status};
    }

    async post(url: string, param: any){
        const { data, status } = await this.axios.post(url, param);
        return {data, status};
    }

    async put(url: string, param: any, {headers}: any) {
        const { data, status } = await this.axios.put(url, param, {headers});
        return {data, status};
    }
}