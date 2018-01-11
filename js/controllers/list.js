(function(){


angular.module("turtleFacts")
		.controller('lsitCtrls',lsitCtrls);

        lsitCtrls.inject  = ['quizMectrics','DataService'];
 
		function lsitCtrls(quizMectrics,DataService)
		{
            vm=this;
			vm.data=DataService.turtlesData;
            vm.quizMectrics = quizMectrics;
            vm.activeTurtle={};
            vm.changeActiveTurtle=changeActiveTurtle;
            vm.activateQuiz = activateQuiz;
            //vm.activeQuiz=false;
            vm.search="";
             function changeActiveTurtle(index)
            {
                 vm.activeTurtle=index;
             } 
            function activateQuiz()
            {
                //vm.activeQuiz=true;
                quizMectrics.changeState(true);
            }
		}
  

 
})();