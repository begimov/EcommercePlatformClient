<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
        <nuxt-link class="navbar-brand" :to="{ name: 'index' }">
            STARBUCKS SHOP
        </nuxt-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" 
                        aria-haspopup="true" aria-expanded="false">
                        Каталог
                    </a>

                    <div class="dropdown-menu" >
                        <nuxt-link v-for="category in categories" :key="category.slug"
                            :to="{ name: 'categories-slug', params: { slug: category.slug } }" 
                            class="dropdown-item">
                            {{ category.name }}
                        </nuxt-link>  
                    </div>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">Доставка</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Оплата</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Контакты</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Гарантии</a>
                </li>
            </ul>

                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link">Корзина&nbsp;({{ productsCount }})</a>
                    </li>
                    
                    <li class="nav-item" v-if="!$auth.loggedIn">
                        <nuxt-link 
                            :to="{ name: 'auth-login' }" 
                            class="nav-link">
                            Войти
                        </nuxt-link>
                    </li>
                    
                    <li class="nav-item dropdown" v-else>
                        <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ $auth.user.name }}
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                            <a href="#" class="dropdown-item">Выйти</a>
                        </div>
                    </li>
                </ul>

        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            categories: 'categories',
            productsCount: 'cart/count'
        })
    }
}
</script>
