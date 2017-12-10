// Import Vue
import Vue from 'vue'
import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
 import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
 import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
 */

import AppStyles from './assets/sass/main.scss'
import Routes from './routes.js'
import store from './store.js'
import App from './main.vue'

// Init Plugin
Vue.use(Framework7Vue)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  data: { store },
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    material: true,
    routes: Routes
  },
  // Register App Component
  components: {
    app: App
  },
  methods: {
        /**
        * The Application method
        *
        * @module App
        */

         /**
        }
        * @method getJSONData
        * @param {Object} object - data
        * get the json of a data
        */
        test: function() {
          this.data;
        },

        getJSONData: function(json) {
            if (this.isPhoneGap()) {
                console.log("PJSON: " + json.data)
                console.log("PJSON: " + json.data.toString())
                return json.user;
            }
            else {
                console.log("BJSON: " + JSON.parse(json.data))
                console.log("BJSON: " + JSON.parse(json.data).toString())
                return JSON.parse(json.user);
            }
        },

        /**
        * Set the token of authentification
        * @method setAuthToken
        * @param {Object} json object who contains the token
        */
        setAuthToken: function(request) {
            if (this.store.auth_data != null) {
                request.setRequestHeader("Authentification", this.store.auth_data.token);
            }
        },
        /**
        * Check if the application turn on phonegap
        * @method isPhoneGap
        */
        isPhoneGap: function() {
            return (window.cordova || window.PhoneGap || window.phonegap) 
            && /^file:\/{3}[^\/]/i.test(window.location.href) 
            && /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent);
        },

        /**
        * Set the auth data
        * @param {Object} json object with all the information about the user
        * @method setAuthData
        */
        setAuthData: function(_auth_data) {
            this.store.auth_data = _auth_data;
        },
    },
})
