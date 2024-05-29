import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    users: [],
    loading: false,
    error: null,
    search: '',
    page: 1,
    perPage: 5
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
    setSearch(state, search) {
      state.search = search;
      state.page = 1; // Reset the page to 1 whenever the search query changes
    },
    setPage(state, page) {
      state.page = page;
    }
  },
  actions: {
    fetchUsers({ commit }) {
      commit('setLoading', true);
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          commit('setUsers', response.data);
          commit('setLoading', false);
        })
        .catch(error => {
          commit('setError', error);
          commit('setLoading', false);
        });
    }
  },
  getters: {
    allUsersFiltered: (state) => {
      if (state.search) {
        const searchLower = String(state.search).toLowerCase();
        return state.users.filter(user =>
          user.name.toLowerCase().includes(searchLower) ||
          user.username.toLowerCase().includes(searchLower) ||
          user.email.toLowerCase().includes(searchLower) ||
          user.phone.toLowerCase().includes(searchLower) ||
          user.website.toLowerCase().includes(searchLower) ||
          user.address.street.toLowerCase().includes(searchLower) ||
          user.address.suite.toLowerCase().includes(searchLower) ||
          user.address.city.toLowerCase().includes(searchLower) ||
          user.address.zipcode.toLowerCase().includes(searchLower) ||
          user.company.name.toLowerCase().includes(searchLower) ||
          user.company.catchPhrase.toLowerCase().includes(searchLower) ||
          user.company.bs.toLowerCase().includes(searchLower)
        );
      }
      return state.users;
    },
    filteredUsers: (state, getters) => {
      const start = (state.page - 1) * state.perPage;
      const end = state.page * state.perPage;
      return getters.allUsersFiltered.slice(start, end);
    },
    totalUsers: (state, getters) => {
      return getters.allUsersFiltered.length;
    }
  }
});
