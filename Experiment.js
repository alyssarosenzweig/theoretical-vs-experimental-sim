function Experiment(theoretical, trials) {
	this.iterations = 0;
	this.sum = 0;
	this.trials = trials;
	this.theoretical = theoretical;
}

Experiment.prototype.run = function() {
	var result = true;

	for(var i = 0; i < this.theoretical.comps.length; ++i) {
		result &= this.theoretical.comps[i].run()	
	}

	return result ? 1 : 0;
}

Experiment.prototype.expected = function() {
	return this.theoretical.calculate();
}

Experiment.prototype.isDone = function() {
	return this.iterations >= this.trials;
}

Experiment.prototype.iterate = function() {
	this.sum += this.run();
	this.iterations++;
}

Experiment.prototype.experimentalProbability = function() {
	return this.sum / this.iterations;
}

Experiment.prototype.deviance = function() {
	return (this.expected() - this.experimentalProbability());
}

Experiment.prototype.iterateRun = function(numIterations) {
	while(numIterations--) {
		this.iterate();
	}

	return this.experimentalProbability();
}

if(typeof module !== 'undefined') {
	module.exports = Experiment;
}