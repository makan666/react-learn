import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getSubscriptions} from '../../model/actions/subscriptions';
import { List } from 'antd-mobile';
import moment from 'moment';
import './Home.scss'
import SearchBar from '../../components/SearchBar/SearchBar';

const Item = List.Item;
const Brief = Item.Brief;

class Home extends React.Component {
    static propTypes = {
        subscriptions: PropTypes.object
    };

    componentDidMount() {
        this.props.getSubscriptions();
    }

    pushTo(name) {
        switch (name) {
            case '车商城':
                return '/sales';
            case '试驾':
                return '/trial-cars';
            case '车头条':
                return '';
            case '活动':
                return '';
        }
    }

    render() {
        const subscriptions = this.props.subscriptions;
        if (subscriptions && subscriptions.data) {
            const list = subscriptions.data.map((item, index) => {
                return (
                    <Link to={this.pushTo(item.name)} key={index}>
                        <Item extra={moment(item.latestMsgAt).format('YYYY-MM-DD')}
                              align="top" thumb={require('../../'+item.logo)} multipleLine onClick={() => {}}>
                            {item.name}
                            <Brief>{item.latestMsg}</Brief>
                        </Item>
                    </Link>
                )

            });
            return (
                <div>
                    <SearchBar placeholder='搜索'></SearchBar>
                    <List className='home-page'>{list}</List>
                </div>
            )

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