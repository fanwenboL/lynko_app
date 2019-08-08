import React from 'react';
import styles from './index.less';
import { Layout, Row, Col } from 'antd';
import Header from 'antd/lib/calendar/Header';

class Index extends React.Component {
    render() {
        const { Header, Content, Footer } = Layout;
        return (
            <Layout>
                <Header>
                    <div >
                        {/* <div className={styles.add}>
                            awdadaada
                        </div> */}
                    </div>
                </Header>
                <Layout>
                    <Content>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Index;
