import * as express from 'express';

interface IJSONResponse {
    success: boolean;
    message: string;
    payload?: object;
}

class AppProvider {
    public static getInstance(): express.Application {
        this.configureRoutes();
        return AppProvider.app;
    }

    private static app: express.Application = express();

    private static configureRoutes(): void {
        AppProvider.app.get('/api', (req: express.Request, res: express.Response) => {
            const response: IJSONResponse = {
                success: true,
                message: 'Hello from TypeScript...',
                payload: null
            };

            res.json(response);
        });
    }
}

export default AppProvider.getInstance();
