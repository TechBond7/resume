<template>
  <div class="page p-col-12 p-sm-12 p-md-11">
    <router-view />
    <scroll-top />
  </div>
</template>

<style>
body {
  background: black;
  margin: 0;
}

a:link,
a:visited,
a:active {
  color: orange;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: rgb(255, 201, 101);
  background-color: transparent;
  text-decoration: none;
}

ul {
  list-style: none;
  margin-top: 0.5rem;
  padding-top: 0;
  padding-left: 0.2rem;
  padding-right: 0.3rem;
}

li {
  color: orange;
}

.p-sidebar .p-sidebar-close {
  display: none;
}

.p-scrolltop {
  background: orange !important;
}

.page {
  margin: auto;
}
</style>
