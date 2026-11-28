import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from './components/common/Navbar';
import { HomePage } from './components/pages/HomePage';
import { Footer } from './components/common/Footer';

import { Cargando } from './components/utils/Cargando';
import { ScrollToTop } from './utils/scrollToTop';
import { useValuationAttribution } from './hooks/useValuationForm';

const PrivacyPage = lazy(() => import('./components/pages/PrivacyPage'));
const TermsPage = lazy(() => import('./components/pages/TermsPage'));
const NotarialSecurityPage = lazy(() => import('./components/pages/NotarialSecurityPage'));
const ErrorPage = lazy(() => import('./components/pages/ErrorPage'));

function App() {
    useValuationAttribution();

    return (
        <>
            <Navbar />

            <Suspense
                fallback={
                    <main className="cargando">
                        <Cargando />
                    </main>
                }
            >
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/politica-privacidad" element={<PrivacyPage />} />
                    <Route path="/terminos-servicios" element={<TermsPage />} />
                    <Route path="/seguridad-notarial" element={<NotarialSecurityPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Suspense>

            <Footer />
        </>
    );
}

export default App;
