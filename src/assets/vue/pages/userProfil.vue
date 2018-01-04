<template>
   <f7-page>
    <f7-navbar>
      <f7-nav-center>User Profil</f7-nav-center>
        <f7-nav-right>
         <f7-link icon="icon-bars" open-panel="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-card>
      <f7-card-header>
        
      </f7-card-header>
      <f7-card-content>
         <f7-list form>
      <f7-list-item>
        <f7-label>Login</f7-label>
        <f7-input type="text" placeholder="Login" v-model="user_data.name"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>First name</f7-label>
        <f7-input type="text" placeholder="First name" v-model="user_data.firstName"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Last name</f7-label>
        <f7-input type="text" placeholder="Last name" v-model="user_data.lastName"></f7-input>
      </f7-list-item>
      <f7-list-item>
          <f7-label>E-mail</f7-label>
          <f7-input type="email" placeholder="E-mail" v-model="user_data.email"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Phone</f7-label>
        <f7-input type="phone" placeholder="Phone" v-model="user_data.telephone"></f7-input>
      </f7-list-item>
          </f7-list>
      </f7-card-content>
      <f7-card-footer>
        
      </f7-card-footer>
    </f7-card>
    <f7-list accordion>
    <f7-list-item accordion-item :title="user_data.name +  '  Projects'">
      <f7-accordion-content>
        <f7-block>
          <f7-swiper next-button prev-button :params="{speed:500, slidesPerView: 3, spaceBetween: 20}">
              <f7-swiper-slide>Slide 1</f7-swiper-slide>
              <f7-swiper-slide>Slide 2</f7-swiper-slide>
              <f7-swiper-slide>Slide 3</f7-swiper-slide>
          </f7-swiper>
      </f7-block>
    </f7-accordion-content>
  </f7-list-item>
  <f7-list-item accordion-item :title="user_data.name +  '  organizations'">
    <f7-accordion-content>
      <f7-block>
              <f7-swiper-slide>Slide 1</f7-swiper-slide>
              <f7-swiper-slide>Slide 2</f7-swiper-slide>
              <f7-swiper-slide>Slide 3</f7-swiper-slide>
      </f7-block>
    </f7-accordion-content>
  </f7-list-item>
  <f7-list-item accordion-item :title="user_data.name +  '  Ethereum Keys'">
    <f7-accordion-content>
      <f7-block>
            
      </f7-block>
    </f7-accordion-content>
  </f7-list-item>
</f7-list>
  </f7-page>
</template>


<script type="text/babel">
 export default {
        name: 'userProfil',

        props: ['userId'],

        data: function () {
            return {
                user_data: {
                    name: "",
                    first_name: "Arthur",
                    last_name: "Ngo Van",
                    email: "arthur.ngovan@gmail.com",
                    telephone: "0666666666",
                    image_view: "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg",
                    nickname: "Yasker",
                    cover_url: "http://maxcdn.thedesigninspiration.com/wp-content/uploads/2012/06/Facebook-Covers-040.jpg",                    
                },
                ethereum_keys: [
                    {
                        address: "AA5dw76d8dv7tefb98b7ter8vwev9wb8etb8erb7v8wcer6w5qw8",
                        balance: "50",
                    },
                    {
                        address: "AA5dw76d8dv7tefb98b7ter8vwev9wb8etb8erb7v8wcer6w5qw8",
                        balance: "1000",
                    },
                    {
                        address: "AA5dw76d8dv7tefb98b7ter8vwev9wb8etb8erb7v8wcer6w5qw8",
                        balance: "12",
                    },
                ],
                lat: 'null',
                lng: 'null',
                orgas: [
                    {
                        id: 1,
                        name: "MSF",
                        url: "https://pbs.twimg.com/profile_images/648421197844054016/wmrRb2GU.png",
                    },
                    {
                        id: 2,
                        name: "Humanis",
                        url: "https://www.newsassurancespro.com/wp-content/uploads/2012/02/Humanis.jpg",
                    },
                    {
                        id: 3,
                        name: "Croix Rouge",
                        url: "https://pbs.twimg.com/profile_images/779289835848818688/yifTHAJE.jpg",
                    },
                    {
                        id: 4,
                        name: "SOS Fantom",
                        url: "https://upload.wikimedia.org/wikipedia/fr/thumb/1/1c/SOS_Fant%C3%B4mes_-_Logo.svg/langfr-220px-SOS_Fant%C3%B4mes_-_Logo.svg.png",
                    },
                ],
                projects: [
                    {
                        id: 1,
                        name: "MSF",
                        url: "https://pbs.twimg.com/profile_images/648421197844054016/wmrRb2GU.png",
                    },
                    {
                        id: 2,
                        name: "Humanis",
                        url: "https://www.newsassurancespro.com/wp-content/uploads/2012/02/Humanis.jpg",
                    },
                    {
                        id: 3,
                        name: "Croix Rouge",
                        url: "https://pbs.twimg.com/profile_images/779289835848818688/yifTHAJE.jpg",
                    },
                    {
                        id: 4,
                        name: "SOS Fantom",
                        url: "https://upload.wikimedia.org/wikipedia/fr/thumb/1/1c/SOS_Fant%C3%B4mes_-_Logo.svg/langfr-220px-SOS_Fant%C3%B4mes_-_Logo.svg.png",
                    },
                ],
                select_orgas: [],
                select_projects: [],
            }
        },
        /**
        * For all the front in javascript on tje profil page
        */
        mounted: function() {
          if (this.userId !== window.store.auth_data.user._id) {
            this.findUser({'_id' : this.userId})
            //do the stuff to qdd friend
          }
          //this.init()
          this.getUserData()
        },

        methods: {

              /**
                * Profil of a user
                *
                * @class Profil
                */
            init: function(){
                 this.profil_data = Object.assign({}, window.store.auth_data);
                  $('.carousel.carousel-slider').carousel({full_width: true});
                  $(".user_input").attr("disabled", true)
                  $(".parallax").parallax();
                  if (navigator.geolocation) {

                      console.log("try goelocation");

                        navigator.geolocation.watchPosition(this.geolocationSuccess,
                                             this.geolocationError,
                                             { enableHighAccuracy: true, dtimeout : 5000});
                   }
                  console.log('edit')
                if (this.user) {
                    console.log(this.user._id);
                    console.log("against : ");
                    console.log(this.auth_data.user._id);
                if (this.user._id == this.auth_data.user._id) {
                    $(".friendBtn").hide();
                    this.modify();
                } else {
                    $(".friendBtn").show();
                }
                this.profil_data.user = Object.assign({}, this.user);
                } else {
                  this.modify();
                  $(".friendBtn").hide();
                }
            },


            modify: function() {
              
            },

             /**
             * For all the organisation selection
             * @method selectOrgas
             * @param {Object} the reprensation of the organisation in json 
             */
            selectOrgas: function(orga) {
                this.select_orgas = []
                this.select_input = ''

                this.$router.push({ name: 'orgaProfil', params: { orgaId : orga._id }}); 
            },

            /**
             * Delete selected user
             * @method deleteSelectedElem
             * @param {Object} representation of the user in json
             */
            deleteSelectedElem: function(user) {
                console.log('lalala' + user.id)
                for (var i = 0; i < this.select_selected.users.length; ++i) {
                    if (this.select_selected.users[i].id == user.id) {
                console.log('lalalaoooo')
                        this.select_selected.users.splice(i, 1)
                        return;
                    }
                }
            },


            /**
             * @method closeSearchSection
             * initialisation of the search section
             */
            closeSearchSection: function() {
                this.select_orgas = []
                this.select_projects = []
                this.select_input = ''
            },
            
            ///////////////

            /**
             * @method editPersonalInfos
             * for edit the front during edition
             */
            editPersonalInfos: function() {
                $("ul.level-2").children().css( "background-color", "red" );
            },

             /**
             * @method openCamera
             * Open the camera for take a picture
             */
            openCamera: function() {
                navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                destinationType: Camera.DestinationType.FILE_URI
                });
                var self = this

                function onSuccess(imageData) {

                    var image = document.getElementById('image');
                    image.src = "data:image/jpeg;base64," + imageData;
                    image.rotate(-90)
                }

                function onFail(message) {

                    alert('Failed because: ' + message);
                    console.log('error getting photo');
                }

            },

            geolocationError: function() {
                console.log('geolocation err');
            },

            geolocationSuccess: function(position) {
                console.log('geolocation success');
                console.log(position.coords.latitude)
                console.log(position.coords.longitude)
                this.lat = position.coords.latitude
                this.lng = position.coords.longitude
            },

            getUserData: function() {
                this.user_data.first_name = this.profil_data.user.firstname;
                this.user_data.last_name = this.profil_data.user.lastname;
                this.user_data.email = this.profil_data.user.email;
                this.user_data.nickname = this.profil_data.user.name;
                var parsed = this.profil_data.user.eth.keys;
                        var arrProp = [];
                        for(var x in parsed){
                            arrProp.push(parsed[x]);
                        }
                this.ethereum_keys = arrProp;
                this.orgas = this.profil_data.user.organizations;
                this.projects = this.profil_data.user.projects;
            },

            userChange: function(prop, change) {
               var dataArray = {
                      '_id' : window.store.auth_data.user._id,
                       prop : change,
                   };
                this.changeName(dataArray);
            },


            /**
             * To add a friend 
             * @method addFriend
             */
            addFriend: function() {
                var dataArray = {
                '_id': window.store.auth_data.user._id,
                'contact' : {
                    'id': this.profil_data.user._id,
                    'firstname': this.profil_data.user.firstname,
                    'lastname': this.profil_data.user.lastname,
                    }
                }
                var url = window.store.ipPhone + '/addToContact';
                var authorizationToken = window.store.auth_data.token;
                var xhr = window.$.ajax({
                url: url,
                dataType : 'json',
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                xhrFields: { withCredentials: true },
                crossDomain: true,
                data: JSON.stringify(dataArray),
                    beforeSend: function(request) {
                        request.setRequestHeader("Authentification", authorizationToken);
                    },
                    success: function(output, status, xhr) {
                        this.auth_data.user = output;
                    }.bind(this),
                    error : function(resultat, statut, erreur){
                        this.$toastr('error', 'Error cannot add this contact', 'Error');
                    }.bind(this),
                    cache: false});
                },

            /**
             * Ajax request for the edition 
             * @method changeName
             * @param {Object} representation of the editable value in json
             * '_id' of the user, 'name' of what you want to edit
             */
            changeName: function(dataArray) {
                console.log(dataArray);
                var url = window.store.ipPhone + '/updateUser';
                var authorizationToken = window.store.auth_data.token;
                var xhr = window.$.ajax({
                url: url,
                dataType : "json",
                type: 'POST',
                contentType: "application/json; charset=utf-8",
                xhrFields: { withCredentials: true },
                crossDomain: true,
                data: JSON.stringify(dataArray),
                beforeSend: function(request) {
                    request.setRequestHeader("Authentification", authorizationToken);
                },
                success: function(output, status, xhr) {},
                error : function(resultat, statut, erreur){},
                cache: false});
                }
        },

         /**
          * @method findUser
          * ajax method for find a user with the id
          * @param {Object} json object of information on the user
          * '_id',
          */
         findUser: function(dataArray) {
             var url = window.store.ipPhone + '/findUser';
             var authorizationToken = window.store.auth_data.token;
             var xhr = window.$.ajax({
                 url: url,
                 dataType: 'json',
                 type: 'POST',
                 contentType: 'application/json; charset=utf-8',
                 xhrFields: {
                     withCredentials: true
                 },
                 crossDomain: true,
                 data: JSON.stringify(dataArray),
                 beforeSend: function(request) {
                     request.setRequestHeader('Authentification', authorizationToken);
                 },
                 success: function(output, status, xhr) {
                    //this.o
                 }.bind(this),
                 error: function(resultat, statut, erreur) {},
                 cache: false
             });
         },
    }
</script>
