<template>
  <div class="container">
    <!-- Search destinations and start locations on map -->

    <div class="search">

      <input type="text" v-model="searchQuery" placeholder="Search for a location" class="search-bar">
      <button class="btn" @click="search">Search</button>
    </div>




    <!-- Google Map -->
    <div id="map"></div>
    <!-- Manage favorite routes -->
    <div class="footer" align="center">
      <nav >
        
        <ul>
          <li><a href="#favorite-routes">Favorite Routes</a></li>
          <li><a href="#favorite-locations">Favorite Locations</a></li>
          <li><a href="#share-route">Share Route</a></li>
          <li><a href="#search-history">Search History</a></li>
          <li><a href="#search-history">Keyword Search</a></li>
          <li><a href="#search-history">Shortest Path</a></li>
        </ul>
    
      </nav>
    </div>
 

  </div>


</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      selectedLocation: null,
      favoriteRoutes: [],
      favoriteLocations: [],
      searchHistory: [],
      keyword: '',
      shortestPath: null,
      map: null
    };
  },

  methods: {
    search() {
      // Perform search based on this.searchQuery and update selectedLocation
    },
    shareRoute() {
      // Implement route sharing functionality
    },
    findShortestPath() {
      // Perform search based on this.keyword and update shortestPath
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url('./assets/image/img1.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 0 auto;
  width: 100vw;
  overflow: hidden;
  min-height: 100vh;
}
nav {
  background-color: #1f1010;
  color: #fff;
  padding: 20px;
  width: fit-content;
  border-radius: 10px;
  margin-bottom: 5px;
  
  
}

.search-bar {
  display: flex;
  border: 2px solid black;
  border-radius: 10px;
  padding:10px ;
  width: 400px;
  margin-top: 10px;
}

.search {
  display: flex;
  flex-direction: row;
}

#map {
  height: 300px;
}

.btn {
  margin-right: 1rem;
  font-size: 12px;
  padding: 3px;
  color: rgb(2, 2, 2);
  border: 2px solid black;
  border-radius: 10px;
  width: 100px;
  margin-top: 10px;
}

.btn:hover {
  color: black;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
}

.content {
  /* Styling for your main content */
  flex-grow: 1;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  
}

nav ul li {
  margin-right: 20px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  text-shadow: #f2f2f2;
  font-weight: bold;
  padding: 8px;
  border-radius: 4px;
}

nav ul li a:hover {
  background-color: #dac7c7;
}
</style>
