import {app} from './config.ts';
import {getAuth,onAuthStateChanged,User} from 'firebase/auth';
import { useEffect,useState } from 'react';

export const auth = getAuth(app);

export function useAuth() {
    const [currentUser, setCurrentUser] = useState<User | undefined>();
  
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => {
       
        setCurrentUser(user || undefined);
    
      });
      return unsub;
    }, [])
  
    return currentUser;
  }