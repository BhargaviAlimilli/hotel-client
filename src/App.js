import Home from './booking/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from './components/ProtectedRoute'
import Dashboard from './users/DashBoard'
import DashboardSeller from './users/DashBoardSeller'
import NewHotel from './hotels/NewHotel'
import StripeCallBack from './stripe/stripeCallback'
import EditHotel from './hotels/EditHotel'
import Hotel from './hotels/HotelView'
import StripeCancel from './stripe/stripeCancel'
import StripeSuccess from './stripe/stripeSuccess'
import SearchResult from './hotels/SearchHotelPage'

function App() {
  return (
    <Router>
      <div className="App">
      
        <ToastContainer />
        <Route path='/' component={Navbar} />
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path= '/dashboard/seller' component={DashboardSeller} />
        <PrivateRoute exact path= '/hotel/new' component={NewHotel} />
        <PrivateRoute exact path= '/stripe/callback' component={StripeCallBack} />
        <PrivateRoute exact path="/hotel/edit/:hotelId" component={EditHotel} />
        <Route  exact path='/hotels/:hotelId' component={Hotel} />
        <PrivateRoute exact path= '/stripe/success/:hotelId' component={StripeSuccess} />
        <PrivateRoute exact path= '/stripe/cancel' component={StripeCancel} />
        <Route exact path="/search-result" component={SearchResult} />

      </div>
    </Router>
  );
}

export default App;
