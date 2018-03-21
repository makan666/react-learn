import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavBar, Icon} from 'antd-mobile';
import {getSalesList} from '../../model/actions/sales';
import './Sales.scss'
import SearchBar from '../../components/SearchBar/SearchBar';
import InfiniteScroll from 'react-infinite-scroll-component'


class Sales extends React.Component {

    static propTypes = {
        sales: PropTypes.object
    };

    componentDidMount() {
        this.props.getSalesList(1);
    }

    getImgUrl(key) {
        return 'http://qiniu-cdn.carhot.cn/' + key + '?imageView/2/w/176/h/132'
    }

    loadNextFunc() {
        let page = this.props.sales.pageNum;
        if (this.props.sales.hasMore) {
            this.props.getSalesList(page)
        }
    }

    render() {
        const sales = this.props.sales;
        if (sales && sales.data) {
            const list = sales.data.map((item, index) => {
                return (
                    <div key={index} className='item'>
                        <img className="car-img" src={this.getImgUrl(item.mainPhoto)}/>
                        <div className="car-info">
                            <div className="display-name">{item.title}</div>
                            <div className="subtitle"><span className="price">{item.downPayment}</span>元定金，{item.subTitle}
                            </div>
                            <div className="car-shop">{'距惠价:'+item.salePrice+'万元'}</div>
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
                    >车商城</NavBar>
                    <SearchBar placeholder='搜索'></SearchBar>
                    <InfiniteScroll
                        next={this.loadNextFunc.bind(this)}
                        scrollThreshold='1'
                        hasMore={this.props.sales.hasMore}
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
    sales: state.sales
});

const mapDispatchToProps = {
    getSalesList
};

export default connect(mapStateToProps, mapDispatchToProps)(Sales);