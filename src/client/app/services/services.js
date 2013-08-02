app.service('TodoItemService', function ($http){
	this.getTodoItems = function() {
		var promise = $http.get('http://localhost:8080/items').then(function (response) {
			console.log(response);
			return response.data;
		});
		return promise;		
	};

	this.addTodoItem = function(todoItem) {
		var promise = $http.post('http://localhost:8080/items', todoItem).then(function (response) {
			console.log(response);
			return response.data;
		});
		return promise;
	};	
});