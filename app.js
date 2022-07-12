const app = Vue.createApp({

    data() {
        return {
            firstName: "John",
            lastName: "Doe",
            age: 30,
            gender: "male",
            email: "john@gmail.com",
            phone: "123-456-7890",
            picture: "https://randomuser.me/api/portraits/men/10.jpg",
        }
    },
    methods: {
        async getUser() {
            const res = await fetch("https://randomuser.me/api")
            const { results } = await res.json()

            // console.log(results);

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.age = results[0].dob.age
            this.gender = results[0].gender
            this.email = results[0].email
            this.phone = results[0].phone
            this.picture = results[0].picture.large
        },
    },
})

app.mount("#app")