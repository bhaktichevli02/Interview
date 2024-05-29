<!-- <template>
  <div>
    <h1>User List</h1>
    <h3>Total Users: {{ totalUsers }}</h3>
    <div>
      <input v-model="search" @input="updateSearch" placeholder="Search users by any parameter..." />
    </div>

    <table v-if="!loading">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filteredUsers" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>
            <p><strong>Street:</strong> {{ user.address.street }}</p>
            <p><strong>Suite:</strong> {{ user.address.suite }}</p>
            <p><strong>City:</strong> {{ user.address.city }}</p>
            <p><strong>Zipcode:</strong> {{ user.address.zipcode }}</p>
            <p><strong>Geo:</strong> Lat: {{ user.address.geo.lat }}, Lng: {{ user.address.geo.lng }}</p>
          </td>
          <td>{{ user.phone }}</td>
          <td>{{ user.website }}</td>
          <td>
            <p><strong>Name:</strong> {{ user.company.name }}</p>
            <p><strong>CatchPhrase:</strong> {{ user.company.catchPhrase }}</p>
            <p><strong>BS:</strong> {{ user.company.bs }}</p>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error.message }}</p>
    <div v-if="!loading">
      <button @click="prevPage" :disabled="page === 1">Previous</button>
      <button @click="nextPage" :disabled="page >= Math.ceil(totalUsers / perPage)">Next</button>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
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
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

thead {
  background-color: #f2f2f2;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

tbody tr:hover {
  background-color: #f9f9f9;
}

input {
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
}

button {
  margin: 10px;
  padding: 10px 20px;
}

h2 {
  margin-bottom: 5px;
}
</style> -->
<template>
  <v-container>
    <h1>User List</h1>
    <h3>Total Users: {{ totalUsers }}</h3>
    <v-text-field v-model="search" label="Search users by any parameter..." outlined @input="updateSearch"></v-text-field>

    <v-data-table
      :headers="headers"
      :items="filteredUsers"
      :search="search"
      :loading="loading"
      :items-per-page="5"
      no-data-text="No users found"
    >
      <template v-slot:item.address="{ item }">
        <div>
          <strong>Street:</strong> {{ item.address.street }}<br>
          <strong>Suite:</strong> {{ item.address.suite }}<br>
          <strong>City:</strong> {{ item.address.city }}<br>
          <strong>Zipcode:</strong> {{ item.address.zipcode }}<br>
          <strong>Geo:</strong> Lat: {{ item.address.geo.lat }}, Lng: {{ item.address.geo.lng }}
        </div>
      </template>
      <template v-slot:item.company="{ item }">
        <div>
          <strong>Name:</strong> {{ item.company.name }}<br>
          <strong>CatchPhrase:</strong> {{ item.company.catchPhrase }}<br>
          <strong>BS:</strong> {{ item.company.bs }}
        </div>
      </template>
    </v-data-table>

    <v-row justify="center">
      <v-col>
        <v-btn @click="prevPage" :disabled="page === 1">Previous</v-btn>
      </v-col>
      <v-col>
        <v-btn @click="nextPage" :disabled="page >= Math.ceil(totalUsers / perPage)">Next</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const search = computed(() => store.state.search);
const loading = computed(() => store.state.loading);
const filteredUsers = computed(() => store.getters.filteredUsers);
const totalUsers = computed(() => store.getters.totalUsers);
const page = computed(() => store.state.page);
const perPage = store.state.perPage;

const updateSearch = (event) => {
  store.commit('setSearch', event.target.value); // Update the search state with the value of the input field
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

const headers = ref([
  { title: 'Name', key: 'name', sortable: false },
  { title: 'Username', key: 'username', sortable: false },
  { title: 'Email', key: 'email', sortable: false },
  { title: 'Address', key: 'address', sortable: false, minWidth:'200px',align:'start' },
  { title: 'Phone', key: 'phone', sortable: false, minWidth:'180px' },
  { title: 'Website', key: 'website', sortable: false },
  { title: 'Company', key: 'company', sortable: false, minWidth:'250px' },
]);
</script>
