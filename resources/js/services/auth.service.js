import axios from 'axios';

export const authService = {
    login,
    logout,
    register
}

function login(email, password, rememberMe){
    
    console.log(email, password, rememberMe);
    await axios
        .post("/auth/login", {
          data: {
              email,
              password
          },
          rememberMe
        })
        .then(handleResponse).
        then(user => {
            if(user.token) {
                localStorage.setItem('user', JSON.stringify(user))
            }
            return user;
        });
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) {

    await axios
        .post("/auth/register", {
          params: user
        })
        .then(response => {
          console.log("register success response");
          console.log(response);
        })
        .catch(error => {
          console.log("register error response");
          console.log(error);
        });
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
