<template>
  <section class="toy-maps">
    <GmapMap
      :center="mapInitPos"
      :zoom="8"
      map-type-id="terrain"
      style="width: 800px; height: 600px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        :title="m.title"
        :label="'T'"
        @click="center = m.position"
      />
    </GmapMap>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mapInitPos: { lat: 32.08813740644578, lng: 34.80306703098529 },

      markers: [
        {
          position: { lat: 32.79039032807992, lng: 35.00697600213355 },
          title: 'Toy-Store Haifa',
        },
        {
          position: { lat: 32.27908328241353, lng: 34.847448110702494 },
          title: 'Toy-Store Netanya',
        },
        {
          position: { lat: 31.777737514658295, lng: 35.22392106554798 },
          title: 'Toy-Store Jerusalem',
        },
      ],
    }
  },
}
</script>

<style></style>
