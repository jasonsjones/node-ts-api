import * as debug from 'debug';
import app from './config/App';

const log = debug('app');

const PORT = process.env.PORT || 3000;

const startServer = () => {
    app.listen(PORT, () => {
        log(`App is running on http://localhost:${PORT}/api`);
    });
};

startServer();
