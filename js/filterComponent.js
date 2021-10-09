Vue.component('search', {
    data () {
        return {
          userSearch: ''
        }
      },
      template: `
                <form action="#" class ="search-form" v-on:submit.prevent="onSubmit">
                    <input type="text" class="search-fieled" v-model="userSearch">
                    <button type="submit" class="btn-search"  @click="filter(userSearch)">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
                 `
})  