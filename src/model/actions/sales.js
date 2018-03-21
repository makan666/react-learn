/*
在ActionCreator里面完成数据的获取与处理的工作。并且通过向store发送各个组合的action，从而达到控制界面展示的内容实现交互。
 */
export const CRUD_GET_SALES_LOADING = 'CRUD_GET_SALES_LOADING';
export const CRUD_GET_SALES_FAILURE = 'CRUD_GET_SALES_FAILURE';
export const CRUD_GET_SALES_SUCCESS = 'CRUD_GET_SALES_SUCCESS';

export function getListLoading(loading) {
    return {
        type: CRUD_GET_SALES_LOADING,
        payload: loading
    }
}
export function getListSuccess(data) {
    return {
        type: CRUD_GET_SALES_SUCCESS,
        payload: data
    }
}

export function getListFailure(error) {
    return {
        type: CRUD_GET_SALES_FAILURE,
        payload: error
    }
}

export function getSalesList(page) {
    return function (dispatch) {
        // 假接口，看看就行
        dispatch(getListLoading(true));
        fetch(`http://127.0.0.1:3000/api/sales?format=json&page=${page}`, {method: 'get', type: 'json'})
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
