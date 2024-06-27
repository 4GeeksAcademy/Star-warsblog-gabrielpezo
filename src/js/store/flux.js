const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		favorites: [],
		people: [],
		vehicles: [],
		planets: [],
		person: null,
		planet: null,
		vehicle: null,
		description: null, // Agregado para almacenar descripciones
	  },
	  actions: {
		loadPeople: () => {
		  fetch("https://www.swapi.tech/api/people/")
			.then(res => res.json())
			.then(data => {
			  setStore({ people: data.results });
			})
			.catch(error => {
			  console.error("Error fetching people:", error);
			});
		},
		loadVehicles: () => {
		  fetch("https://www.swapi.tech/api/vehicles/")
			.then(res => res.json())
			.then(data => {
			  setStore({ vehicles: data.results });
			})
			.catch(error => {
			  console.error("Error fetching vehicles:", error);
			});
		},
		loadPlanets: () => {
		  fetch("https://www.swapi.tech/api/planets/")
			.then(res => res.json())
			.then(data => {
			  setStore({ planets: data.results });
			})
			.catch(error => {
			  console.error("Error fetching planets:", error);
			});
		},
		fetchPerson: async (id) => {
		  try {
			const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
			const data = await response.json();
			if (data.result && data.result.properties) {
			  setStore({ person: data.result.properties });
			} else {
			  console.error("Unexpected response structure:", data);
			}
		  } catch (error) {
			console.error("Error fetching person:", error);
		  }
		},
		fetchPersonDescription: async (id) => {
		  try {
			const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
			const data = await response.json();
			if (data.result) {
			  setStore({ description: data.result });
			} else {
			  console.error("Unexpected response structure:", data);
			}
		  } catch (error) {
			console.error("Error fetching description:", error);
		  }
		},
		fetchPlanet: async (id) => {
		  try {
			const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
			const data = await response.json();
			if (data.result && data.result.properties) {
			  setStore({ planet: data.result.properties });
			} else {
			  console.error("Unexpected response structure:", data);
			}
		  } catch (error) {
			console.error("Error fetching planet:", error);
		  }
		},
		fetchPlanetDescription: async (id) => {
		  try {
			const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
			const data = await response.json();
			if (data.result) {
			  setStore({ description: data.result });
			} else {
			  console.error("Unexpected response structure:", data);
			}
		  } catch (error) {
			console.error("Error fetching description:", error);
		  }
		},
		fetchVehicle: async (id) => {
		  try {
			const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
			const data = await response.json();
			if (data.result && data.result.properties) {
			  setStore({ vehicle: data.result.properties });
			} else {
			  console.error("Unexpected response structure:", data);
			}
		  } catch (error) {
			console.error("Error fetching vehicle:", error);
		  }
		},
		fetchVehicleDescription: async (id) => {
		  try {
			const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
			const data = await response.json();
			if (data.result) {
			  setStore({ description: data.result });
			} else {
			  console.error("Unexpected response structure:", data);
			}
		  } catch (error) {
			console.error("Error fetching description:", error);
		  }
		},
		addFavorite: (item) => {
		  const store = getStore();
		  if (!store.favorites.some(fav => fav.uid === item.uid)) {
			setStore({ favorites: [...store.favorites, item] });
		  }
		},
		removeFavorite: (item) => {
		  const store = getStore();
		  setStore({ favorites: store.favorites.filter(fav => fav.uid !== item.uid) });
		},
	  },
	};
  };
  
  export default getState;