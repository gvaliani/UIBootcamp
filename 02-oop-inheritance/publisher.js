var Publisher = (function(){
	var topics = {};

	this.subscribe = function(topic, callback){
		if(!topics[topic]){
			topics[topic] = [];
		}

		topics[topic].push(callback);
	};

	this.publish = function(topic, args){
		for(var i = 0; i < topics[topic].length; i++){
			topics[topic][i](args);
		}
	};
});