import React, { useState, useCallback, useRef } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './component/Home';
import Favorites from './component/Favorites';
import Add from './component/Add';
import Update from './component/Update';

const App = ({ history }) => {
   // state 관리
   const [contacts, setContacts] = useState([
      {
         id: 1,
         name: '임성환',
         phone: '010-1234-5678',
         favorite: true,
      },
      {
         id: 2,
         name: '김지훈',
         phone: '010-9876-5432',
         favorite: false,
      },
      {
         id: 3,
         name: '홍길동',
         phone: '010-8888-0000',
         favorite: true,
      },
   ]);

   const [checkId, setCheckId] = useState('');

   // key(고유값)으로 사용될 id
   const nextId = useRef(4);

   // props로 함수를 전달 할 때는 컴포넌트의 성능을 아낄 수 있도록 useCallback으로 감싸 주는것이 좋다.
   const onInsert = (name, phone) => {
      console.log('insert');

      const contact = {
         id: nextId.current,
         name: name,
         phone: phone,
         favorite: false,
      };
      console.log('contact : ', contact);
      setContacts(contacts.concat(contact));
      nextId.current += 1;
   };

   const onRemove = id => {
      console.log('remove');
      // 요소 하나 씩 id와 비교해서 조건에 해당되는 원소들만 추출하여 새로운 배열을 만듬
      setContacts(contacts.filter(contact => contact.id !== id));
   };

   const onFavorite = id => {
      console.log('favorite');
      console.log(id);
      setContacts(
         contacts.map(contact =>
            contact.id === id
               ? { ...contact, favorite: !contact.favorite }
               : contact,
         ),
      );
   };

   const onUpdate = (name, phone) => {
      setContacts(
         contacts.map(contact =>
            contact.id === checkId
               ? { ...contact, name: name, phone: phone }
               : contact,
         ),
      );
   };

   const onUpdateCheck = id => {
      setCheckId(id);
      console.log('id:', checkId);
      console.log(id);
   };

   return (
      <div align="center">
         {/* <ul align="center">
            <li> */}
         <Link to="/">Home</Link>
         {/* </li>
            <li> */}
         <Link to="/favorites">Favorites</Link>
         {/* </li>
            <li> */}
         <Link to="/add">Add</Link>
         {/* </li>
         </ul> */}
         <Route
            path="/"
            render={() => (
               <Home
                  contacts={contacts}
                  onRemove={onRemove}
                  onFavorite={onFavorite}
                  // onSearch={onSearch}
                  onUpdateCheck={onUpdateCheck}
               />
            )}
            exact={true}
         />
         <Route
            path="/favorites"
            render={() => (
               <Favorites
                  contacts={contacts}
                  onRemove={onRemove}
                  onFavorite={onFavorite}
               />
            )}
         />
         <Route
            path="/add"
            render={() => <Add onInsert={onInsert} history={history} />}
         />
         <Route
            path="/update"
            render={() => (
               <Update
                  contact={contacts[checkId - 1]}
                  onUpdate={onUpdate}
                  history={history}
               />
            )}
         />
         {/* <TextField id="filled-name" label="Name" variant="filled" /> */}
         {/* <TextField
            id="standard-uncontrolled"
            label="Uncontrolled"
            defaultValue="foo"
         /> */}
      </div>
   );
};

export default App;
