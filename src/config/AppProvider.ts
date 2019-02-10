import Express, { Application } from 'express';

import MiddlewareConfig from './MiddlewareConfig';
import RouterConfig from './RouterConfig';

class AppProvider {
    public static getInstance = (): Promise<Application> =>
        AppProvider.configureApp().then(() => AppProvider.app);

    private static app: Application = Express();

    private static configureApp = (): Promise<void> =>
        Promise.resolve().then(() => {
            MiddlewareConfig.configMiddleware(AppProvider.app);
            RouterConfig.configRoutes(AppProvider.app);
        });
}

export default AppProvider;
