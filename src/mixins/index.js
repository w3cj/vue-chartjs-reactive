function _watchChartData () {
  let firstWatch = true
  this._unWatchChartData = this.$watch('chartData', () => {
    if (firstWatch) {
      firstWatch = false
    } else {
      dataHandler.call(this)
    }
  }, {
    deep: true
  })
}

function dataHandler () {
  if (!this.$data._chart) {
    this.renderChart(this.chartData, this.options)
  } else if (!this._updatingChart) {
    this._unWatchChartData()
    this.$data._chart.update()
    this._watchChartData()
  }
}

export const reactiveData = {
  data () {
    return {
      _unWatchChartData: null,
      _updatingChart: false,
      chartData: null
    }
  },
  mounted () {
    this._watchChartData()
  },
  methods: {
    _watchChartData
  }
}

export const reactiveProp = {
  data () {
    return {
      _unWatchChartData: null,
      _updatingChart: false
    }
  },
  props: {
    chartData: {
      required: true
    }
  },
  mounted () {
    this._watchChartData()
  },
  methods: {
    _watchChartData
  }
}

export default {
  reactiveData,
  reactiveProp
}
