import React, { Suspense } from 'react';
import AppRouter from './providers/router/UI/AppRouter';
import Navbar from '../widgets/Navbar/Navbar';

const App = () => (
    <div className="app">
        <Suspense fallback="">
            <Navbar />
            <div className="content-page">
                <AppRouter />
            </div>
        </Suspense>
    </div>
);

export default App;
