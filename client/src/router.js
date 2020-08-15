import React, { Suspense, useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import UserContext from './Context';
import ErrorBoundary from './ErrorBoundary';

import App from './App';
import Navigation from './components/navigation';
import ArticleContainer from './components/article/article-container';
import RegisterPage from './pages/user/register';
import LoginPage from './pages/user/login';
import CircularIndeterminate from './components/loading-spinner/index';

const ProfilePage = React.lazy(() => import('./pages/profile'));
const AboutUs = React.lazy(() => import('./pages/about-us'));
const NotFound = React.lazy(() => import('./components/notFound'));

const CreateArticle = React.lazy(() => import('./pages/admin/articles/create'));
const ManageCategories = React.lazy(() => import('./pages/admin/categories/landing'));
const CreateCategory = React.lazy(() => import('./pages/admin/categories/create'));
const ManageUsers = React.lazy(() => import('./pages/admin/users/landing'));
const CreateUser = React.lazy(() => import('./pages/admin/users/create'));
const ManageArticles = React.lazy(() => import('./pages/admin/articles/landing'));
const EditArticle = React.lazy(() => import('./pages/admin/articles/edit'));
const ArticleDetails = React.lazy(() => import('./components/article/article-details'));

const Router = () => {
    const context = useContext(UserContext);

    const loggedIn = context.user.loggedIn;
    const role = context.user.role;

    return (
        <BrowserRouter>
            <ErrorBoundary>
                <Navigation />
                <Suspense fallback={<CircularIndeterminate />}>
                    <Switch>
                        <Route path="/" exact component={App} />
                        <Route path="/article/details/:id" component={ArticleDetails} />
                        <Route path="/article/all" component={ArticleContainer} />
                        <Route path="/about-us" component={AboutUs} />

                        <Route path="/register">
                            {loggedIn ? (<Redirect to='/' />) : (<RegisterPage />)}
                        </Route>
                        <Route path="/login">
                            {loggedIn ? (<Redirect to='/' />) : (<LoginPage />)}
                        </Route>
                        <Route path="/profile/:id">
                            {loggedIn ? (<ProfilePage />) : (<Redirect to='/login' />)}
                        </Route>
                        <Route path="/admin/articles">
                            {(loggedIn && (role === 'admin')) ? (<ManageArticles />) : (<Redirect to='/NotFound' />)}
                        </Route>
                        <Route path="/admin/article/create">
                            {(loggedIn && (role === 'admin')) ? (<CreateArticle />) : (<Redirect to='/NotFound' />)}
                        </Route>
                        <Route path="/admin/article/edit/:id">
                            {(loggedIn && (role === 'admin')) ? (<EditArticle />) : (<Redirect to='/NotFound' />)}
                        </Route>
                        <Route path="/admin/users">
                            {(loggedIn && (role === 'admin')) ? (<ManageUsers />) : (<Redirect to='/NotFound' />)}
                        </Route>
                        <Route path="/admin/user/create">
                            {(loggedIn && (role === 'admin')) ? (<CreateUser />) : (<Redirect to='/NotFound' />)}
                        </Route>
                        <Route path="/admin/category/create">
                            {(loggedIn && (role === 'admin')) ? (<CreateCategory />) : (<Redirect to='/NotFound' />)}
                        </Route>
                        <Route path="/admin/categories">
                            {(loggedIn && (role === 'admin')) ? (<ManageCategories />) : (<Redirect to='/NotFound' />)}
                        </Route>
                        <Route path="/admin">
                            {(loggedIn && (role === 'admin')) ? (<ManageArticles />) : (<Redirect to='/NotFound' />)}
                        </Route>

                        <Route component={NotFound} />
                    </Switch>
                </Suspense>
            </ErrorBoundary>
        </BrowserRouter>
    )
}

export default Router;