import { flow, types } from 'mobx-state-tree';

const User = types.model('User', {
  id: types.identifier,
  createdAt: types.string,
  name: types.string,
  avatar: types.string,
});

const UsersStore = types
  .model('UsersStore', {
    users: types.maybe(types.array(User)),
  })
  .actions((self) => {
    return {
      load: flow(function* () {
        self.users = yield apiCall.get('users');
      }),
      afterCreate() {
        self.load();
      },
    };
  });

export default UsersStore;
