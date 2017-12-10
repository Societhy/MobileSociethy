<template>
	<!-- App -->
	<div id="app">
		
		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>
		
		<!-- Left Panel -->
		<f7-panel left reveal layout="dark">
			<f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
				<f7-navbar title="Left Panel"></f7-navbar>
				<f7-pages>
					<f7-page>
						<f7-block inner>
							<p>Left panel content goes here</p>
						</f7-block>
						<f7-block-title>Load page in panel</f7-block-title>
						<f7-list>
							<f7-list-item link="/about/" title="About"></f7-list-item>
							<f7-list-item link="/form/" title="Form"></f7-list-item>
						</f7-list>
						<f7-block-title>Load page in main view</f7-block-title>
						<f7-list>
							<f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
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
					<f7-nav-left>
						<f7-link icon="icon-bars" open-panel="left"></f7-link>
					</f7-nav-left>
					<f7-nav-center sliding>Societhy</f7-nav-center>
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
      </f7-page>
		</f7-pages>
			</f7-view>
		</f7-views>
	</div>
</template>


<script>
import store from './store.js'

export default {
	name: 'main',

    components: {
        },

    data: function() {
        return {
            login: "",
            password: "",
            hasError: false,
        }
    },



    mounted: function() {
        console.log('-- LOGIN mounted --')
       	window.store = store
       	this.ipPhone = window.store.ipPhone
       	this.auth_data = window.store.auth_data
       	console.log(this)
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
            var res = "";
            var url = this.ipPhone + '/login';
            var xhr = window.$.ajax({
                url: url,
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
            return res;
        },

        success: function(output, status, xhr) {
                    this.auth_data = output
                    console.log(this.auth_data)
                    //this.$socket.emit('init', {"id": this.auth_data.user._id});
                    //router.push('router.push('/form/');/form/');
                    console.log(this.$router)
                    this.test()
        },

        error: function(resultat, statut, erreur) {
                    alert("Error: Wrong password or email/nickname");
        }
    }

}
</script>
