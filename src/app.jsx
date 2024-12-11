import "./app.css";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useState, useEffect } from "react";
import SearchBox from "./components/SesrchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";

export function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}
