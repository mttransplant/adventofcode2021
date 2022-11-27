// Day 2, Problem #1
// https://adventofcode.com/2021
// Adam Smith

const ingestFile = file => {
	const fs = require('fs');
	const thisFile = fs.readFileSync(__dirname + '/' + file + '.txt', 'utf-8');
	return thisFile.split('\n');
}

const parseLines = lines => {
	return lines.map(l => {
		const lineArr = l.split(' ');
		const lineObj = {};
		lineObj['dir'] = lineArr[0];
		lineObj['dist'] = parseInt(lineArr[1]);
		return lineObj;
	});
}

const submarine = {
	position: 0,
	depth: 0,
	up: function(v) {
		this.depth = this.depth-v;
	},
	down: function(v) {
		this.depth = this.depth+v;
	},
	forward: function(v) {
		this.position = this.position+v;
	},
	getPosition: function() {
		return this.position;
	},
	getDepth: function() {
		return this.depth;
	},
	getFinal: function() {
		return this.depth * this.position;
	}
}


const lines = ingestFile('Input');
const tripPlan = parseLines(lines);

tripPlan.forEach(move => submarine[move.dir](move.dist));
console.log(submarine.getFinal());