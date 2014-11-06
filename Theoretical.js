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

Theoretical.prototype.addGeneric = function(comp) {
	this.comps.push(comp);
}

Theoretical.prototype.addSimple = function(options) {
	var comp = new Component();
	comp.options = options;
	this.addGeneric(comp);
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