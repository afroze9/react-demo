/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Avatar, Badge, Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { AppBreadcrumbs } from './components/AppBreadcrumbs';
import { AppSidenav } from './components/AppSidenav';
import './index.css';

export function App() {
  const { i18n } = useTranslation();
  const { Header, Content, Sider, Footer } = Layout;

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <div className="logo"></div>
          <div className="user-image">
            <Badge count={10}>
              <Avatar
                size={40}
                shape="square"
                icon={<UserOutlined />}
                src="https://placekitten.com/40/40"
              />
            </Badge>
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <AppSidenav></AppSidenav>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <AppBreadcrumbs></AppBreadcrumbs>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route component={NotFoundPage} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>

      <GlobalStyle />
    </BrowserRouter>
  );
}
