import React from 'react';
import { List } from 'antd-mobile';
const Item = List.Item;
import './Discover.scss'

class Discover extends React.Component {

  render() {
      return (
          <div className='discover-page'>
            <List className=''>
              <Item thumb={require('../../assets/img/discovery/car-social.svg')} arrow="horizontal" onClick={() => {}}>
                车友圈
              </Item>
            </List>
            <List>
              <Item className='border-bottom' thumb={require('../../assets/img/discovery/scan.svg')} onClick={() => {}} arrow="horizontal">
                扫一扫
              </Item>
              <Item thumb={require('../../assets/img/discovery/bibi.svg')} arrow="horizontal">
                按喇叭
              </Item>
            </List>
            <List>
              <Item thumb={require('../../assets/img/discovery/nearby-car.svg')} arrow="horizontal">
                附近有车
              </Item>
            </List>
          </div>
      )
  }
}

export default Discover;