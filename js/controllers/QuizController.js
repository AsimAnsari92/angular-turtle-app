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
	vm.activeQuestion=	0;
	vm.QuizAnswer= QuizAnswer;

	var numberofQuestionAnswered= 0;
	function QuizAnswer()
	{
		var quizLength = DataService.quizQuestions.length - 1;
		if(quizLength<vm.activeQuestion)
		{
			vm.activeQuestion++;
		}
	}




	function QuestionAnswer()
	{
		var quizLength = DataService.quizQuestions.length;
		//console.log(DataService.quizQuestions[vm.activeQuestion].selected); 
		if(DataService.quizQuestions[vm.activeQuestion].selected!==null)
		{
			numberofQuestionAnswered++;
			if(numberofQuestionAnswered>=quizLength)
			{

			}
		}
	}

}


})();