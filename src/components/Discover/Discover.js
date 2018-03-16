import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getTrialCarList} from '../../model/actions/trialCars';

class Discover extends React.Component {
  static propTypes = {
    trialCars: PropTypes.object
  };

  componentDidMount() {
    this.props.getTrialCarList();
  }

  render() {
    const trialCars = this.props.trialCars;
    if (trialCars && trialCars.data) {
      const list = trialCars.data.map((item, index) => {
        return <div key={index}>{item.displayName}</div>
      })
      return <div>{list}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Discover);