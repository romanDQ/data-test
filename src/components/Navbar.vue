<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="/">Home</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Charts" right>
        <b-dropdown-item href="/chartjs">Vue-chartJS</b-dropdown-item>
        <b-dropdown-item href="/charts">Vue-charts</b-dropdown-item>
        <b-dropdown-item href="/chartkick">Vue-chartkick</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>