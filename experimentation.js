function Experiment() {

}

Experiment.prototype.run = function() {
	return 1;
}

Experiment.prototype.expected = function() {
	return 1;
}

Experiment.prototype.iterateRun = function(numIterations) {
	var sum = 0;
	for(var i = 0; i < numIterations; ++i) {
		sum += this.run();
	}

	return sum / numIterations;
}