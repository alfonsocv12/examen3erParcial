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
          <th scope="col">update</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="appointment in getShopAppointments">
          <td>{{appointment.name}}</td>
          <td>{{appointment.car}}</td>
          <td>{{appointment.email}}</td>
          <td>{{appointment.service}}</td>
          <td>{{appointment.date}}</td>
          <td>
            <select class="" id="status" :ref="appointment._id" >
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
          <td>
            <button v-on:click="updateAppointment(appointment._id)" class="btn btn-primary" type="button" name="button">
              update
            </button>
          </td>
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

      updateAppointment(appointment_id){
        let data ={
          _id: appointment_id,
          body:{status:this.$refs[appointment_id]['0'].value},
          shop_id:this.user._id
        }
        this.$store.dispatch(`${storeModuleAppointment}/updateAppointmentAction`, data);
      }
    },
    mounted(){
      this.checkToken()
      this.getAppointments()
      this.getStatusEnumMethod()
    }
  }

</script>
