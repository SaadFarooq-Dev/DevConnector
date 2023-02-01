import React from 'react';
import NavBar from './components/layout/navBar';
import AppRoutes from './routes/appRoutes';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



const App = () => {
  return (
    <div className='App'>
      <NavBar/>
        <AppRoutes/>
    </div>
  );
}

export default App;
