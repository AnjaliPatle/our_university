 import '../../materialize/css/materialize.css'
 import './navigation.css'
 import logo from '../../assets/logo_long.png'
 import Signout from '../Authentication/Signout'

function Navigation(props) {
  return (
    <div classname="nav-bar">

      <div className="navbar-fixed">
        <nav style={{background:'white'}}>
          <div className="nav-wrapper">
            <img src={logo} className="logo_img"/>
              <div style={{background:'red'}}><Signout auth={props.auth}/></div>
          </div>
        </nav>
      </div>

    </div>
  );
}

export default Navigation;
