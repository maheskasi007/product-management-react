import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CircularProgress } from '@mui/material';

import './App.css';
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary';
import AppRoutes from './routes/AppRoutes/AppRoutes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    // Wrapped in the Helmet Provider to give Title for the each page
    <HelmetProvider>
      <ErrorBoundary>
        {/* Wrapped in the BrowserRouter to routing througthout the pages */}
        <BrowserRouter>
          {/* Header Component */}
          <Header />
          {/* Main sections */}
          <main>
            <ErrorBoundary>
              <Suspense fallback={<CircularProgress />}>
                {/* Routing from the AppRoutes */}
                <AppRoutes />
              </Suspense>
            </ErrorBoundary>
          </main>
          <Footer />
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
