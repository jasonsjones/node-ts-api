import bodyParser from 'body-parser';
import { Application } from 'express';
import morgan from 'morgan';

import config from './config';

class MiddlewareConfig {
    public static configMiddleware(app: Application) {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        if (config.env === 'development') {
            app.use(morgan('dev'));
        }
    }
}

export default MiddlewareConfig;
