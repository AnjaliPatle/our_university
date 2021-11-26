 import '../../materialize/css/materialize.css'

function Navigation() {
  return (
    <div classname="nav-bar">

      <div class="navbar-fixed">
        <nav>
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo">Our University</a>
            <ul class="right hide-on-med-and-down">
              <li><a href="badges.html">Logout</a></li>
            </ul>
          </div>
        </nav>
      </div>

    </div>
  );
}

export default Navigation;
