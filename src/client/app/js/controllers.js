function TodoController($scope, $http){
	$http.get('http://localhost:8080/items').success(function(data){
		$scope.todos = data;
	})

	$scope.addTodo = function(){
		$scope.todos.push({text:$scope.todoText});
		$scope.todoText = '';
	};
}