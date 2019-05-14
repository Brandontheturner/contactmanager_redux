import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Brandon Turner",
        email: "brandonturner@gmail.com",
        phone: "111-111-1111"
      },
      {
        id: 2,
        name: "Alexis Mavromatis",
        email: "alexismavromatis@gmail.com",
        phone: "222-222-2222"
      },
      {
        id: 3,
        name: "Emma Turner",
        email: "emmaturner@gmail.com",
        phone: "333-333-3333"
      },
      {
        id: 4,
        name: "Lila Turner",
        email: "lilaturner@gmail.com",
        phone: "444-444-4444"
      }
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact
            //react requires keys
            key={contact.id}
            //passing in entire contact object
            contact={contact}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
