<template>
<f7-page>
  <!-- Search bar -->
  <f7-navbar>
      <f7-nav-center>Search</f7-nav-center>
        <f7-nav-right>
         <f7-link icon="icon-bars" open-panel="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
  <f7-searchbar
    cancel-link="Cancel"
    search-list="#search-list"
    placeholder="Search in items"
    :clear-button="true"
    @searchbar:search="onSearch"
    @searchbar:enable="onEnable"
    @searchbar:disable="onDisable"
    @searchbar:clear="onClear"></f7-searchbar>

  <!-- Will be visible if there is no any results found, defined by "searchbar-not-found" class -->
  <f7-list class="searchbar-not-found">
    <f7-list-item title="Nothing found"></f7-list-item>
  </f7-list>

  <!-- Search-through list -->
  <f7-list class="searchbar-found" id="search-list" media-list>
     <f7-list-item v-for="item in searchs"
            :title="item.category"
            :text="item.name"
            :after="item.address"
            @click="clickNotif(item)">
      </f7-list-item>
  </f7-list>
</f7-page>
</template>



<script type="text/babel">
export default {
    name: 'search',

    mounted: function(){
    },


    data: function() {
        return {
           searchs: [{
            'category' : 'Please search something',
            'name' : 'just on the search bar'
             }],
           }
    },

    methods: {
        /**
         * Method for the searchS
         * @class searchS
         */

         onSearch: function (query, found) {
            if (query != '') {
                this.searchFor(query)
            }

         },

        onClear: function (event) {
                console.log('clear');
        },

        onEnable: function (event) {
            console.log('enable');
        },

        onDisable: function (event) {
            console.log('disable');
        },

        /**
          * @method searchFor
          * ajax method for search the organisations / users / projects
          * @param {Object} json object of all the thing that are find
          * string who is the search string
          */
         searchFor: function(data) {
             console.log('search', data);
             var url = window.store.ipPhone + '/searchFor/' + data;
             var authorizationToken = window.store.auth_data.token;
             var xhr = window.$.ajax({
                 url: url,
                 dataType: 'json',
                 type: 'GET',
                 contentType: 'application/json; charset=utf-8',
                 xhrFields: {
                     withCredentials: true
                 },
                 crossDomain: true,
                 beforeSend: function(request) {
                     request.setRequestHeader('Authentification', authorizationToken);
                 },
                 success: this._success,
                 error: function(resultat, statut, erreur) {},
                 cache: false
             });
         },

         _success: function(output, status, xhr) {
            this.searchs = output
            console.log(this.searchs)
         },
 

         clickSearch: function(search) {
            if (search.category == 'user') {
                //this.findUser({'_id' : search._id});
            } else if (search.category == 'organization') {
                //this.$router.push({ name: 'orgaProfil', params: { orgaId : search._id }});
            } else if (search.category == 'project') {
                //this.$router.push({ name: 'projectProfil', params: { projectId : search._id }});   
            }
        }
    }
}
</script>

