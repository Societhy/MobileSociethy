<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-center>Contact</f7-nav-center>
        <f7-nav-right>
         <f7-link icon="icon-bars" open-panel="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-list contacts>
      <f7-list-group v-for="(group, key) in contacts">
        <f7-list-item :title="key" group-title></f7-list-item>
        <f7-list-item v-for="item in group" 
        :title="item.firstname + ' ' + item.lastname"
        @click="onClick(item)">
        </f7-list-item>
      </f7-list-group>
    </f7-list>

  </f7-page>
</template>


<script>
  export default {
    name: 'contact',

    data: function () {
      return {
        contacts: {
          'A': [
            'Aaron',
            'Abbie',
            'Adam',
            'Adele',
            'Agatha',
            'Agnes',
            'Albert',
            'Alexander'
          ],
          'B': [
            'Bailey',
            'Barclay',
            'Bartolo',
            'Bellamy',
            'Belle',
            'Benjamin'
          ],
          'C': [
            'Caiden',
            'Calvin',
            'Candy',
            'Carl',
            'Cherilyn',
            'Chester',
            'Chloe'
          ],
          'V': [
            'Vladimir'
          ]
        }
      }
    },

    mounted: function() {
      if (window.store.auth_data.user.contact_list.length === 0) {
          console.log('Pas de contact')
          return
      }
      window.store.auth_data.user.contact_list.sort(function(a, b) {
        var nameA=a.firstname.toLowerCase(), nameB=b.firstname.toLowerCase()
        if (nameA < nameB)
          return -1 
        if (nameA > nameB)
          return 1
        return 0
      })
      this.contacts = {}
      this.putTheLetters()
      this.createTheObject()
    },

    methods:{
      onClick: function (item) {
        //console.log(event)
        this.$f7.mainView.router.load({url: '/chat/' + item.id + '/' + item.firstname})
      },

      putTheLetters: function () {
        var letters = new Array()
        var contact_list = window.store.auth_data.user.contact_list
        for (var i in contact_list) {
          if (contact_list[i].firstname !== '' && contact_list[i].firstname != undefined) {
            if (!(contact_list[i].firstname[0].toUpperCase() in letters)) {
              letters.push(contact_list[i].firstname[0].toUpperCase())
            }
          }
        }
        for (var i in letters) {
          this.contacts[letters[i]] = new Array()
        }
      },

      createTheObject: function(letters) {
        var contact_list = window.store.auth_data.user.contact_list
        for (var i in contact_list) {
            if (contact_list[i].firstname !== '' && contact_list[i].firstname != undefined) {
              this.contacts[contact_list[i].firstname[0].toUpperCase()].push(contact_list[i])
            }
        }
      }
    }
  }
</script>