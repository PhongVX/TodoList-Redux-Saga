import axiosService from '../commons/axiosService'

import {API_ENDPOINT} from '../constants'

//http://localhost:3000/tasks
const url ='/tasks'

const fetchListTask = ()=>{
    return axiosService.get(`${API_ENDPOINT}/${url}`)
}