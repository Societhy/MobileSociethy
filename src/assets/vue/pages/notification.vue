<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left back-link="Back" sliding></f7-nav-left>
      <f7-nav-center>Notifications</f7-nav-center>
        <f7-nav-right>
         <f7-link icon="icon-bars" open-panel="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>

     <f7-list media-list>
        <f7-button @click='clickAllRead()'>Mark all as read</f7-button>
        <f7-list-item v-for="item in notifications"
            :title="item.category"
            :subtitle="item.subject.id.$oid + ' ' + item.description + ' ' + item.sender.name"
            :after="item.date"
            @click="clickNotif(item)">
      </f7-list-item>
   </f7-list>

  </f7-page>
</template>


<script type="text/babel">
export default {
    name: 'notification',

    mounted: function() {
         this.getUserUnreadNotification();
    },

    data: function() {
        return {
           notifications: [],
        }
    },

    methods: {
        /**
         * Method for the notification
         * @class Notification
         */

        /**
          * @method getUserUnreadNotification-
          * Ajax for get getUserUnreadNotification organisations
          */
         getUserUnreadNotification: function() {
             var url = window.store.ipPhone + '/getUserUnreadNotification';
             var authorizationToken = window.store.auth_data.token;
             console.log(url);
             var xhr = window.$.ajax({
                 url: url,
                 type: 'GET',
                 xhrFields: {
                     withCredentials: true
                 },
                 crossDomain: true,
                 beforeSend: function(request) {
                    request.setRequestHeader("Authentification", authorizationToken);
                 },
                 success: function(output, status, xhr) {
                 //console.log(output);
                 //console.log(JSON.parse(output));
                 this.notifications = JSON.parse(output);
                 console.log(this.notifications);
                    
                 }.bind(this),
                 error: function(resultat, statut, erreur) {

                 },
                 cache: false
             });
         },

         markNotificationsAsRead: function(notifs) {
             var url = window.store.ipPhone + '/markNotificationsAsRead';
             var authorizationToken = window.store.auth_data.token;
             console.log(url);
             var xhr = window.$.ajax({
                 url: url,
                 type: 'POST',
                 xhrFields: {
                     withCredentials: true
                 },
                 data: JSON.stringify(notifs),
                 crossDomain: true,
                 dataType: 'json',
                 contentType: "application/json; charset=utf-8",
                 beforeSend: function(request) {
                    request.setRequestHeader("Authentification", authorizationToken);
                 },
                 success: function(output, status, xhr) {
                    this.getUserUnreadNotification()
                 }.bind(this),
                 error: function(resultat, statut, erreur) {

                 },
                 cache: false
             });
         },

         clickAllRead: function() {
             this.markNotificationsAsRead({'data' : this.notifications});
             this.getUserUnreadNotification()
         },

         clickNotif: function(notif) {
           var notifications = [];
           notifications.push(notif);
           this.markNotificationsAsRead({"data" : notifications});
            if (notif.sender.type == "Entreprise") {
                console.log("Prout");
                //this.$f7.mainView.router.load({url: '/orgaProfil/' + notif.sender.id.$oid })
            }
         }
    }
}
</script>