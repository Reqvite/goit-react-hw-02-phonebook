import { Component } from "react";
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/theme';
import { nanoid } from "nanoid";

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
  
 handleSubmit = (values, actions) => {
            console.log(values);
   console.log(actions);

   console.log(this.addNewContact());
  }

  addNewContact = () => {
    const newContact = {
      id: nanoid(),
    }
   console.log(newContact);
  }

  render() {
    const {name,} = this.state
    return <ThemeProvider theme={theme}>
      <Container display="flex" flexDirection="column" alignItems="center" padding="3">
        <MainTitle title='Phonebook' />
        <ContactForm name={name} getData={this.handleSubmit}/>
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