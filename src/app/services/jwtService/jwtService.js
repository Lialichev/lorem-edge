import axios from 'axios';
import Utils from "../../../@theme/utils";

class jwtService extends Utils.EventEmitter {

    init() {
        this.setDefaultHeaders();
        this.setInterceptors();
        this.handleAuthentication();
    }

    setDefaultHeaders = () => {
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['accept'] = 'application/json';
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        axios.defaults.baseURL = `${process.env.REACT_APP_API_SERVER}`;
    };

    setInterceptors = () => {
        axios.interceptors.response.use(response => {
            return response;
        }, err => {
            return new Promise((resolve, reject) => {
                if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
                    // if you ever get an unauthorized response, logout the user
                    this.emit('onAutoLogout', 'Invalid access_token');
                    this.setSession(null);
                }
                throw err;
            });
        });
    };

    handleAuthentication = () => {

        let access_token = this.getAccessToken();

        if (!access_token) {
            this.emit('onNoAccessToken');

            return;
        }

        if (access_token) {
            this.setSession(access_token);
            this.emit('onAutoLogin', true);
        } else {
            this.setSession(null);
            this.emit('onAutoLogout', 'access_token expired');
        }
    };

    signInWithEmailAndPassword = ({ email, password }) => {
        return new Promise((resolve, reject) => {
            if (email === 'user@gmail.com' && password === '12345') {
                const token = 'asdgas6d7agsdagsdtga76d';
                this.setSession(token);
                resolve({
                    firstName: 'User',
                    lastName: 'User',
                    email: 'user@gmail.com',
                    isAdmin: false
                });
            } else {
                reject();
            }

            // axios.post('/auth', {
            //     email: email,
            //     password: password
            // })
            //     .then(response => {
            //         if (response.data) {
            //             this.setSession(response.data.token);
            //             resolve(response.data);
            //         } else {
            //             reject();
            //         }
            //     })
            //     .catch(() => reject())
        });
    };

    signInWithToken = () => {
        return new Promise((resolve, reject) => {
            resolve({
                firstName: 'User',
                lastName: 'User',
                email: 'user@gmail.com',
                isAdmin: false
            });

            // axios.get('/auth')
            //     .then(response => {
            //         if (response.data) {
            //             resolve(response.data);
            //         } else {
            //             this.logout();
            //             reject('Failed to login');
            //         }
            //     })
            //     .catch(error => {
            //         this.logout();
            //         reject('Failed to login');
            //     });
        });
    };

    updateUserData = (user) => {
        return axios.post('/auth/user/update', {
            user: user
        });
    };

    setSession = access_token => {
        if ( access_token ) {
            localStorage.setItem('jwt_access_token', access_token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        } else {
            localStorage.removeItem('jwt_access_token');
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    logout = () => {
        this.setSession(null);
    };

    // isAuthTokenValid = access_token => {
    //     if ( !access_token )
    //     {
    //         return false;
    //     }
    //     const decoded = jwtDecode(access_token);
    //     const currentTime = Date.now() / 1000;
    //     if ( decoded.exp < currentTime )
    //     {
    //         console.warn('access token expired');
    //         return false;
    //     }
    //     else
    //     {
    //         return true;
    //     }
    // };

    getAccessToken = () => {
        return window.localStorage.getItem('jwt_access_token');
    };
}

const instance = new jwtService();

export default instance;
