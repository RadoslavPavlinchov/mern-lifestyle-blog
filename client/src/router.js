import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Navigation from './components/navigation';

import ArticleContainer from './components/article/article-container';
import NotFound from './components/notFound';
import RegisterPage from './pages/user/register';
import LoginPage from './pages/user/login';
import ProfilePage from './pages/profile';
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
                    <Route component={NotFound} />
                    {/* <Route component={ErrorPage} /> */}
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;