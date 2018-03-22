import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {TabBar} from 'antd-mobile';
import Home from '../Home/Home';
import Discover from '../Discover/Discover';
import Contact from '../Contact/Contact';
import Me from '../Me/Me';
import {withRouter} from "react-router-dom";
import {NavBar, Icon} from 'antd-mobile';
import {login} from '../../model/actions/login';
import {selectedTab} from '../../model/actions/tabs';
import './Tabs.scss';

class Tabs extends React.Component {
    static propTypes = {
        userInfo: PropTypes.object,
        selected: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
            fullScreen: true,
        };
        this.props.selectedTab(this.props.selected.id || 'home')
    }

    renderContent(pageText) {
        return (
            <div style={{backgroundColor: 'white', height: '100%', textAlign: 'center'}}>
                <NavBar
                    mode="dark"
                    rightContent={[
                        <Icon key="0" type="ellipsis" style={{marginRight: '16px'}}/>
                    ]}
                >{pageText}</NavBar>
                {this.selectedShow(pageText)}
            </div>
        );
    }

    selectedShow(pageText) {
        switch (pageText) {
            case '看车':
                return <Home/>;
            case '车讯录':
                return <Contact/>;
            case '发现':
                return <Discover/>;
            case '我':
                return <Me/>;
            default:
                return <Home/>;
        }
    }

    render() {
        return (
            <div className={'tabs-page'} style={this.state.fullScreen ? {
                position: 'fixed',
                height: '100%',
                width: '100%',
                top: 0
            } : {height: '100%'}}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        icon={{uri: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg'}}
                        selectedIcon={{uri: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg'}}
                        title="看车"
                        key="看车"
                        selected={this.props.selected.id === 'home'}
                        onPress={() => {
                            this.props.selectedTab('home')
                        }}
                        data-seed="logId"
                    >
                        {this.renderContent('看车')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{uri: 'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg'}}
                        selectedIcon={{uri: 'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg'}}
                        title="车讯录"
                        key="车讯录"
                        selected={this.props.selected.id === 'contact'}
                        onPress={() => {
                            this.props.selectedTab('contact')
                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('车讯录')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{uri: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg'}}
                        selectedIcon={{uri: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg'}}
                        title="发现"
                        key="发现"
                        selected={this.props.selected.id === 'discover'}
                        onPress={() => {
                            this.props.selectedTab('discover')
                        }}
                    >
                        {this.renderContent('发现')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg'}}
                        selectedIcon={{uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'}}
                        title="我"
                        key="我"
                        selected={this.props.selected.id === 'me'}
                        onPress={() => {
                            if (this.props.userInfo.data.authenticationToken) {
                                this.props.selectedTab('me')
                            } else {
                                this.props.history.push("/login")
                            }
                        }}
                    >
                    {this.renderContent('我')}
                </TabBar.Item>
            </TabBar>
    </div>
    )
        ;
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.userInfo,
    selected: state.selected
});

const mapDispatchToProps = {
    login,
    selectedTab
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Tabs));