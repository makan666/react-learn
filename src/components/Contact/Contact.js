import React from 'react';
import { List } from 'antd-mobile';
const Item = List.Item;
import './Contact.scss'

class Contact extends React.Component {

  render() {
    return (
        <div className='contact-page'>
          <List className=''>
            <Item thumb={require('../../assets/img/contact/my-favorite.svg')} arrow="horizontal" onClick={() => {}}>
              我的收藏
            </Item>
          </List>
          <List className='contact-page'>
            <Item className='border-bottom' thumb={require('../../assets/img/contact/car-friends.svg')} onClick={() => {}} arrow="horizontal">
              好有车
            </Item>
            <Item thumb={require('../../assets/img/contact/app-account.svg')} onClick={() => {}} arrow="horizontal">
              应用号
            </Item>
          </List>
        </div>
    )
  }
}

export default Contact;