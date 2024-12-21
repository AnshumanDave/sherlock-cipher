import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage.jsx';
import SignInComponent from './components/sign.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import './index.css';

const PUBLISHABLE_KEY = 'pk_test_YWxlcnQtc25haWwtNDguY2xlcmsuYWNjb3VudHMuZGV2JA';

const App = () => {
  return (
    // Providing the Clerk context to child components
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in/*" element={<SignInComponent />} />

          {/* Protected Routes */}
          <Route
            path="/create-homepage"
            element={
              <SignedIn>
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              </SignedIn>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <SignedIn>
                  <HomePage />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
        </Routes>
      </Router>
    </ClerkProvider>
  );
};

export default App;

// router wraps the application and makes it a (SPA) single page application keeps ui sync w url
// routes its like a container for route components which define the routes
// route is a component that renders some UI when its path matches the current URL
// protected route is a component that checks if the user is authenticated and redirects to the sign in page if not
