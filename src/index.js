import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './pages/Layout';
import AddCall from './pages/AddCall';
import AddEvent from './pages/AddEvent';
import AddTask from './pages/AddTask';
import Calendar from './pages/Calendar';
import Call from './pages/Calls';
import Event from './pages/Events';
import Task from './pages/Task';


export default function App(){
  return(

    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Calendar/>}/>
          <Route path='task' element={<Task/>}/>
          <Route path='event' element={<Event/>}/>
          <Route path='call' element={<Call/>}/>
          <Route path='addtask' element={<AddTask/>}/>
          <Route path='addevent' element={<AddEvent/>}/>
          <Route path='addcall' element={<AddCall/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <App />
  );


