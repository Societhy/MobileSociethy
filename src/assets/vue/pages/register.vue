<template>
  <f7-page register-screen layout="white">
     <f7-navbar back-link="Back" title="Register" sliding></f7-navbar>
    <f7-list form>
      <f7-list-item>
        <f7-label>Login</f7-label>
        <f7-input type="text" placeholder="Login" v-model="name"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>First name</f7-label>
        <f7-input type="text" placeholder="First name" v-model="firstName"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Last name</f7-label>
        <f7-input type="text" placeholder="Last name" v-model="lastName"></f7-input>
      </f7-list-item>
      <f7-list-item>
          <f7-label>E-mail</f7-label>
          <f7-input type="email" placeholder="E-mail" v-model="email"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Password</f7-label>
        <f7-input type="password" placeholder="Password" v-model="password"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Password Confirmation</f7-label>
        <f7-input type="password" placeholder="Password Confirmation" v-model="password_confirm"></f7-input>
      </f7-list-item>      
      <f7-list-item>
        <f7-label>Ethereum key generation</f7-label>
        <f7-input type="switch" v-model="ethereum_private_key"></f7-input>
      </f7-list-item>
      </f7-list>
      <f7-list>
        <f7-list-button title="Sign In" @click.native="submitForm"></f7-list-button>
    </f7-list>
  </f7-page>
</template>

<script type="text/babel">
export default {
  //        <f7-icon slot="media" f7="check"></f7-icon>
       name: 'register',

       data: function() {
           return {
               name: '',
               firstName: '',
               lastName: '',
               email: '',
               password: '',
               password_confirm: '',
               ethereum_private_key: false,
           }
       },

       mounted: function() {
          this.$f7.alert('test', 'TestTitle')
       },

       methods: {
           /**
            * Register of a user
            *
            * @class Register
            */
            submitForm: function() {
              if (this.password != this.password_confirm) {
                  alert("You didn't put the same password")
                  return
              }
               // POST request
               var dataArray = {
                   name: this.name,
                   firstname: this.firstName,
                   lastname: this.lastName,
                   email: this.email,
                   password: this.password,
                   password_confirm: this.password,
                   eth: this.ethereum_private_key,
                   sex: "male",
                   grant_type: "password",
                   client_id: 1,
                   client_secret: this.client_secret,
                   scope: '*'
               };
               this.register(dataArray, this.success, this.error)
            },

           /**
            * Submit and ajax method for the register
            * @method submitForm
            */
           register: function(dataArray, _success, _error) {

              var xhr = window.$.ajax({
                url: window.store.ipPhone + '/newUser',
                async: true,
                dataType: "json",
                type: 'POST',
                contentType: "application/json; charset=utf-8",
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                data: JSON.stringify(dataArray),
                success: _success,
                error: _error,
                cache: false
            });
           },

        success: function(output, status, xhr) {
            window.store.register_answer = output
                    //console.log(this.auth_data)
                    //this.$socket.emit('init', {"id": this.auth_data.user._id});
            this.$f7.mainView.router.back({
                    url: this.$f7.mainView.history[0],
                    force: true,
                    ignoreCache: true
                })
        },

        error: function(resultat, statut, erreur) {
            alert(statut + " " + erreur);
        }
      }
   }
</script>