import { createApp } from 'vue'
import App from './App.vue'
import {getConfig} from "./request/index";


const app = createApp(App)

app._context.route = {
    to(path,query={}){
        let queryStr = "?"
        for (let [k,v] of Object.entries(query)){
            queryStr += `${k}=${v}&`
        }
        window.location.hash="#"+path+queryStr.substr(0,queryStr.length-1)
    },
    query(){
        let str = window.location.hash
        let query = {}
        let queryStr = str.split("?")?.[1]
        if (!queryStr) return
        for (let kvStr of queryStr.split(/&/)){
            let [key,v] = kvStr.split("=")
            query[key] = v
        }
        return query
    }
}

getConfig().then(res=>{
    if (res.data.data){
        app._context.info = res.data.data
    }else {
        alert("异常啦，刷新下网页试试，或者联系站长！")
    }
})

app.mount("#app")
