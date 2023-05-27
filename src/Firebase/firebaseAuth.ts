import {app} from './config.ts';
import {getAuth} from 'firebase/auth';

export const auth = getAuth(app);