<template>
	<!-- App -->
	<div id="app">
		
		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>
		<!-- navigation -->
    <f7-panel right reveal layout="dark">
      <f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar title="Societhy Panel"></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-block inner>
              <p>Here you can easily navigate throughout the application</p>
            </f7-block>
            <f7-block-title>General</f7-block-title>
            <f7-list>
              <f7-list-item @click="clickHome()"  title="Home" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item @click="clickProfil()" title="Profil" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item @click="clickContact()" title="Chat" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item @click="clickNotif()"  title="Notification"></f7-list-item>
            </f7-list>
            <f7-block-title>Discover</f7-block-title>
            <f7-list>
              <f7-list-item @click="search()"  title="Search"></f7-list-item>
              <f7-list-item @click="clickAllOrga()" title="Organizations" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item @click="clickAllProject()"  title="Projects" link-view="#main-view" link-close-panel></f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>
		
		<!-- Main Views -->
		<f7-views>
		<f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
				<!-- Navbar -->
				<f7-navbar>
					<f7-nav-right sliding>Societhy</f7-nav-right>
				</f7-navbar>
				<!-- Pages -->
				<f7-pages>
		<f7-page login-screen layout="dark">
        <f7-login-screen-title>Login</f7-login-screen-title>
        <f7-list form>
          <f7-list-item>
            <f7-label>Login</f7-label>
            <f7-input name="login" type="text" placeholder="Login" v-model="login"></f7-input>
          </f7-list-item>
          <f7-list-item>
            <f7-label>Password</f7-label>
            <f7-input name="password" type="password" placeholder="Password" v-model="password"></f7-input>
          </f7-list-item>
        </f7-list>
        <f7-list>
          		<f7-list-button title="Sign In" @click.native="submitForm"></f7-list-button>
        </f7-list>
        <f7-list>
        	<f7-link @click="clickRegister()">Register</f7-link>
        </f7-list>
      </f7-page>
		</f7-pages>
		</f7-view>
	</f7-views>
	</div>
</template>


<script>
import store from './store.js'
import io from 'socket.io-client'


export default {
	name: 'main',


    data: function() {
        return {
            login: '',
            password: '',
            hasError: false,
            px: 0
        }
    },

    beforeCreated: function() {
      this.px = 'pixel-ratio-' + window.devicePixelRatio
      console.log('Voici le pixel ration : '+ this.px)
      this.$$('html').addClass(this.px)
    },

    mounted: function() {
      window.store = store
      window.io = io(window.store.ipPhone)
      window.io.connect(window.store.ipPhone, {
        'path' : window.store.ipPhone
      })
      window.io.on('connect', function (socket) {
        console.log('connect')
      });
      window.io.on('sessionId', function (data) {
        console.log("sessionId " + data)
        window.store.sessionId = data
      })
      if ('last_user' in window.store) {
       	this.login = window.store.last_user.name
      }
      console.log(window)
    },

    methods: {
        /**
         * Method for the login
         * @class Login
         */

        /**
         * @method submitForm
         * submit for the login
         */
        submitForm: function() {
        	//this.$toastr('Success', 'Success', 'wait for the blockchain answer')
            this.callAjax(this.success, this.error);
            //this.nextPage();
        },

        /**
         * @method callAjax
         * Call ajax for the login
         */

        callAjax: function(_success, _error) {
            var dataArray = {
                "id": btoa(this.login + ':' + this.password)
            };
            var url = window.store.ipPhone + '/login';
            var xhr = window.$.ajax({
                url: url,
                async: true,
                dataType: 'json',
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
             window.store.auth_data = output
             window.io.emit('init', {"id": output.user._id})
             this.getSocketID()
                    //console.log(this.auth_data)
                    //this.$socket.emit('init', {"id": this.auth_data.user._id});
             this.$f7.mainView.router.load({url: '/contact'})
        },

        error: function(resultat, statut, erreur) {
                    //alert("Error: Wrong password or email/nickname");
        },

        /**
             * To get the socket id
             * @method getSocketID
             */
            getSocketID: function() {
                console.log("GetsocketId " + window.store.sessionId);
                var url = window.store.ipPhone + '/socketid/'+ window.store.sessionId
                var authorizationToken = window.store.auth_data.token
                var xhr = window.$.ajax({
                    url: url,
                     type: 'GET',
                     contentType: "application/json; charset=utf-8",
                     xhrFields: {
                        withCredentials: true
                     },
                     crossDomain: true,
                     beforeSend: function(request) {
                        request.setRequestHeader("Authentification", authorizationToken)
                    },
                    success: function(output, status, xhr) {
                    },
                    error: function(resultat, statut, erreur) {
                    },
                    cache: false
                });
            },

            //Click
            clickRegister: function() {
              console.log('register')
              this.$f7.mainView.router.load({url: '/register'})
            },

            clickHome: function() {
              console.log('home')
            },

            clickProfil: function() {
              console.log('profil')
            },

            clickContact: function() {
              console.log('contact')
              this.$f7.mainView.router.load({url: '/contact'})
            },

            clickNotif: function() {
              console.log('notif')
              this.$f7.mainView.router.load({url: '/notification'})
            },

            search: function() {
                console.log('search')
                this.$f7.mainView.router.load({url: '/search'})
            },

            clickAllOrga: function() {
                console.log('orga')
                this.$f7.mainView.router.load({url: '/allOrga'})
            },

            clickAllProject: function() {
                console.log('project')
            }
    }
}
</script>
