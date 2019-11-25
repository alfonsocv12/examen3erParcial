<template>
  <div>
    <h3>{{user.name}}</h3>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">name</th>
          <th scope="col">car</th>
          <th scope="col">email</th>
          <th scope="col">service</th>
          <th scope="col">date</th>
          <th scope="col">status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="appointment in shopAppointments">
          <td>{{appointment.name}}</td>
          <td>{{appointment.car}}</td>
          <td>{{appointment.email}}</td>
          <td>{{appointment.service}}</td>
          <td>{{appointment.date}}</td>
          <td>
            <select @change="changeAppointmentStatus(appointment, $event)" class="" name="" ref="status">
              <template v-for='status in getStatusEnum'>
                <option selected v-if='status === appointment.status'  :value="status">
                  {{status}}
                </option>
                <option v-else  :value="status">
                  {{status}}
                </option>
              </template>
            </select>
          </td>
          <template v-if="appointment.change">
            <td>
              <button type="button" name="button">update</button>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapGetters} from 'vuex';
  import jwt from 'jsonwebtoken';

  let storeModuleShop = "shop";
  let storeModuleAppointment = "appointment";

  export default {
    name:'login',
    data(){
      return{
        user:{},
        shopAppointments:[],
        email:null,
        password:null
      }
    },
    computed:{
      ...mapGetters(storeModuleShop,['getToken']),
      ...mapGetters(storeModuleAppointment,['getShopAppointments','getStatusEnum'])
    },
    methods:{

      checkToken(){
        const token = JSON.parse(JSON.stringify(this.$store.getters['shop/getToken']));
        if(!token.token){
          this.$router.push('/')
        }else{
          this.user = jwt.decode(token.token)
        }
      },

      getAppointments(){
        this.$store.dispatch(`${storeModuleAppointment}/getAppointmentsShopAction`,this.user._id)
        this.shopAppointments = JSON.parse(JSON.stringify(this.$store.getters["appointment/getShopAppointments"]));
      },

      getStatusEnumMethod(){
        this.$store.dispatch(`${storeModuleAppointment}/getStatusEnumAction`)
      },

      changeAppointmentStatus(appointment, event){
        console.log(appointment);
        console.log(event);
      }
    },
    mounted(){
      this.checkToken()
      this.getAppointments()
      this.getStatusEnumMethod()
    }
  }

</script>
