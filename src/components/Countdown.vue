<template>
	<div class="countdown">
		<div class="time-unite created">
			<div class="time-unite-value">
				<span v-if="minutes < 10 ">0{{ minutes }}</span> 
				<span v-else>{{ minutes }}</span> 
				<span>:</span> 
				<span v-if="seconds < 10 ">0{{ seconds }}</span> 
				<span v-else>{{ seconds }}</span> </div>
		</div>
	</div>
</template>

<script>
	import moment from 'moment'
	export default {
    name: 'countdown',
		data () {
			return {
				actualTime: moment().format('X'),
				minutes: 0,
				seconds: 0,
        timer: moment().add(900, 'seconds').format('X')
			}
		},
		methods: {
		  addOneSecondToActualTimeEverySecond () {
				var component = this
				component.actualTime = moment().format('X')
				setTimeout(function(){
					component.addOneSecondToActualTimeEverySecond()
				}, 1000);
		  },
		  getDiffInSeconds () {
		    return this.timer - this.actualTime
		  },
		  compute () {
		    var duration = moment.duration(this.getDiffInSeconds(), "seconds")
		    this.minutes = duration.minutes() > 0 ? duration.minutes() : 0
		    this.seconds = duration.seconds() > 0 ? duration.seconds() : 0
		  }
		},
		created () {
		  this.compute()
		  this.addOneSecondToActualTimeEverySecond()
		},
		watch: {
			actualTime (val,oldVal) {
				this.compute()
			}
		}
	}
</script>