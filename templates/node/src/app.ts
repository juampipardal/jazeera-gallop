import 'reflect-metadata';
import { json } from "express";
import TestController from './controllers/test.controller';
import { JazeeraApp } from 'jazeera/dist'

class ExpressApp extends JazeeraApp {

    constructor() {
        super();
        this.config();
        this.addControllers([TestController]);
    }

    private config(): void {
        this.app.use(json());
    }
}

export default new ExpressApp().app;
