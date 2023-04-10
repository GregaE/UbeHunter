import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useMarkerStore = defineStore('markerStore', () => {
  const markers = ref<Array<any>>([
    {
      options: { color: "red", draggable: true },
      coordinates: [73.858, 18.5204],
      popup: {
        options: {
          closeButton: false,
          closeOnClick: true,
          closeOnMove: true,
        },
        content: "ABC",
      },
    },
    {
      options: { color: "indigo", draggable: false },
      coordinates: [73.8567, 18.5514],
      popup: {
        options: {
          closeButton: true,
          closeOnClick: false,
          closeOnMove: false,
        },
        content: "XYZ",
      },
    },
  ]);

  const getMarkers = computed(() => markers.value);

  function addMarker(marker: string) {
    markers.value = [marker, markers.value];
  }

  return {
    // State
    markers,
    // Getters
    getMarkers,
    // Actions
    addMarker,
  };
});
