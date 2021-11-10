// Third-party dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Own components/hooks/constants
import Home from 'views/Home';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path=":id" element={<p>React + Redux application to build and personalize a curriculum vitae.</p>} />
      </Route>
      <Route path="*" element={<p>404 Not Found</p>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
