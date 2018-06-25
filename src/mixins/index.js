function dataHandler () {
  if (this.$data._chart) {
    this.$data._chart.update()
  } else {
    this.renderChart(this.chartData, this.options)
  }
}

export const reactiveData = {
  data () {
    return {
      chartData: null
    }
  },

  watch: {
    'chartData': {
      handler: dataHandler,
      deep: true
    }
  }
}

export const reactiveProp = {
  props: {
    chartData: {
      required: true
    }
  },
  watch: {
    'chartData': {
      handler: dataHandler,
      deep: true
    }
  }
}

export default {
  reactiveData,
  reactiveProp
}
