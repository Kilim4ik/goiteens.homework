import { useContext, useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ContactsContext } from "../../context/contactsContext";

export default function Finder() {
  const { filterContacts, contacts } = useContext(ContactsContext);
  const [key, setKey] = useState("");
  const finderRef = useRef();
  useEffect(() => {
    filterContacts(key);
  }, [key]);
  useEffect(() => {
    setKey("");
  }, [contacts]);
  return (
    <form className="">
      <label htmlFor="finder">Find contact by name</label>
      <input
        ref={finderRef}
        type="text"
        name="finder"
        value={key}
        onChange={() => setKey(finderRef.current.value.trim())}
      />
    </form>
  );
}
