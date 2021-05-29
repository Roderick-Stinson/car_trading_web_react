import {useEffect} from "react";
import $http from "../Utils";
import {removeToken} from "../reducer/TokenReducer";
import {useHistory} from "react-router-dom";

const ManageSystem = () => {

    const history = useHistory()

    useEffect(() => {
        $http.get('/api/user')
            .then(res => {
                if (res.data['code'] === 401) {
                    removeToken()
                    history.push('/management/login')
                }
            }, [])
    })

    return (
        <div>
            manage system
        </div>
    )
}

export default ManageSystem