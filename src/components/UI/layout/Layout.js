import NavBar from '../../NavAndFooter/NavBar';
import Footer from '../../NavAndFooter/Footer';
import { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';

const Layout = (props) => {
  const { id } = useContext(AuthContext);

  return (
    <>
      <header>
        {id && <NavBar></NavBar>}
      </header>
      <main className="flex flex-col justify-center items-center p-10">
        {props.children}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Layout;
