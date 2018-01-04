<template>
<f7-page chat-screen layout="white">
<f7-navbar sliding back-link="Back" :title="friend" ></f7-navbar>
  <f7-messages>
    <f7-message v-for="message in messages"
      :text="message.text"
      :label="message.label"
      :date="message.date"
      :name="message.name"
      :avatar="message.avatar"
      :type="message.type"
      :day="message.day"
      :time="message.time"
      @click="onClick"
      @click:text="onTextClick"
      @click:name="onNameClick"
      @click:avatar="onAvatarClick">
    </f7-message>
  </f7-messages>
 <f7-messagebar  placeholder="Message" send-link="Send" v-model="message" @keyup.enter.native="onSubmit"></f7-messagebar>
 </f7-page>
</template>


<script>
  export default {
    name: 'chat',
    props: ['chatId', 'firstname'],
    data: function () {
      return {
        name: 'Vladimir',
        avatar: 'path/to/avatar-1.jpg',
        messages: [
          {
            day: 'Wendesday',
            time: '13:34'
          },
          {
            name: 'Vladimir',
            text: 'How are you?',
            label: 'Sent in good mood :)',
            avatar: 'path/to/avatar-1.jpg',
            date: 'Yesterday 13:34'
          },
          {
            name: 'Jane',
            text: 'I\'m good, thank you!',
            type: 'received',
            avatar: 'path/to/avatar-2.jpg',
            date: 'Yesterday at 13:50'
          }
        ],
        textIntro:'',
        friend: ''
      }
    },

    mounted: function() {
      this.messages = []
      this.friend = 'Chat with ' + this.firstname
      this.name = window.store.auth_data.user.firstname
      //this.avatar = 
      window.io.on('last_messages', this.receiveMessages)
      window.io.on('send_message', this.receiveMessage)
      this.startConv();
    },

    methods: {
      onClick: function (event, clear) {
        console.log('message click');
      },

      onAvatarClick: function () {
        console.log('avatar-click');
      },

      onTextClick: function () {
        console.log('text-click');
      },

      onNameClick: function () {
        console.log('name-click');
      },

      onSubmit: function () {
        if (this.message.length === 0) return;
        this.messages.push({
          name: this.name,
          //avatar: this.avatar,
          text: this.message,
          date: (function () {
            var now = new Date();
            var hours = now.getHours();
            var minutes = now.getMinutes();
            return hours + ':' + minutes;
          })()
        });
        this.sendMessage(this.message)
        // Clear Message Bar
        this.$$('textarea').prop('value', '')
        this.message = ''
      },

      startConv: function(data){
          this.auth_data = window.store.auth_data
          window.io.emit('join', {'name': this.auth_data.user.name,
            'id': this.auth_data.user._id,
            'otherId': this.chatId})
      },

      sendMessage: function(message) {
            var newMessage = {
              'date' : new Date(),
              'content' : message,
              'idUser' : window.store.auth_data.user._id,
              'idOther' : this.chatId,
              'avatar' : '',
              'files' : null,
            }
            window.io.emit('send_message', newMessage )
         },

      receiveMessage: function(data) {
          var newMessage = {
            'date' : data.date,
            'content': data.data,
            "idUser" : data.send_address,
            'idOther': data.recip_address,
            'avatar' : data.avatar
          }
          this.pushMessage(newMessage);
         },

         receiveMessages: function(data) {
          console.log('receiveMessages')
          data = JSON.parse(data)
          for (var i in data) {
            console.log("Voici data " + data[i] + "  i " + i)
              var type = (data[i].send_address === window.store.auth_data.user._id ? 'sent' : 'received')
              var name = (type === 'sent' ? window.store.auth_data.user.firstname : this.firstname)
              this.messages.push({
                name: name,
                text: data[i].data,
                avatar: data[i].avatar,
                date: data[i].date,
                type: type
                })
            }
          },

         pushMessage: function(data) {
            this.messages.push({
              name: this.firstname,
              text: data.content,
              avatar: data.avatar,
              date: Date.parse(data.data),
              type: 'received'
            })
        }

    }
  }
</script>