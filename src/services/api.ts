import axios from "axios";

export class Api {
    private readonly axios = axios

    async get(url: string){
        const { data } = await this.axios.get(url);
        return data;
    }

    async post(url: string, param: any){
        const { data } = await this.axios.post(url, param);
        return data;
    }
}