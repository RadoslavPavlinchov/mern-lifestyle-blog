import React, { lazy, Suspense, useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Navigation from './components/navigation';

import ArticleContainer from './components/article/article-container';
import NotFound from './components/notFound';
import RegisterPage from './pages/user/register';
import LoginPage from './pages/user/login';
import ProfilePage from './pages/profile';
// import AdminDashboard from './pages/admin/dashboard';
import CreateArticle from './pages/admin/articles/create';
import ManageCategories from './pages/admin/categories/landing';
import CreateCategory from './pages/admin/categories/create';
import ManageUsers from './pages/admin/users/landing';
import CreateUser from './pages/admin/users/create';
import ManageArticles from './pages/admin/articles/landing';
import EditArticle from './pages/admin/articles/edit';
import ArticleDetails from './components/article/article-details';
// import ErrorPage from './components/error';
import UserContext from './Context';

// ToDo: Make more lazy loaded components 
// const LazyArticleSingle = React.lazy(() => import('./components/article/article-single'))

const Router = () => {
    const context = useContext(UserContext);
    // console.log(context);

    const loggedIn = context.user.loggedIn;

    return (
        <BrowserRouter>
            <Navigation />
            {/* Add component for the loading */}
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/" exact component={App} />
                    {/* <Route path="/article/details/:id" component={LazyArticleSingle} /> */}
                    <Route path="/article/details/:id" component={ArticleDetails} />
                    <Route path="/article/all" component={ArticleContainer} />
                    <Route path="/register" component={RegisterPage} />

                    <Route path="/login">
                        {loggedIn ? (<Redirect to='/' />) : (<LoginPage />)}
                    </Route>

                    <Route path="/profile/:id" component={ProfilePage} />

                    {/* <Route path="/profile/:id">
                        {loggedIn ? (<ProfilePage />) : (<Redirect to='/login' />)} 
                    </Route> */}

                    <Route path="/admin/articles" component={ManageArticles} />
                    <Route path="/admin/users" component={ManageUsers} />
                    <Route path="/admin/article/create" component={CreateArticle} />
                    <Route path="/article/edit/:id" component={EditArticle} />
                    <Route path="/admin/category/create" component={CreateCategory} />
                    <Route path="/admin/user/create" component={CreateUser} />
                    <Route path="/admin/categories" component={ManageCategories} />

                    <Route path="/admin">
                        {loggedIn ? (<ManageArticles />) : (<Redirect to='/login' />)} 
                    </Route>

                    <Route component={NotFound} />
                    {/* <Route component={ErrorPage} /> */}
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;