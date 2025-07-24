
import { ContactsProvider } from "../../../../context/contactsContext";
import { StatisticProvider } from "../../../../context/statisticContext";
import Form from "./form/Form";
import Contactslist from "./contactsList/ContactsList";
import Finder from "./finder/Finder";

import StatisticsSection from "./statistics/StatisticsSection";

function Hw18() {
  return (
    <div className="App">
      <ContactsProvider>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Finder />
        <Contactslist />
      </ContactsProvider>
      <StatisticProvider>
        <StatisticsSection />
      </StatisticProvider>
    </div>
  );
}

export default Hw18;
