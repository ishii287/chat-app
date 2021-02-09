import { useState } from 'react';
import axios from 'axios';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const projectID = '27c29f4d-5b24-43e8-8d11-bc398ee3aa1f';

const Modal = () => {
  const notify = () => toast("Oops!!🦄 Invalid Credentials");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      // <h3> <ToastContainer /></h3>

      // setError('Oops, incorrect credentials.');
      setError(<ToastContainer style={{backgroundColor:"#FBB7C0"}}/>);

    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button" onClick={notify}>
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        {/* <h3> <ToastContainer /></h3> */}
        {/* <h2>{error}</h2> */}
        <h2>{error}</h2>
      </div>
    </div>

  );
};

export default Modal;
