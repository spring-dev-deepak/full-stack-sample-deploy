import axios from 'axios'

const baseurl = 'http://localhost:8080/api'

class UserService {
    newUser(user) {
        return axios.post(baseurl + '/signup', user)
    }
}

export default new UserService()