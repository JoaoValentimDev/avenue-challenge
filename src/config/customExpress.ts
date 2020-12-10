import express from 'express';
import { userRoute }  from '../routes/user.routes';
import bodyParser from 'body-parser';

export const customExpress = () => {
    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json());

    userRoute(app);
    return app;
};