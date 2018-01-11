(function(){
	
/**
	* QuizController Module
	*
	* Description
	*/
 angular.module("turtleFacts")
		.controller('QuizCtrl',QuizController);

		QuizController.$inject=['quizMectrics','DataService'];

function QuizController(quizMectrics,DataService)
{
	var vm = this;
	vm.quizMectrics = quizMectrics;
	vm.DataService = DataService;

}


})();