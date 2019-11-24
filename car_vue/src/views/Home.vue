<template>
  <div class="appointment">

    <div>
      <img alt="Vue logo" src="../assets/carlogo.png">
      <h1>Welcome to Your carVue App</h1>
    </div>

    <form class="card lign-items-center h-100 row shadow-sm p-3 mb-5 bg-white rounded ">
      <div class="form-row">
        <div class="col form-group">
          <label for="name">name </label>
          <input type="text" class="form-control" name="name" placeholder="Enter name">
        </div>
        <div class="col form-group">
          <label for="email">email </label>
          <input type="email" class="form-control" name="name" placeholder="Enter email">
        </div>
      </div>
      <div class="form-row">
        <div class="col form-group">
          <label for="name">car </label>
          <input type="text" class="form-control" name="name" placeholder="Enter your car model">
        </div>
        <div class="col form-group">
          <label for="name">service </label>
          <input type="text" class="form-control" name="name" placeholder="Enter name">
        </div>
      </div>
      <div class="col form-group">
        <label for="date"> date</label>
        <datetime class="form-control" format="YYYY-MM-DD H:i"></datetime>
      </div>
    </form>

  </div>
</template>

<script>
  import datetime from 'vuejs-datetimepicker';

  export default {
    name: 'home',
    components: {
      datetime
    }
  }
</script>
