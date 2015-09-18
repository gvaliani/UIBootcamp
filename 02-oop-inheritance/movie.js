function Movie(){
	var attributes = {};

	this.play = function(){
		pub.publish('play', 'playing ' + attributes['name']);
	};

	this.stop = function(){

	};

	this.set = function(attr, value){
		attributes[attr] = value;
	};

	this.get = function(attr){
		return attributes[attr];
	};
}