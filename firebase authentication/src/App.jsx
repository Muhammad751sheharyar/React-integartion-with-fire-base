import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
import Login from './login';
function App() {
  const [email, setEmail] = useState(0)
  const [password, setPassword] = useState(0)
  const handlemail = async (e) => {
    e.preventDefault();
    try {
      const userData = createUserWithEmailAndPassword(auth, email, password);
      alert("signup successful");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <>
      <form action="" onSubmit={handlemail}>
        <h1>signup</h1>
        email
        <input type="email" name="" id="" onChange={(e) => setEmail(e.target.value)} /><br /><br />
        password
        <input type="password" name="" id="" onChange={(e) => setPassword(e.target.value)} /><br /><br />

        <button type='submit'>submit</button>



      </form>
      
      <Login />
    </>
    )
}


export default App
