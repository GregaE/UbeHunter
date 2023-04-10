<template>
  <NavBar />
  <Map @open-sidebar="showSidebar = true" />
  <SideBar v-model="showSidebar" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Map from './components/Map/Map.vue';
import NavBar from './components/Navbar/NavBar.vue';
import SideBar from './components/SideBar/SideBar.vue';

const showSidebar = ref(false);
</script>
