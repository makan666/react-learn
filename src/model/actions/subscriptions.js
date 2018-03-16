/*
在ActionCreator里面完成数据的获取与处理的工作。并且通过向store发送各个组合的action，从而达到控制界面展示的内容实现交互。
 */
export const CRUD_GET_SUBSCRIPTIONS_FAILURE = 'CRUD_GET_SUBSCRIPTIONS_FAILURE';
export const CRUD_GET_SUBSCRIPTIONS_SUCCESS = 'CRUD_GET_SUBSCRIPTIONS_SUCCESS';

export function getSubscriptionsSuccess(data) {
    return {
        type: CRUD_GET_SUBSCRIPTIONS_SUCCESS,
        payload: data
    }
}

export function getSubscriptionsFailure(error) {
    return {
        type: CRUD_GET_SUBSCRIPTIONS_FAILURE,
        payload: error
    }
}

export function getSubscriptions() {
    return function (dispatch) {
        // 假接口，看看就行
        fetch('http://127.0.0.1:3000/api/subscriptions.json', {method: 'get', type: 'json'})
            .then((res) => {
              res.json().then(function (data) {
                // 这里可以格式化数据，可以使用normalizr等辅助工具处理数据
                dispatch(getSubscriptionsSuccess(data));
              })
            })
            .catch((error) => {
                dispatch(getSubscriptionsFailure(error));
            });
    }
}
