import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavBar, Icon, List, InputItem} from 'antd-mobile';
import {login} from '../../model/actions/login';
import { createForm } from 'rc-form';

class Login extends React.Component {

    static propTypes = {
        userInfo: PropTypes.object
    };

    handleClick = () => {
        let phone = this.props.form.getFieldsValue().phone
        let code = this.props.form.getFieldsValue().code
        this.props.login(phone, code)
    }

    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className='trial-cars'>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left"/>}
                    leftContent="返回"
                    onLeftClick={() => {}}
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
                    >用户名</InputItem>
                    <InputItem
                        {...getFieldProps('code')}
                        clear
                        placeholder="请输入验证码"
                        ref={el => this.customFocusInst = el}
                    >验证码</InputItem>
                    <List.Item>
                        <div
                            style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                            onClick={this.handleClick}
                        >登录
                        </div>
                    </List.Item>
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