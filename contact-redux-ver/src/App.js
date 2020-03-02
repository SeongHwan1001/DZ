import React from 'react';

import Add from './Add';
import Favorite from './Favorite';
import Home from './Home';

import { Route, Link } from 'react-router-dom';

const App = () => {
   return (
      <div align="center">
         <table>
            <tbody>
               <tr>
                  <td>
                     <Link to="/">Home</Link>
                  </td>
                  <td>
                     <Link to="/favorite">Favorite</Link>
                  </td>
                  <td>
                     <Link to="/add">Add</Link>
                  </td>
               </tr>
            </tbody>
         </table>
         <Route path="/" render={() => <Home />} exact />
         <Route path="/favorite" render={() => <Favorite />} />
         <Route path="/add" render={() => <Add />} />
      </div>
   );
};

export default App;
