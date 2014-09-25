var TodoCrawler = function () {

    this.name = '';

    this.todos = [
      {text:'learn angular', done:true, synched: true},
      {text:'build an angular app', done:false, synched: true}];

    this.resourceMap = null;

    this.createResourceMap = function (url) {
      $http({method: 'GET', url: url}).
        success(function(data, status, headers, config) {

          // try to parse with microdata
          var resourceMapMicrodata = ResourceMapMicrodata();
          this.resourceMap = resourceMapMicrodata.tryParse(data, status, headers, config);
          if(this.resourceMap !== null)
          {
            return;
          }

          // try to parse as RDFa
          var resourceMapRDFa = ResourceMapRDFa();
          this.resourceMap = resourceMapRDFa.tryParse(data, status, headers, config);
          if(this.resourceMap !== null)
          {
            return;
          }

          // TODO: See TODO in error function below

        }).
        error(function(data, status, headers, config) {
          // TODO: try again
          // or the resource map is not a resource that can be parsed by this guys
          // or ... go into "offline mode" 
          // or ... tell user to upgrade their client
        });
    	
	    this.todos.push({text:name, done:isDone});
    }

    this.remaining = function() {
      var count = 0;
      angular.forEach(todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    this.archive = function() {
    	var oldTodos = todos;
    	this.todos = [];
      	angular.forEach(oldTodos, function(todo) {
        	if (!todo.done) this.todos.push(todo);
        });
    }

    return this;
};