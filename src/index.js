import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
    <Auth0Provider
        domain="dev-8p41wq2fwxclsyum.us.auth0.com"
        clientId="XStcRH0Zoy6qkf91osuTsGy4GONKefQA"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}>
        <App />
    </Auth0Provider>,
    document.getElementById('root')
);

