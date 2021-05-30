import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import $http from "../Utils";
import {removeToken} from "../reducer/TokenReducer";

// 这个组件将根据登录的情况, 返回一个路由
// const PrivateRoute = ({component: Component, ...props}) => {
//     // 解构赋值 将 props 里面的 component 赋值给 Component
//     return <Route {...props} render={(p) => {
//         $http.get('/api/user')
//             .then(res => {
//                 if (res.data['code'] === 401) {
//                     removeToken()
//                     return <Redirect to={'/management/login'}/>
//                 }
//                 return <Component/>
//             })
//     }}/>
// }


const PrivateRoute = ({component, exact = false, path}) => {

    $http.get('/api/user')
        .then(res => {
            if (res.data['code'] === 401) {
                removeToken()
                return (
                    <Redirect to={'/management/login'}/>
                )
            } else {
                return (
                    <Route component={component} exact={exact} path={path}/>
                )
            }
        })

}

export default PrivateRoute