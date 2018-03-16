import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getSubscriptions} from '../../model/actions/subscriptions';
import { List } from 'antd-mobile';
import moment from 'moment';
import './Home.scss'

const Item = List.Item;
const Brief = Item.Brief;

class Home extends React.Component {
    static propTypes = {
        subscriptions: PropTypes.object
    };

    componentDidMount() {
        this.props.getSubscriptions();
    }

    render() {
        const subscriptions = this.props.subscriptions;
        if (subscriptions && subscriptions.data) {
            const list = subscriptions.data.map((item, index) => {
                // return <div key={index}>{item.id}</div>
                console.log(item)
                return <Item key={index} extra={moment(item.latestMsgAt).format('YYYY-MM-DD')} align="top" thumb={require('../../'+item.logo)} multipleLine>
                                {item.name}
                                <Brief>{item.latestMsg}</Brief>
                            </Item>

            });
            return <List className='home-page'>{list}</List>
        }
        return <div>加载中。。。</div>;
    }
}

const mapStateToProps = (state) => ({
    subscriptions: state.subscriptions
});

const mapDispatchToProps = {
    getSubscriptions
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);