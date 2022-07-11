import axios from "axios";

function request(url,method='get',data) {
    return axios({
        url,
        method,
        data
    })
}

export function getArticles() {
    return request("/api/articles")
}