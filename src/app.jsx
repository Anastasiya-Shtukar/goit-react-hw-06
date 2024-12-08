import "./app.css";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useState, useEffect } from "react";
import SearchBox from "./components/SesrchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";

export function App() {
  const [contact, setContact] = useState(() => {
    const saveContact = window.localStorage.getItem("array");

    if (saveContact) {
      return JSON.parse(saveContact);
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  try {
    useEffect(() => {
      window.localStorage.setItem("array", JSON.stringify(contact));
    }, [contact]);
  } catch (error) {
    console.error(error);
  }

  const addContact = (newContact) => {
    setContact((prev) => {
      return [...prev, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContact((prev) => {
      return prev.filter((contact) => contact.id !== contactId);
    });
  };

  const contactName = contact.map((pers) => pers.name);

  const [filter, setFilter] = useState("");

  const filterContact = contact.filter((pers) =>
    pers.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} name={contactName} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList Contacts={filterContact} onDelete={deleteContact} />
    </>
  );
}
