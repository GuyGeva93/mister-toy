<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Funny', 'Education', 'Adult'],
      datasets: [
        {
          label: 'Toys types',
          backgroundColor: ['lightgreen', 'lightblue', 'lightpink'],
          data: [40, 20, 12],
        },
      ],
    })
  },

  data() {
    return {
      toys: [],
      funny: [],
      educational: [],
      adult:[]
    }
  },
  created() {
   
  },

  methods: {
    
  },
}
</script>

<style></style>
