<template>
  <main class="w-screen h-screen">
    <v-map
      class="w-full h-full" 
      :options="state.map"
      @loaded="onMapLoaded"
      @click="$emit('openSidebar')"
    >
      <template v-if="loaded">
        <v-marker
          v-for="(marker, index) in markers"
          :key="index"
          :coordinates="marker.coordinates"
          :options="marker.options"
          :popup-options="marker.popup"
        >
          <template>
            <div>
              Popup Content: {{ marker.popup.content }}
              <img src="https://picsum.photos/200" />
            </div>
          </template>
        </v-marker>
      </template>
    </v-map>
  </main>
</template>

<script setup lang="ts">
import { defineEmits, reactive, computed, ref } from "vue";
import { VMap, VMarker } from "v-mapbox";
import { useMarkerStore } from '../../store/markerStore'

defineEmits<{
  (e: 'openSidebar'): void;
}>();

const state = reactive({
  ui: {
    loaded: false,
    styleChanged: true,
  },
  map: {
    accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
    style: import.meta.env.VITE_MAPBOX_STYLE,
    center: [73.8567, 18.5204],
    zoom: 11,
    maxZoom: 22,
    crossSourceCollisions: false,
    failIfMajorPerformanceCaveat: false,
    attributionControl: false,
    preserveDrawingBuffer: true,
    hash: false,
    minPitch: 0,
    maxPitch: 60,
  },
});

const loaded = computed(() => state.ui.loaded);

const { markers } = useMarkerStore();

// const handleClick = (e: any) => {
//   if (e.lngLat) {
//     console.log(e)
//     markers.value = [...markers.value, createMarker(e.lngLat)];
//   }
// };

function onMapLoaded(map: any) {
  [
    "idle",
    "moveend",
    "touchend",
    "style.load",
    "sourcedata",
    "sourcedataloading",
  ].forEach((event) => {
    map.on(event, () => {
      if (event === "style.load") {
        const waiting = () => {
          if (!map.isStyleLoaded()) {
            state.ui.styleChanged = false;
            setTimeout(waiting, 200);
          } else {
            state.ui.styleChanged = true;
          }
        };
        waiting();
      }
    });
  });
  state.ui.styleChanged = true;
  state.ui.loaded = true;
}
</script>

<style lang="scss" scoped>
html,
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.w-screen {
  width: 100vw;
}
.h-screen {
  height: calc(100vh - 6rem);
}
.h-full {
  height: 100%;
}
.w-full {
  width: 100%;
}
</style>