import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../Assets/images/exchange.png'


const Header = () => {
  return (
    <div className='header'>
    <div className='logo'>
     <img src={logo} alt=''/>
     <h1>CryptoBuy</h1>
     </div>
      <ul>
      <li> <Link to='/'>Home</Link></li>
      <li> <Link to='/coins'>Coins</Link></li>
      </ul>
    </div>
  )
}

export default Header
