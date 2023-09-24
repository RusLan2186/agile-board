import './App.scss';
import { observer } from 'mobx-react-lite';
import useStore from './hooks/useStore';

function App() {
  const { users } = useStore();
  console.log(users.toJSON());
  return <div>helvdvdvlo</div>;
}

export default observer(App);
