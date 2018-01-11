(function()
{ 
	/**
	*  Module turtleFacts
	 */
	angular.module('turtleFacts')
			.factory('quizMectrics',quizMectrics);


			function quizMectrics()
			{
				var QuizObj = {
					activeQuiz : false,
					changeState:changeState
				}
				return QuizObj;

				function changeState(state)
				{
					QuizObj.activeQuiz  = true;
				}
			}












































	/*angular.module('turtleFacts')
			.factory('quizMectrics',quizMectrics);

			function quizMectrics()
			{
				var QuizObj = {
					activeQuiz:false,
					changeState : changeState
				};

				return QuizObj;

				function changeState(state)
				{
					QuizObj.activeQuiz  = state;
				}
			}*/



})();