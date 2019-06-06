import axios from 'axios'

export default function Request(url,params) {
    return axios({
        baseURL:"https://wd4782151544jfcwop.wilddogio.com/",
        url:url,
        method:'get',
        ...params
    });
}