import React, { useState, useRef } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './component/Home';
import Favorites from './component/Favorites';
import Add from './component/Add';
import Update from './component/Update';

import HHome from '@material-ui/icons/Home';
import Favorite from '@material-ui/icons/Favorite';
import AAdd from '@material-ui/icons/Add';
import ButtonNavigationAction from '@material-ui/core/BottomNavigationAction';

const App = ({ history }) => {
   console.log('화면App');
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
      {
         id: 4,
         name: '김민수',
         phone: '010-1522-1588',
         favorite: true,
      },
      {
         id: 5,
         name: '김수한',
         phone: '010-1588-1011',
         favorite: false,
      },
      {
         id: 6,
         name: '이순신',
         phone: '010-0999-1522',
         favorite: true,
      },
      {
         id: 7,
         name: '장수진',
         phone: '010-8574-0003',
         favorite: false,
      },
      {
         id: 8,
         name: '김지석',
         phone: '010-0855-1452',
         favorite: true,
      },
   ]);

   const [checkId, setCheckId] = useState('');

   // key(고유값)으로 사용될 id
   const nextId = useRef(9);

   // props로 함수를 전달 할 때는 컴포넌트의 성능을 아낄 수 있도록 useCallback으로 감싸 주는것이 좋다.
   const onInsert = (name, phone) => {
      console.log('onInsert');
      const contact = {
         id: nextId.current,
         name: name,
         phone: phone,
         favorite: false,
      };
      setContacts(contacts.concat(contact));
      nextId.current += 1;
   };

   const onRemove = id => {
      console.log('onRemove');
      // 요소 하나 씩 id와 비교해서 조건에 해당되는 원소들만 추출하여 새로운 배열을 만듬
      setContacts(contacts.filter(contact => contact.id !== id));
   };

   const onFavorite = id => {
      console.log('onFavorite');
      setContacts(
         contacts.map(contact =>
            contact.id === id
               ? { ...contact, favorite: !contact.favorite }
               : contact,
         ),
      );
   };

   const onUpdate = (name, phone) => {
      console.log('onUpdate');
      setContacts(
         contacts.map(contact =>
            contact.id === checkId
               ? { ...contact, name: name, phone: phone }
               : contact,
         ),
      );
   };

   const onUpdateCheck = id => {
      console.log('onUpdateCheck');
      setCheckId(id);
   };
   console.log('contacts:', contacts);
   return (
      <div align="center">
         <table>
            <tbody>
               <tr align="center">
                  <td>
                     <Link to="/">
                        <ButtonNavigationAction label="Home" icon={<HHome />} />
                     </Link>
                  </td>
                  <td>
                     <Link to="/favorites">
                        <ButtonNavigationAction
                           label="Favorite"
                           icon={<Favorite />}
                        />
                     </Link>
                  </td>
                  <Link to="/add">
                     <ButtonNavigationAction label="Add" icon={<AAdd />} />
                  </Link>
               </tr>
            </tbody>
         </table>
         <Route
            path="/"
            render={() => (
               <Home
                  contacts={contacts}
                  onRemove={onRemove}
                  onFavorite={onFavorite}
                  onUpdateCheck={onUpdateCheck}
                  history={history}
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
                  onUpdateCheck={onUpdateCheck}
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
                  contact={contacts.filter(contact => contact.id === checkId)}
                  onUpdate={onUpdate}
                  history={history}
               />
            )}
         />
      </div>
   );
};

export default App;
