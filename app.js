const app = Vue.createApp({
   
    data(){
        return {
        firstName:"Gary",
        lastName:"MM",
        email:"gary@gmail.com",
        gender:"male",
        picture:""
        }
    },
        methods: {
           async getUser(){
                const res= await fetch('https://randomuser.me/api/')
                console.log(res)
                const {results}= await res.json()
             
                console.log(results)

                this.firstName=results[0].name.first
                this.lastName=results[0].name.last 
                this.email=results[0].email 
                this.gender=results[0].gender
                this.picture=results[0].picture.large
            }
        
    }
})
const appContainer = document.getElementById("app")
app.mount(appContainer)