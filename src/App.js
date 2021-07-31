import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import store, { addPost } from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const  App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
       <Header />
       <Navbar />
        <div className='app-wrapper-content-img'>

         <Route path="/dialogs" render={ () => <DialogsContainer  />} />
         <Route path="/profile" render={ () => <Profile />} />
         <Route path="/users" render={ () => <UsersContainer />} />
        </div>
     </div>
    </BrowserRouter>
  );
}   

export default App;


