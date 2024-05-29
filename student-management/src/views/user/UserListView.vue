  <template>
    <v-app>
      <Header style="position: fixed; width: 100%;" />
      <UserList />
    </v-app>
  </template>

  <script setup>
  import UserList from '@/components/user/UserList.vue';
  import Header from '@/components/header/Header.vue';
  </script>

  <style>
  /* Add your custom styles here */
  </style>
