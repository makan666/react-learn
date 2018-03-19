import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { NavBar, Icon } from 'antd-mobile';
import {getTrialCarList} from '../../model/actions/trialCars';
import './TrialCars.scss'
import SearchBar from '../SearchBar/SearchBar';

class TrialCars extends React.Component {
  static propTypes = {
    trialCars: PropTypes.object
  };

  componentDidMount() {
    this.props.getTrialCarList();
  }

  getImgUrl(key) {
    return 'http://qiniu-cdn.carhot.cn/' + key + '?imageView/2/w/176/h/132'
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
                  <div className="subtitle"><span className="price">{item.price}</span>元享试驾，{item.subTitle}</div>
                  <div className="car-shop">{item.carShopName}</div>
                </div>
              </div>
          )
      })
        return (
            <div className='trial-cars'>
              <NavBar
                  mode="dark"
                  icon={<Icon type="left" />}
                  leftContent="返回"
                  onLeftClick={() => this.props.history.goBack()}
                  rightContent={[
                    <Icon key="0" type="ellipsis" style={{ marginRight: '16px' }} />
                  ]}
              >试驾</NavBar>
              <SearchBar placeholder='搜索'></SearchBar>
              <div>{list}</div>
            </div>
        )
    }
    return <div>加载中。。。</div>;
  }
}

const mapStateToProps = (state) => ({
  trialCars: state.trialCars
});

const mapDispatchToProps = {
  getTrialCarList
};

export default connect(mapStateToProps, mapDispatchToProps)(TrialCars);