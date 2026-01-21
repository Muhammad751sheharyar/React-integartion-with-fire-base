import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function Again() {
    try {
      const againUser = signInWithEmailAndPassword(auth, email, password)
      console.log(againUser);
    } catch {
      console.log("user not valid")
    }
  }
  return (
    <>
      <h1>Login</h1>
      <form action="" onSubmit={Again}>
        email
        <input type="email" onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
     password
        <input type="password" name="" id="" onChange={(e) => setPassword(e.target.value)} />
      <br /><br />
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default Login
