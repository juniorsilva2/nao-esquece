import './styles.css';
import CartIcon from '../../../public/cart.svg'; 
import { Button } from 'primereact/button';

const Header = () => {
  return (
    <header>
      <div className='headerContainer'>
        <div style={{height: '100%', padding: '6px'}}>
          <img style={{height: '100%', width: '100%'}} src={CartIcon} alt="Cart Icon" />
        </div>
        <div className='headerOptions'>
          <Button type="button" label="Login" outlined></Button>
        </div>
      </div>
    </header>
  )
}

export default Header;