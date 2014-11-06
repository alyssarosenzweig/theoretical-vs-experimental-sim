function Theoretical() {
	this.comps = [];
}

Theoretical.prototype.calculate = function() {
	this.prob = 1;

	for(var i = 0; i < this.comps.length; ++i) {
		this.prob *= this.comps[i].probability();
	}

	return this.prob;
}

function Component() {
	this.options = 1;	
}

Component.prototype.probability = function() {
	return 1 / this.options;
}

if(typeof module !== 'undefined') {
	module.exports.Theoretical = Theoretical;
	module.exports.Component = Component;
}