<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <nuxt-link class="navbar-brand" :to="{ name: 'index' }">
            Логотип
        </nuxt-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <div v-for="category in categories" :key="category.slug">

                    <li class="nav-item dropdown" v-if="category.children.length">

                        <nuxt-link :to="{ name: 'categories-slug', params: { slug: category.slug } }" 
                            class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" 
                            aria-haspopup="true" aria-expanded="false">
                            {{ category.name }}
                        </nuxt-link>

                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <nuxt-link :to="{ name: 'categories-slug', params: { slug: subcategory.slug } }" 
                                class="dropdown-item" v-for="subcategory in category.children" 
                                :key="subcategory.slug">
                                    {{ subcategory.name }}
                            </nuxt-link>
                        </div>
                        
                    </li>

                    <li class="nav-item" v-else>
                        <nuxt-link 
                            :to="{ name: 'categories-slug', params: { slug: category.slug } }" 
                            class="nav-link">
                            {{ category.name }}
                        </nuxt-link>  
                    </li>

                </div>   
            </ul>
            <span class="navbar-text">
                <nuxt-link 
                    :to="{ name: 'auth-login' }" 
                    class="nav-link">
                    Войти
                </nuxt-link> 
            </span>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            categories: 'categories'
        })
    }
}
</script>
