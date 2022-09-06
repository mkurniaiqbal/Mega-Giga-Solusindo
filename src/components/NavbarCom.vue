<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="success" class="p-4">
      <div class="container">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand>Mega Giga Solusindo</b-navbar-brand>

        <div class="h3">
          <b-icon icon="person-fill"></b-icon>
          <b-dropdown id="dropdown-right" right variant="light">
            <b-dropdown-item>Change Password</b-dropdown-item>
            <b-dropdown-item>Logout</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
