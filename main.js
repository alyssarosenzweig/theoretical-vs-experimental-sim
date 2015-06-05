var components = [], componentIdCounter = 0, componentGUI = {};

var TRIALS = 1000000;
var IDEAL_WIDTH = 25;

function addComponent(complex) {
	var comp = new Component();
	comp.id = componentIdCounter++;
	components.push(comp);

	addComponentGUI(comp.id, complex);

	componentGUI[comp.id] = {
		comp: comp,
		complex: complex
	};
}

function addComponentGUI(id, complex) {
	document.getElementById('components').innerHTML +=
		 "<div id=\"component"+id+"\">"+
			(complex ? "Code: " : "Options: ") +
			(complex ? "<textarea>return Math.random() > 0.5</textarea>. Theoretical: <textarea>return 0.5</textarea>. " : "<input/>") +
		"</div>";
}

function start() {
	var theoretical = new Theoretical();

	for(var i = 0; i < components.length; ++i) {
		var comp = components[i];

		if(componentGUI[comp.id].complex) {
			var guiComp = document.getElementById('component' + comp.id);
			var code1 = '(function(){'+(guiComp.children[0].value)+'})';
			var code2 = '(function(){'+(guiComp.children[1].value)+'})';

			comp.run = eval(code1);
			comp.probability = eval(code2);
		} else {
			comp.options = document.getElementById('component'+(comp.id)).children[0].value;
		}

		theoretical.addGeneric(components[i]);
	}

	run(new Experiment(theoretical, TRIALS));
}

function run(e) {
	var devianceLabels = [];
	var devianceData = [];
	var experimentalLabels = [];
	var experimentalData = [];

	while(!e.isDone()) {
		e.iterateRun(Math.round(e.trials / IDEAL_WIDTH));

		devianceLabels.push(e.iterations);
		devianceData.push(e.deviance());

		experimentalLabels.push(e.iterations);
		experimentalData.push(e.experimentalProbability());
	}

	document.getElementById('theoretical').innerHTML = e.expected();
	document.getElementById('experimental').innerHTML = e.experimentalProbability() + "(" + toFrac(e.experimentalProbability()) + ")";
	document.getElementById('deviance').innerHTML = e.deviance();


	graph('deviance', devianceLabels, devianceData);
	graph('experimental', experimentalLabels, experimentalData);

	document.getElementById('results').style.display = 'block';
}

function graph(id, labels, data) {
	new Chart(
		document.getElementById(id+"Graph").getContext('2d')
	).Line({
		labels: labels,
		datasets: [{
			fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: data
		}]
	});
}
