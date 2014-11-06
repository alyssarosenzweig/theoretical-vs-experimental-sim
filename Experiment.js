function Experiment(theoretical) {
	this.iterations = 0;
	this.sum = 0;
	this.trials = 1000;
	this.theoretical = theoretical;
}

Experiment.prototype.run = function() {
	return 1;
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
	return (this.expected() - this.experimentalProbability()) / this.expected();
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