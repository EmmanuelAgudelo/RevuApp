import { useStore } from 'zustand';
import { authStore } from '../../store/authStore';

const Users = () => {
  const {validateLogout } = useStore(authStore);
  return (
    <div>
      <button onClick={()=>validateLogout()}>Log Out</button>
    </div>
  )
}

export default Users