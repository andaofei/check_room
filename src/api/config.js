/**
 * Created by 23535 on 2018/6/6.
 */
import axios from 'axios'

// 拦截请求
axios.interceptors.request.use(function(config){
    console.log('进行中')
    return config
})

// 拦截响应
axios.interceptors.response.use(function(config){
    console.log('完毕')
    return config
})