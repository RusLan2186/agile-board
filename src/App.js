import './App.scss';
import { observer } from 'mobx-react-lite';
import useStore from './hooks/useStore';

function App() {
  const { users, boards } = useStore();
  console.log(users.toJSON());
  console.log('boards', boards.toJSON());
  return <div>helvdvdvlo</div>;
}

export default observer(App);
