import * as express from 'express';

interface IJSONResponse {
    success: boolean;
    message: string;
    payload?: object;
}

class RouterConfig {
    public static configRoutes(app: express.Application): void {
        app.get('/api', (req: express.Request, res: express.Response) => {
            const response: IJSONResponse = {
                success: true,
                message: 'Hello from TypeScript...',
                payload: null
            };

            res.json(response);
        });
    }
}

export default RouterConfig;
