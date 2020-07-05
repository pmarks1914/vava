import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import {connect} from 'react-redux';
import Constants from "../../Utils/Constants";
import $ from 'jquery'

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config for different usergroups
import admin_navigation from '../../admin_navigation';

// routes config for different user groups
import admin_routes from '../../routes_admin';


import { getUserAsync } from '../../actions/userActions';
import usersData from '../../views/Users/UsersData';

import swal from 'sweetalert2';
import { Spinner } from 'reactstrap';

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

let usersSessionData  = localStorage.getItem('sessionInfo');
let usersSessionRole  = localStorage.getItem('sessionInfo.role');
// let sessionRouteGaurd = localStorage.getItem("sessionInfo");


class DefaultLayout extends Component {

  loading = () => <> </>;
  Spinner = () => <Spinner />;
  
  signOut(e) {
    e.preventDefault()
    // this.props.history.push('/login')
    localStorage.removeItem("currentUser");
    window.location.href="/login";
  }y


  render() {
    let navigation = {}
    let routes = {} 
    
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    // currentUser?.role === 'ADMIN' || currentUser?.role === 'SUPER_ADMIN'

    if (currentUser?.errCode === 200){
      routes = admin_routes;
      navigation = admin_navigation;
    }
    else {
      window.location.href="/login";
    }
    
    // swal.fire({
    //   timer: 3000,
    //   background: '#ffffff00',
    //   onBeforeOpen: () => {
    //     swal.showLoading()
    //   }
    // })
    

    return (
      <div className="app">
        
        <AppHeader fixed style={{backgroundColor: '#0000ff' }} >
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
{/* 
          <AppSidebar fixed display="lg" style={{backgroundColor: '#000' }} >
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
            <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar> */}

          <main className="main">

            {
              this.props.user.role === Constants.admin 
              ?
              <AppBreadcrumb appRoutes={routes} router={router}/>
              :
              null
          }
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>

            </Container>
          </main>

          {/* <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside> */}
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  
  let usersData = usersSessionData;
  // return {
  //   user : state.login,
  // }
  return {
    user : usersData || {},
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser : (name) => dispatch(getUserAsync(name)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);