
import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';

function App() {

  const contacts = [
    {
      id :"1",
      name : "Aman",
      email : "aman.kumar@gmail.com"
    },
    {
      id:"2",
      name : "preeti",
      email : "preeti.malik@gmail.com"
    }

  ];

  return (
    <div className="ui container">

      <Header />
      <AddContact />
      <ContactList  contacts = {contacts}/>
    </div>

  );
}

export default App;
