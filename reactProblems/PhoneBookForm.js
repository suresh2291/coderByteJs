/*
We provided some simple React template code. Your goal is to create a simple form at the top that allows the user
to enter in a first name, last name, and phone number and there should be a submit button. 
Once the submit button is pressed, the information should be displayed in a list below (automatically sorted by last name) 
along with all the previous information that was entered. 
This way the application can function as a simple phone book. 
When your application loads, the input fields (not the phone book list) should be prepopulated with the, 
following values already:

First name = Coder
Last name = Byte
Phone = 8885559999
*/

const { useState } = React;

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [firstName, setFirstName] = useState('Coder');
  const [lastName, setLastName] = useState('Byte');
  const [phone, setPhone] = useState('8885559999');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntryToPhoneBook({ firstName, lastName, phone });
  };

  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname'
        type='text'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userLastname'
        name='userLastname'
        type='text'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone'
        name='userPhone'
        type='text'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className='submitButton'
        type='submit'
        value='Add User'
      />
    </form>
  );
}

function InformationTable({ phoneBook }) {
  const sortedPhoneBook = phoneBook.sort((a, b) => {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    return 0;
  });

  return (
    <table style={style.table} className='informationTable'>
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {sortedPhoneBook.map((entry, index) => (
          <tr key={index}>
            <td style={style.tableCell}>{entry.firstName}</td>
            <td style={style.tableCell}>{entry.lastName}</td>
            <td style={style.tableCell}>{entry.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Application() {
  const [phoneBook, setPhoneBook] = useState([]);

  const addEntryToPhoneBook = (entry) => {
    setPhoneBook([...phoneBook, entry]);
  };

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable phoneBook={phoneBook} />
    </section>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application />);
