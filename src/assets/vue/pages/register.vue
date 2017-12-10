<template>
    <div class="container">
        <div class="row center-align">
            <h2 class="blue-text col s12">Societhy</h2>
            <h4 class="blue-text col s12 flow-text">Registration page</h4>
        </div>
        <form class="col s12 center-align">
            <div class="row">
                <div class="input-field col s5 offset-s1">
                    <input id="first_name" type="text" class="validate" v-model="firstName">
                    <label for="first_name" class="left-align">First name</label>
                </div>
                <div class="input-field col s5">
                    <input id="last_name" type="text" class="validate" v-model="lastName">
                    <label for="last_name" class="left-align">Last name</label>
                </div>
                <div class="input-field col s10 offset-s1">
                    <input id="name" type="text" class="validate" v-model="name" required>
                    <label for="name" class="left-align">Login</label>
                </div>
                <div class="input-field col s10 offset-s1">
                    <input id="email" type="email" class="validate" v-model="email" required>
                    <label for="email" class="left-align">E-mail</label>
                </div>
                <div class="input-field col s10 offset-s1">
                    <input id="password" type="password" class="validate" v-model="password" required>
                    <label for="password" class="left-align">Password</label>
                </div>
                <div class="input-field col s10 offset-s1">
                    <input id="password_confirm" type="password" class="validate" v-model="password_confirm" required>
                    <label for="password_confirm" class="left-align">Password confirm</label>
                </div>
                <div class="input-field col s0 offset-s1">
                    <input id="ethereum_private_key" type="checkbox" class="validate checked" v-model="ethereum_private_key">
                    <label for="ethereum_private_key" class="left-align">Generate a ethereum private key</label>
                </div>
            </div>
            <div class="row">
                <a @click="submitForm" class="waves-effect waves-light btn">Confirm</a>
            </div>
            <div class="row">
                <router-link :to="{ name: 'login' }">
                    Sign In
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {}
</script>