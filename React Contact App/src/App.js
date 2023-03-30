import React, { StrictMode } from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import ContactCard from './ContactCard';
import Search from './Search';
import Add from './Add';

function stringToSlug(str) {
  // remove accents
  var from =
      'àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ',
    to =
      'aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy';
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(RegExp(from[i], 'gi'), to[i]);
  }

  str = str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\-]/g, ' ')
    .replace(/-+/g, ' ');

  return str;
}
export default function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Le Hong',
      phone: '098732846',
      profession: 'Personal Trainer',
    },
    {
      id: 2,
      name: 'Anne Hathaway',
      phone: '098732847',
      profession: 'Actress',
    },
  ]);
  const [displayItems, setDisplayItems] = useState(contacts);
  const [filterValue, setFilterValue] = useState([]);

  const handleAddNew = (event) => {
    let isExisting = contacts.filter((element) => {
      return event.phone.toString() === element.phone.toString();
    });
    if (isExisting.length === 0) {
      setContacts([
        {
          id: Date.now(),
          ...event,
        },
        ...contacts,
      ]);
    } else {
      alert('Phone number existed/SĐT đã tồn tại');
      isExisting = [];
    }
  };
  const handleDelete = (itemId) => {
    const contacts2 = contacts.filter((item) => item.id !== itemId);
    setContacts(contacts2);
  };

  const setUpdateName = (update, id) => {
    const contacts3 = contacts.filter((each) => {
      if (each.id === id) {
        each.name = update;
      }
      return contacts;
    });
    setDisplayItems(contacts3);
  };
  const setUpdatePhone = (update, id) => {
    const contacts3 = contacts.filter((each) => {
      if (each.id === id) {
        each.phone = update;
      }
      return contacts;
    });
    setDisplayItems(contacts3);
  };
  const setUpdateProfession = (update, id) => {
    const contacts3 = contacts.filter((each) => {
      if (each.id === id) {
        each.profession = update;
      }
      return contacts;
    });
    setDisplayItems(contacts3);
  };
  const handleSearch = (value) => {
    setFilterValue(stringToSlug(value));
  };

  useEffect(() => {
    const filteredItems = contacts.filter((item) => {
      return (
        stringToSlug(item.name.toString().toLowerCase()).includes(
          filterValue.toString().toLowerCase()
        ) ||
        item.phone
          .toString()
          .toLowerCase()
          .includes(filterValue.toString().toLowerCase()) ||
        stringToSlug(item.profession.toString().toLowerCase()).includes(
          filterValue.toString().toLowerCase()
        )
      );
    });
    setDisplayItems(filteredItems);
  }, [contacts, filterValue]);

  return (
    <>
      <Add onAddNew={handleAddNew} />
      <Search onChangeSearch={handleSearch} />
      {displayItems.map((contact) => (
        <ContactCard
          key={contact.id}
          id={contact.id}
          onDelete={handleDelete}
          setUpdateName={setUpdateName}
          setUpdatePhone={setUpdatePhone}
          setUpdateProfession={setUpdateProfession}
          name={contact.name}
          phone={contact.phone}
          profession={contact.profession}
        />
      ))}
    </>
  );
}
