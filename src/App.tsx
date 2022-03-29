import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import router from '@/router';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          router.map((r) => {
            return (
                <Route key={r.name} path={r.path} element={<r.component />} />
            );
        })
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
