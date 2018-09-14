
import {mapActions} from 'vuex'



export default {
  data () {
    return {
      username:'',
      password:''
    }
  },
  methods:{
    ...mapActions([
      'login'
    ]),
    onLogin(){
      this.login({username:this.username,password:this.password}).then((res)=>{
        console.log(res)
        this.$router.push('/')//跳转到首页
      })
    },
  },
}