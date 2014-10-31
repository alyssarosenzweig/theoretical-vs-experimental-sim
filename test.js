var e = new (require('./Experiment'))
e.run = function() { return (Math.random() > 0.5) ? 1 : 0 }
e.expected = function() { return 0.5; }

for(;;) {
	e.iterate();
	console.log(e.deviance());
}