<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
      <a class="navbar-brand" href="#">Marquee Equity Technical Test</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Search</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/all">All Companies</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

</style>
