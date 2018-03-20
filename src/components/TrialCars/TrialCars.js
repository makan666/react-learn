import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavBar, Icon} from 'antd-mobile';
import {getTrialCarList} from '../../model/actions/trialCars';
import './TrialCars.scss'
import SearchBar from '../SearchBar/SearchBar';
import InfiniteScroll from 'react-infinite-scroll-component'


class TrialCars extends React.Component {

    static propTypes = {
        trialCars: PropTypes.object
    };

    componentDidMount() {
        this.props.getTrialCarList(1);
    }

    getImgUrl(key) {
        return 'http://qiniu-cdn.carhot.cn/' + key + '?imageView/2/w/176/h/132'
    }

    loadNextFunc() {
        let page = this.props.trialCars.pageNum;
        if (this.props.trialCars.hasMore) {
            this.props.getTrialCarList(page)
        }
    }

    render() {
        const trialCars = this.props.trialCars;
        if (trialCars && trialCars.data) {
            const list = trialCars.data.map((item, index) => {
                return (
                    <div key={index} className='item'>
                        <img className="car-img" src={this.getImgUrl(item.cover)}/>
                        <div className="car-info">
                            <div className="display-name">{item.displayName}</div>
                            <div className="subtitle"><span className="price">{item.price}</span>元享试驾，{item.subTitle}
                            </div>
                            <div className="car-shop">{item.carShopName}</div>
                        </div>
                    </div>
                )
            })
            return (
                <div className='trial-cars'>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left"/>}
                        leftContent="返回"
                        onLeftClick={() => this.props.history.goBack()}
                        rightContent={[
                            <Icon key="0" type="ellipsis" style={{marginRight: '16px'}}/>
                        ]}
                    >试驾</NavBar>
                    <SearchBar placeholder='搜索'></SearchBar>
                    <InfiniteScroll
                        next={this.loadNextFunc.bind(this)}
                        scrollThreshold='1'
                        hasMore={this.props.trialCars.hasMore}
                        loader={<div className="bottom-area"><img src={require('../../assets/img/loading.svg')}/></div>}
                        endMessage={<div className="bottom-area"><div className="no-more">没有更多了</div></div>}
                    >{list}
                    </InfiniteScroll>
                </div>
            )
        }
        return (
            <div className='trial-cars'>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left"/>}
                    leftContent="返回"
                    onLeftClick={() => this.props.history.goBack()}
                    rightContent={[
                        <Icon key="0" type="ellipsis" style={{marginRight: '16px'}}/>
                    ]}
                >试驾</NavBar>
                <div className='center'>加载中...</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    trialCars: state.trialCars
});

const mapDispatchToProps = {
    getTrialCarList
};

export default connect(mapStateToProps, mapDispatchToProps)(TrialCars);