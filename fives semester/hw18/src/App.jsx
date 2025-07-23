import "./App.css";
import { ContactsProvider } from "./assets/context/contactsContext";
import { StatisticProvider } from "./assets/context/statisticContext";
import Form from "./assets/components/form/Form";
import Contactslist from "./assets/components/contactsList/ContactsList";
import Finder from "./assets/components/finder/Finder";

import StatisticsSection from "./assets/components/statistics/StatisticsSection";

function App() {
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

export default App;
