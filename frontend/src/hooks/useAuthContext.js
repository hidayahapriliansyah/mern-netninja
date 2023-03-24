import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export const useWorkoutsContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthContext must be used inside an WorkoutContextProvider');
  }

  return context;
};