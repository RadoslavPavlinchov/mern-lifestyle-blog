import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
// import ErrorPage from './components/error';

// ToDo: Make more lazy loaded components 
const LazyArticleSingle = React.lazy(() => import('./components/article/article-single'))

const Router = () => {
    return (
        <BrowserRouter>
            <Navigation />
            {/* Add component for the loading */}
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/article/details/:id" component={LazyArticleSingle} />
                    <Route path="/article/all" component={ArticleContainer} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/profile/:id" component={ProfilePage} />

                    <Route path="/admin/articles" component={ManageArticles} />
                    <Route path="/admin/users" component={ManageUsers} />
                    <Route path="/admin/article/create" component={CreateArticle} />
                    <Route path="/admin/category/create" component={CreateCategory} />
                    <Route path="/admin/user/create" component={CreateUser} />
                    <Route path="/admin/categories" component={ManageCategories} />
                    <Route path="/admin" component={ManageArticles} />

                    <Route component={NotFound} />
                    {/* <Route component={ErrorPage} /> */}
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;