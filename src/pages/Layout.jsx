import { Outlet,Link } from "react-router-dom";
import './Layout.css';

function Layout(){

    return(
        <div className="navcalendar">

            <nav>
               <div className="calendarnav">
               <ul>
                        <li>
                            <Link to='/'>Calendar</Link>
                        </li>
                        <li>
                            <Link to='/Task'>Task</Link>
                        </li>
                        <li>
                            <Link to='/Event'>Event</Link>
                        </li>
                        <li>
                            <Link to='/Call'>Call</Link>
                        </li>

                       
                            <li>
                                <Link to='/AddTask'>+Task</Link>
                            </li>
                            <li>
                                <Link to='/AddEvent'>+Event</Link>
                            </li>
                            <li>
                                <Link to='/AddCall'>+Call</Link>
                            </li>
                      
                     </ul>


               </div>

                    
              

            </nav>

            <Outlet/>

         </div>
       
     )
};

export default Layout;