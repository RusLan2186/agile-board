import { useContext } from 'react';
import { StoreContext } from '../index';

export default function UseStore() {
  return useContext(StoreContext);
}
