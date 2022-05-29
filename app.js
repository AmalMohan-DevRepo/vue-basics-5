const app = Vue.createApp({
    data(){
        return {
            taskText:'',
            tasksArray:[],
            showList: true
        }
    },
    methods: {
        addTask(){
            this.tasksArray.push(this.taskText)
            this.taskText = ''
        },
        toggleListShow(){
            this.showList = !this.showList
        },
        handleDelete(i){
            this.tasksArray.splice(i,1)
        }
    },
    computed:{
        handleButtonText(){
            return this.showList && this.tasksArray.length > 0  ? 'Hide List' 
            : !this.showList && this.tasksArray.length > 0 ? 'ShowList' 
            : 'Hide / Show List'
        }

    }
})

app.mount('#assignment')