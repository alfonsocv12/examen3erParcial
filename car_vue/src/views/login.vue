<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      <label>User name</label>
      <input required v-model="email" type="text" placeholder="Enter email"/>
      <label>Password</label>
      <input required v-model="password" type="password" placeholder="Password"/>
      <hr/>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
  let storeModuleShop = "shop";

  export default {
    name:'login',
    data(){
      return{
        email:null,
        password:null
      }
    },
    methods:{
      login(){
         const { email, password } = this
         this.$store.dispatch(`${storeModuleShop}/loginShop`,{email:email,password:password}).then(result=>{})
         this.$router.push('/')
      }
    }
  }

</script>
