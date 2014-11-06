function Theoretical() {
	this.comps = [];
}

Theoretical.prototype.calculate = function() {

}

function Component() {
	this.options = 1;	
}

Component.prototype.probability = function() {
	return 1 / this.options;
}