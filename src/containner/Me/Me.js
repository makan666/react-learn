import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {List} from 'antd-mobile';
import {login} from '../../model/actions/login';
import './Me.scss'

const Item = List.Item;
const Brief = Item.Brief;

class Me extends React.Component {

    static propTypes = {
        userInfo: PropTypes.object
    };

    componentWillMount() {
        console.log(this.props.userInfo)
    }

    render() {
        return (
            <div className='me-page'>
                <List className='avatar'>
                    <Item arrow="horizontal" thumb={require('../../assets/img/img-default-avatar.svg')} multipleLine onClick={() => {}}>
                        未设置昵称
                        <Brief>看车号：{this.props.userInfo.data.carOwnerNumber || '000000'}</Brief>
                    </Item>
                </List>
                <List className='list-item'>
                    <Item className='border-bottom' thumb={require('../../assets/img/me/ico-mycar.svg')} arrow="horizontal" onClick={() => {}}>
                        我的车
                    </Item>
                    <Item className='border-bottom' thumb={require('../../assets/img/me/ico-wallet.svg')} arrow="horizontal" onClick={() => {}}>
                        钱包
                    </Item>
                    <Item thumb={require('../../assets/img/me/ico-coupon.svg')} arrow="horizontal" onClick={() => {}}>
                        卡券
                    </Item>
                </List>
                <List className=''>
                    <Item thumb={require('../../assets/img/me/ico-order.svg')} arrow="horizontal" onClick={() => {}}>
                        订单
                    </Item>
                </List>
                <List className=''>
                    <Item thumb={require('../../assets/img/me/ico-settings.svg')} arrow="horizontal" onClick={() => {}}>
                        设置
                    </Item>
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

export default connect(mapStateToProps, mapDispatchToProps)(Me);