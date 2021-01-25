import React from 'react';
import AddressList from './components/AddressesList';
import AddressForm from './components/AddressForm';
import Navbar from './components/Navbar';
import ToggleForm from './components/ToggleForm';
import AddressContextProvider from './contexts/AddressContext';
import StateContextProvider from './contexts/StateContex';


function App() {
  return (
    <div className="App" data-test="appComponent">
      <StateContextProvider>
        <AddressContextProvider>
          <Navbar header={'ADDRESS BOOK'}/>
          <AddressList />
          <ToggleForm />
          <AddressForm />
        </AddressContextProvider>
      </StateContextProvider>
    </div>
  );
}

export default App;
