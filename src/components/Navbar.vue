<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="/">Home</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Charts" right>
        <b-dropdown-item href="/chartjs">LineChart</b-dropdown-item>
        <b-dropdown-item href="/chartjs">BarChart</b-dropdown-item>
        <!-- <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>-->
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>