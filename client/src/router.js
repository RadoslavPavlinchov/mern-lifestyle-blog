import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Navigation from './components/navigation';

import ArticleContainer from './components/article/article-container';
import NotFound from './components/notFound';
import Register from './components/user/register';
import Login from './components/user/login';

// ToDo: Make more lazy loaded components 
const LazyArticleSingle = React.lazy(() => import('./components/article/article-single'))

const Router = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/article/details/:id" component={LazyArticleSingle} />
                    <Route path="/article/all" component={ArticleContainer} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;