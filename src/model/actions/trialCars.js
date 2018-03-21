/*
在ActionCreator里面完成数据的获取与处理的工作。并且通过向store发送各个组合的action，从而达到控制界面展示的内容实现交互。
 */
export const CRUD_GET_LIST_LOADING = 'CRUD_GET_LIST_LOADING';
export const CRUD_GET_LIST_FAILURE = 'CRUD_GET_LIST_FAILURE';
export const CRUD_GET_LIST_SUCCESS = 'CRUD_GET_LIST_SUCCESS';

export function getListLoading(loading) {
    return {
        type: CRUD_GET_LIST_LOADING,
        payload: loading
    }
}
export function getListSuccess(data) {
    return {
        type: CRUD_GET_LIST_SUCCESS,
        payload: data
    }
}

export function getListFailure(error) {
    return {
        type: CRUD_GET_LIST_FAILURE,
        payload: error
    }
}

export function getTrialCarList(page) {
    return function (dispatch) {
        // 假接口，看看就行
        dispatch(getListLoading(true));
        fetch(`http://127.0.0.1:3000/api/trial_cars?format=json&page=${page}`, {method: 'get', type: 'json'})
            .then((res) => {
              res.json().then(function (data) {
                // 这里可以格式化数据，可以使用normalizr等辅助工具处理数据
                dispatch(getListSuccess(data));
              })
            })
            .catch((error) => {
                dispatch(getListLoading(false));
                dispatch(getListFailure(error));
            });
    }
}
