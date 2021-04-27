<template>
  <div class="set">

  </div>
</template>

<script>
export default {
  name: 'Set',
  data () {
    return {
      arr: [
        { date: '1', time: 'zxczxc' },
        { date: '1', time: 'qweqweqasd' },
        { date: '1', time: 'erteruioweru' },
        { date: '2', time: 'asdasd' },
        { date: '2', time: 'asasdadasdasd' },
        { date: '23', time: 'qweqsczfs' },
        { date: '23', time: 'qweasdsadfweqsczfs' }
      ]
    }
  },
  mounted () {
    this.setArr(this.arr)
  },
  methods: {
    setArr (arr) {
      const obj = {}
      const setArr = arr.reduce((cur, next) => {
        cur.forEach(v => {
          if (v.date === next.date) {
            v.time = v.time.toString() + ',' + next.time.toString()
          }
        })
        // eslint-disable-next-line no-unused-expressions
        obj[next.date] ? '' : obj[next.date] = true && cur.push(next)
        return cur
      }, [])
      console.log(setArr)
    }
  }
}
</script>

<style scoped>
</style>
