import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import styled from 'styled-components';
import contactReducer from './reducers/contactReducer';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

const store = createStore(contactReducer);

const AppContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
    return (
        <Provider store={store}>
            <AppContainer>
                <h1>Contact List</h1>
                <ContactForm />
                <ContactList />
            </AppContainer>
        </Provider>
    );
};

export default App;
