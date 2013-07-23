function TodoController($scope, $http){
	//$http.get('http://localhost:8080/items').success(function(data){
	//	$scope.todos = data;
	//})

	$scope.todos = [
		{id: 1, description: 'get paid'},
		{id: 2, description: 'get groceries'},
		{id: 3, description: 'get laid'},
		];

	$scope.addTodo = function(){
		$scope.todos.push({text:$scope.todoText});
		$scope.todoText = '';
	};
}