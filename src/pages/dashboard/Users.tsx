import { useStore } from 'zustand';
import { authStore } from '../../store/authStore';

const Users = () => {
  const {validateLogout } = useStore(authStore);
  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quis.</p>
      <button onClick={()=>validateLogout()}>cerrar sesión</button>
    </div>
  )
}

export default Users