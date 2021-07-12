<template>
  <div class="chat">
    <!-- <h1>About Us</h1>
      <p>We like You</p> -->
    <h2>Chat id: {{ toyId }}</h2>
    <ul>
      <li v-for="(msg, idx) in msgs" :key="idx">
        <!-- <span>{{ user.fullname }}:</span>{{ msg.txt }} -->
        <span>{{ msg.from }}:</span>{{ msg.txt }}
      </li>
    </ul>
    <hr />
    <form @submit.prevent="sendMsg">
      <input type="text" v-model="msg.txt" placeholder="Your msg" />
      <button>Send</button>
    </form>
  </div>
</template>

<script>
import { socketService } from '../services/socket-service.js'

export default {
props: {
  toyId: {
    type: String,
  },
},

  created() {
    this.topic = this.toyId
    socketService.emit('chat topic', this.topic)
    socketService.on('chat addMsg', this.addMsg)
  },

  data() {
    return {
      user: this.$store.getters.loggedinUser,
      msg: { from: '', txt: '' },
      msgs: [],
      topic: '',
    }
  },

  methods: {
    addMsg(msg) {
      this.msgs.push(msg)
    },
    sendMsg() {
      this.msg.from = this.user.fullname
      console.log('Sending', this.msg)
      socketService.emit('chat newMsg', this.msg)

      // TODO: next line not needed after connecting to backend
      // this.addMsg(this.msg)
      // setTimeout(()=>this.addMsg({from: 'Dummy', txt: 'Yey'}), 2000)
      this.msg = { from: 'Me', txt: '' }
    },
    // changeTopic() {
    //   socketService.emit('chat topic', this.topic)
    // },
   
  },

  destroyed() {
    socketService.off('chat addMsg', this.addMsg)
    // socketService.terminate();
  },
}
</script>

<style></style>
