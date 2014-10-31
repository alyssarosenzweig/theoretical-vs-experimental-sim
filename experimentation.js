function Experiment() {
	this.iterations = 0;
	this.sum = 0;
}

Experiment.prototype.run = function() {
	return 1;
}

Experiment.prototype.expected = function() {
	return 1;
}

Experiment.prototype.iterate = function() {
	this.sum += this.run();
	this.iterations++;
}

Experiment.prototype.experimentalProbability = function() {
	return this.sum / this.iterations;
}

Experiment.prototype.iterateRun = function(numIterations) {
	while(numIterations--) {
		this.iterate();
	}

	return this.experimentalProbability();
}

if(process) {
	module.exports = Experiment;
}