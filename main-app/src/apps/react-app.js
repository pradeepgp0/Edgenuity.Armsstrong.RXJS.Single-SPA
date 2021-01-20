import * as singleSpa from "single-spa";
import { matchingPathname, runScript } from "./utils";
import { subject, currentSubject } from '../rxjs';

const loadReactApp = async () => {
    await runScript('http://localhost:3001/static/js/main.js');
    return window.reactApp;
};


export const registerReactApp = () => {
    singleSpa.registerApplication('react-app', loadReactApp, matchingPathname(['/app-1', '/']),  { subject, currentSubject });
};