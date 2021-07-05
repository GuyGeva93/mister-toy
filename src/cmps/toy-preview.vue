
<template>
  <section class="toy-preview">
    <h2>{{ toy.name }}</h2>
    <span>Type: {{ toy.type }}</span>
    <span>${{ toy.price }}</span>
  </section>
</template>

<script>
export default {
  props: {
    toy: Object,
  },
  data() {
    return {};
  },
};
</script>
