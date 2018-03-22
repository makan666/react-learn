/*
在ActionCreator里面完成数据的获取与处理的工作。并且通过向store发送各个组合的action，从而达到控制界面展示的内容实现交互。
 */
export const CHANGE_SELECTED = 'CHANGE_SELECTED';

export function changeSelected(selected) {
    return {
        type: CHANGE_SELECTED,
        payload: selected
    }
}

export function selectedTab(selected) {
    return function (dispatch) {
        dispatch(changeSelected(selected));
    }
}
