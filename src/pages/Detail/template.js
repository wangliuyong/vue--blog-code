import marked from 'marked'

export default {
  data () {
    return {
      title:'',
      content:'',
      user:{},
      createdAt:''
    }
  },
  created() {
    
  },
  computed:{
    markdown(){
      return marked(this.content)
    },
  },
  methods:{

  }
}