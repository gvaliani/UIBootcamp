var MovieModule = (function(){
	var attributes = {};

	function MovieModule(){
		console.log('Constructor MovieModule');

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
		}
	}

	return new MovieModule();
});

var DownloadableMovie = function(){
	this.set('name', 'Montotto');
	console.log('Constructor DownloadableMovie');
	//DownloadableMovie.prototype.call(this);
};

DownloadableMovie.prototype = new MovieModule();
DownloadableMovie.prototype.constructor = DownloadableMovie;
DownloadableMovie.prototype.download = function(){
	console.log('download');
}