import request from '../utils/request'

export function fetch (data) {
    return request('http://localhost:4000/personalized/newsong')
}