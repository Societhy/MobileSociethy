<template>
  <f7-page>
     <f7-navbar>
      <f7-nav-left back-link="Back" sliding></f7-nav-left>
      <f7-nav-center>All Organizations</f7-nav-center>
        <f7-nav-right>
         <f7-link icon="icon-bars" open-panel="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
      <f7-list media-list>
        <f7-list-item v-for="item in orgas"
            :media="item.media"
            :title="item.name"
            :after="item.balance + ' eth'"
            :text="item.description"
            @click="clickOrga(item._id)">
      </f7-list-item>
   </f7-list>
</f7-page>
</template>


<script>
  export default {
    name: 'allOrganization',

    mounted: function() {
         this.getOrgaMemberList();
    },

    data: function() {
        return {
           orgas: [{

                     _id: "8xFEZOOFEZKOKOKOZFE32",
                     name: "MSF",
                     url: "https://pbs.twimg.com/profile_images/648421197844054016/wmrRb2GU.png",
                 },
                 {
                     _id: "8xFFIZFPFEZPFPZEP323",
                     name: "Humanis",
                     url: "https://www.newsassurancespro.com/wp-content/uploads/2012/02/Humanis.jpg",
                 }
             ],
             media_template: "<img src='",
             media_template2: "'>",
             template_undefined: "<img src='profil.jpg'>"
        }
    },

    methods: {
        /**
         * Method for the allOrga
         * @class AllOrga
         */

        /**
          * @method getAllOrganizations-
          * Ajax for get the organisations
          */
         getOrgaMemberList: function() {
             var url = window.store.ipPhone + '/getAllOrganizations'
             var xhr = window.$.ajax({
                 url: url,
                 dataType: 'json',
                 type: 'GET',
                 contentType: 'application/json; charset=utf-8',
                 xhrFields: {
                     withCredentials: true
                 },
                 crossDomain: true,
                 success: this.success,
                 error: this.error,
                 cache: false
             })
         },

         clickOrga: function(id) {
            alert(id)
            this.$f7.mainView.router.load({url: '/orgaProfil/:' + id})
         },

         success: function(output, status, xhr) {
            this.orgas = output
         },

         error: function(output, status, error) {

         }
    }
}
</script>