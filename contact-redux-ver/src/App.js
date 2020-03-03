import React from 'react';

import Add from './Add';
import Favorite from './Favorite';
import Home from './Home';
import Update from './Update';

import { Route, Link } from 'react-router-dom';

import HHome from '@material-ui/icons/Home';
import FFavorite from '@material-ui/icons/Favorite';
import AAdd from '@material-ui/icons/Add';
import ButtonNavigationAction from '@material-ui/core/BottomNavigationAction';

const App = () => {
   return (
      <div align="center">
         <table>
            <tbody>
               <tr>
                  <td>
                     <Link to="/">
                        <ButtonNavigationAction icon={<HHome />} />
                     </Link>
                  </td>
                  <td>
                     <Link to="/favorite">
                        <ButtonNavigationAction icon={<FFavorite />} />
                     </Link>
                  </td>
                  <td>
                     <Link to="/add">
                        <ButtonNavigationAction icon={<AAdd />} />
                     </Link>
                  </td>
               </tr>
            </tbody>
         </table>
         <Route path="/" render={() => <Home />} exact />
         <Route path="/favorite" render={() => <Favorite />} />
         <Route path="/add" render={() => <Add />} />
         <Route path="/update" render={() => <Update />} />
      </div>
   );
};

export default App;
