import { RouteProps } from 'react-router-dom';
import { MainPage } from '../../../pages/MainPage';
import { RegistrationPage } from '../../../pages/RegistrationPage';
import { LoginPage } from '../../../pages/LoginPage';
import { PageNotFound } from '../../../pages/PageNotFound';

export enum AppRoutes {
    MAIN = 'main',
    REGISTRATION = 'registration',
    LOGIN = 'login',
    // must be last
    PAGE_NOT_FOUND = 'page_not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.REGISTRATION]: '/registration',
    [AppRoutes.LOGIN]: '/login',
    // must be last
    [AppRoutes.PAGE_NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.REGISTRATION]: {
        path: RoutePath.registration,
        element: <RegistrationPage />,
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage />,
    },
    // must be last
    [AppRoutes.PAGE_NOT_FOUND]: {
        path: RoutePath.page_not_found,
        element: <PageNotFound />,
    },
};
