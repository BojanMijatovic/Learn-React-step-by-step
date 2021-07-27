import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Header ALL</h1>
      <NavLink to='/' activeClassName='is-active' exact={true}>
        Home
      </NavLink>
      <NavLink to='/create' activeClassName='is-active'>
        create page
      </NavLink>
      <NavLink to='/help' activeClassName='is-active'>
        help page
      </NavLink>
      <NavLink to='/edit' activeClassName='is-active'>
        edit page
      </NavLink>
    </header>
  );
};

export default Header;
