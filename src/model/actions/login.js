/*
在ActionCreator里面完成数据的获取与处理的工作。并且通过向store发送各个组合的action，从而达到控制界面展示的内容实现交互。
 */
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function loginLoading(loading) {
    return {
        type: LOGIN_LOADING,
        payload: loading
    }
}
export function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export function loginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

export function login(name, pwd) {
    return function (dispatch) {
        dispatch(loginLoading(true));
        // fetch(`http://127.0.0.1:3000/api/consumer?phone=${name}&code=${pwd}`, {method: "POST"})
        fetch('http://127.0.0.1:3000/api/consumer?phone=13212345678&code=000000', {method: "POST"})
            .then((res) => {
                res.json().then(function (data) {
                    dispatch(loginSuccess(data));
                })
            })
            .catch((error) => {
                dispatch(loginLoading(false));
                dispatch(loginFailure(error));
            });
    }
}
