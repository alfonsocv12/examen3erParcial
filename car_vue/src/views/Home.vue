<template>
  <div class="appointment">

    <div>
      <img alt="Vue logo" src="../assets/carlogo.png">
      <h1>Welcome to Your carVue App</h1>
    </div>

    <form class="card lign-items-center h-100 row shadow-sm p-3 mb-5 bg-white rounded " ref="formAppointment">
      <div class="form-row">
        <div class="col form-group">
          <label for="name">name </label>
          <input type="text" class="form-control" name="name" placeholder="Enter name" ref="name">
        </div>
        <div class="col form-group">
          <label for="email">email </label>
          <input type="email" class="form-control" name="name" placeholder="Enter email" ref="email">
        </div>
      </div>
      <div class="form-row">
        <div class="col form-group">
          <label for="name">car </label>
          <input type="text" class="form-control" name="name" placeholder="Enter your car model" ref="car">
        </div>
        <div class="col form-group">
          <label for="name">service </label>
          <select class="form-control" @change="filterShops($event)" id="service" ref="service">
              <option v-for='service in getServices' :value="service._id">
                {{service.name}}
              </option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="col form-group">
          <label for="name">shop </label>
          <select class="form-control" @change="selectShop($event)" id="shop" ref="shop">
              <option v-for='shop in getShops' :value="shop._id">
                {{shop.name}}
              </option>
          </select>
        </div>
        <div class="col form-group">
          <label for="date"> date</label>
          <datetime class="form-control" format="YYYY-MM-DD H:i" ref="date"></datetime>
        </div>
      </div>
      <button href="#" v-on:click="makeAppointment" type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  let storeModuleService = "service";
  let storeModuleShop = "shop";
  import datetime from 'vuejs-datetimepicker';

  export default {
    name: 'home',
    components: {
      datetime
    },
    methods:{
      obtainServices(){
        this.$store.dispatch(`${storeModuleService}/getAllServicesAction`).then(result=>{});
      },
      obtainShops(){
        this.$store.dispatch(`${storeModuleShop}/getAllShopsAction`).then(result=>{});
      },
      filterShops(event){
        this.serviceSelect = event.target.value
        this.$store.dispatch(`${storeModuleShop}/getAllShopsAction`, event.target.value).then(result=>{});
      },
      makeAppointment(){
        let appointment = {
          name:this.$refs.name.value,
          email:this.$refs.email.value,
          car:this.$refs.car.value,
          service:this.$refs.service.value,
          shop:this.$refs.shop.value,
          date:this.$refs.date.date
        }
        console.log(this.$refs.shop.value);
        console.log(appointment);
      }
    },
    computed:{
      ...mapGetters(storeModuleService,["getServices"]),
      ...mapGetters(storeModuleShop,["getShops"])
    },
    mounted(){
      this.obtainServices();
      this.obtainShops();
    }
  }
</script>
