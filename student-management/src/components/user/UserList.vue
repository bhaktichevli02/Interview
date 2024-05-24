<template>
    <div>
      <h1>User List</h1>
      <h3>Total Users: {{ totalUsers }}</h3>

      <div>
        <input v-model="search" @input="updateSearch" placeholder="Search users by any parameter..." />
      </div>
      <ul v-if="!loading">
        <li v-for="user in filteredUsers" :key="user.id">
          <h2>{{ user.name }}</h2>
          <p><strong>Username:</strong> {{ user.username }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Address:</strong></p>
          <ul>
            <li><strong>Street:</strong> {{ user.address.street }}</li>
            <li><strong>Suite:</strong> {{ user.address.suite }}</li>
            <li><strong>City:</strong> {{ user.address.city }}</li>
            <li><strong>Zipcode:</strong> {{ user.address.zipcode }}</li>
            <li><strong>Geo:</strong> Lat: {{ user.address.geo.lat }}, Lng: {{ user.address.geo.lng }}</li>
          </ul>
          <p><strong>Phone:</strong> {{ user.phone }}</p>
          <p><strong>Website:</strong> {{ user.website }}</p>
          <p><strong>Company:</strong></p>
          <ul>
            <li><strong>Name:</strong> {{ user.company.name }}</li>
            <li><strong>CatchPhrase:</strong> {{ user.company.catchPhrase }}</li>
            <li><strong>BS:</strong> {{ user.company.bs }}</li>
          </ul>
        </li>
      </ul>
      <p v-if="loading">Loading...</p>
      <p v-if="error">{{ error.message }}</p>
      <div v-if="!loading">
        <button @click="prevPage" :disabled="page === 1">Previous</button>
        <button @click="nextPage" :disabled="page >= Math.ceil(totalUsers / perPage)">Next</button>
      </div>
    </div>
  </template>

  <script setup>
  import { computed , onMounted } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();
  const search = computed(() => store.state.search);
  const loading = computed(() => store.state.loading);
  const error = computed(() => store.state.error);
  const filteredUsers = computed(() => store.getters.filteredUsers);
  const totalUsers = computed(() => store.getters.totalUsers);
  const page = computed(() => store.state.page);
  const perPage = store.state.perPage;

  const updateSearch = (event) => {
    store.commit('setSearch', event.target.value);
  };

  const nextPage = () => {
    if (page.value < Math.ceil(totalUsers.value / perPage)) {
      store.commit('setPage', page.value + 1);
    }
  };

  const prevPage = () => {
    if (page.value > 1) {
      store.commit('setPage', page.value - 1);
    }
  };

  onMounted(() => {
    store.dispatch('fetchUsers');
  });
  </script>

  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 10px 0;
  }
  button {
    margin: 10px;
  }
  h2 {
    margin-bottom: 5px;
  }
  </style>
