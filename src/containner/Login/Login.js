import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavBar, Icon, List, InputItem, WhiteSpace, Button} from 'antd-mobile';
import {login} from '../../model/actions/login';
import {createForm} from 'rc-form';
import store from '../../model';
import './Login.scss'

class Login extends React.Component {

    static propTypes = {
        userInfo: PropTypes.object
    };

    handleClick = () => {
        let phone = this.props.form.getFieldsValue().phone
        let code = this.props.form.getFieldsValue().code
        this.props.login(phone, code)

    }

    componentWillUpdate() {
        if (store.getState().userInfo.data && store.getState().userInfo.data.authenticationToken) {
            // console.log(store.getState().userInfo)
            this.props.history.goBack()
        }
    }

    render() {
        const {getFieldProps} = this.props.form;
        return (
            <div className='login-page'>
                <NavBar
                    mode="dark"
                    leftContent="关闭"
                    onLeftClick={() => this.props.history.goBack()}
                    rightContent={[
                        <Icon key="0" type="ellipsis" style={{marginRight: '16px'}}/>
                    ]}
                >登录</NavBar>

                <List>
                    <InputItem
                        {...getFieldProps('phone')}
                        clear
                        placeholder="请输入手机号"
                        ref={el => this.autoFocusInst = el}
                        value='13212345678'
                    >用户名</InputItem>
                    <InputItem
                        {...getFieldProps('code')}
                        clear
                        placeholder="请输入验证码"
                        ref={el => this.customFocusInst = el}
                        value='000000'
                    >验证码</InputItem>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <Button className='login-btn' type="primary" onClick={this.handleClick}>登录</Button>
                </List>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.userInfo
});

const mapDispatchToProps = {
    login
};

const LoginForm = createForm()(Login);
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);