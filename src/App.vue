<template>
  <div id="app">
    <sidebar/>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
             <navbar/>
            <div class="container">
              <router-view/>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
export default {
  components:{
    Navbar,
    Sidebar
  },
  computed:{
    didAutoLogout(){
      return this.$store.getters.didAutoLogout;
    }
  },
  created() {
    //refresh zamani store daki authenticationla bagli datalar resetlernir
    //tryLogin metodu ise localstoragde saxlanilan token ve user haqda datalar ile
    //store u berpa edir
    this.$store.dispatch('tryLogin');
  },
 watch: {
    didAutoLogout(curValue) {
      if (curValue) {
        this.$router.replace('/auth');
      }
    }
  }
}
</script>


  <style>
   #app {
	display: flex
}

#app #content-wrapper {
	background-color: #f8f9fc;
	width: 100%;
	overflow-x: hidden
}

#app #content-wrapper #content {
	flex: 1 0 auto
} 
</style>
