import Imagen from '../helpers/Imagen';
import Menu from '../helpers/Menu';

const Header = () =>{
    return(
        <header className='w-100 d-flex align-items-center justify-content-between px-3 header'>
            <Imagen />
            <Menu />
            <h2 className='text-light'>MARIA SUCULENTAS</h2>
        </header>
    )

}

export default Header;