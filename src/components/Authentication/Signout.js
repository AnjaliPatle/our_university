import '../Navigation/navigation.css'


function Signout(props) {
  return props.auth && props.auth.currentUser && (
    <button className="signout-button" onClick={() => props.auth.signOut()}>Sign Out</button>
  )
}

export default Signout;