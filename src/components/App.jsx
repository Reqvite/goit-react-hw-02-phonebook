import { Component } from "react";
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/theme';

import { Container } from "./Container/Container";
import { MainTitle } from './Titles/MainTitle/MainTitle'
import { ContactForm } from "./ContactForm/ContactForm";
import { SecondaryTitle } from "./Titles/SecondaryTitle/SecondaryTitle";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component{
  state = {
  contacts: [],
  name: ''
  }
  
  
  render() {
    const {name, contacts} = this.state
    return <ThemeProvider theme={theme}>
      <Container display="flex" flexDirection="column" alignItems="center" padding="3">
        <MainTitle title='Phonebook' />
        <ContactForm name={name} contacts={contacts} />
        <SecondaryTitle title='Contacts' />
        <ContactList/>
      </Container>
      </ThemeProvider>
  }
}

  //     <div>
  // <h1>Phonebook</h1>
  // <ContactForm ... />

  // <h2>Contacts</h2>
  // <Filter ... />
  // <ContactList ... />
  //     </div>