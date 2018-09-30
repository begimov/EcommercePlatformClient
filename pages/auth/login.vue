<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <h1 class="mb-4">Вход</h1>
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="inputEmail">Email</label>
                        <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" v-model="form.email">
                    </div>
                    <div class="form-group">
                        <label for="inputPassword">Пароль</label>
                        <input type="password" class="form-control" id="inputPassword" v-model="form.password">
                    </div>
                    <button type="submit" class="btn btn-primary">Войти</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            async login () {
                await this.$auth.loginWith('local', {
                    data: this.form
                })
            

                this.$router.replace({
                    name: 'index'
                })
            }
        }
    }
</script>
