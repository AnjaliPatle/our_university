


function Signout(props) {
  return props.auth && props.auth.currentUser && (
    <button className="sign-out" onClick={() => props.auth.signOut()}>Sign Out</button>
  )
}

export default Signout;