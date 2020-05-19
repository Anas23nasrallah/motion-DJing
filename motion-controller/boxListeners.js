(function(){
	// consider using a debounce utility if you get too many consecutive events
	$(window).on('motion', function(ev, data){
		// console.log('detected motion at', new Date(), 'with data:', data);
		console.log('touched one')
		var spot = $(data.spot.el);
		spot.addClass('active');
		setTimeout(function(){
			spot.removeClass('active');
		}, 230);
	});

	// // example using a class
	// $('.link').on('motion', function(ev, data){
	// 	console.log('motion detected on a link to', data.spot.el.href);
	// });

	// examples for id usage
	// $('#one').on('motion', function(){
	// 	console.log('touched one');
	// });


	$('.box-top-left').on('motion',async function(ev, data){
		
		let synth = new Tone.Synth().toMaster()
		synth.triggerAttackRelease('D4', '4n')
		await Tone.start()

		var spot = $(data.spot.el);
		spot.addClass('active');
		setTimeout(function(){
			spot.removeClass('active');
		}, 230);
	})

	$('.box-top-right').on('motion',async function(ev, data){
		
		let synth = new Tone.Synth().toMaster()
		synth.triggerAttackRelease('D5', '4n')
		await Tone.start()

		var spot = $(data.spot.el);
		spot.addClass('active');
		setTimeout(function(){
			spot.removeClass('active');
		}, 230);
	})
	$('.box-bot-left').on('motion',async function(ev, data){
		
		let synth = new Tone.Synth().toMaster()
		synth.triggerAttackRelease('C1', '4n')
		await Tone.start()

		var spot = $(data.spot.el);
		spot.addClass('active');
		setTimeout(function(){
			spot.removeClass('active');
		}, 230);
	})
	$('.box-bot-right').on('motion',async function(ev, data){
		
		let synth = new Tone.Synth().toMaster()
		synth.triggerAttackRelease('C4', '4n')
		await Tone.start()

		var spot = $(data.spot.el);
		spot.addClass('active');
		setTimeout(function(){
			spot.removeClass('active');
		}, 230);
	})

})();

