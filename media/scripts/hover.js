$(document).ready(function(){
var mem1,mem2,mem3,mem4,mem5,mem6,mem7,mem8,mem9;
mem1=0;mem2=0;mem3=0;mem4=0;mem5=0;mem6=0;mem7=0;mem8=0;mem9=0;
  			
			$("#tab1").click(function(){
	           if(mem1==0){
						$(".menu").css({visibility:"hidden"});	           		
	           		$("#menu1").css({visibility:"visible"});mem1=1;
	           		if(mem2==1){mem2=0;} else if(mem3==1){mem3=0;} else if(mem4==1){mem4=0;} else if(mem5==1){mem5=0;} else if(mem6==1){mem6=0;}
	           		else if(mem7==1){mem7=0;} else if(mem8==1){mem8=0;} else{mem9=0;}
	           		}
	      	  else{$("#menu1").css({visibility:"hidden"});mem1=0;}
         });
        		
			$("#tab2").click(function(){
	           if(mem2==0){
						$(".menu").css({visibility:"hidden"});	           		
	           		$("#menu2").css({visibility:"visible"});mem2=1;
	           		if(mem1==1){mem1=0;} else if(mem3==1){mem3=0;} else if(mem4==1){mem4=0;} else if(mem5==1){mem5=0;} else if(mem6==1){mem6=0;}
	           		else if(mem7==1){mem7=0;} else if(mem8==1){mem8=0;} else{mem9=0;}
	           		}
	      	  else{$("#menu2").css({visibility:"hidden"});mem2=0;}
         });
         

			
			$("#tab3").click(function(){
	           if(mem3==0){
						$(".menu").css({visibility:"hidden"});	           		
	           		$("#menu3").css({visibility:"visible"});mem3=1;
	           		if(mem2==1){mem2=0;} else if(mem1==1){mem1=0;} else if(mem4==1){mem4=0;} else if(mem5==1){mem5=0;} else if(mem6==1){mem6=0;}
	           		else if(mem7==1){mem7=0;} else if(mem8==1){mem8=0;} else{mem9=0;}
	           		}
	      	  else{$("#menu3").css({visibility:"hidden"});mem3=0;}
         });
         

			        
			$("#tab4").click(function(){
	           if(mem4==0){
						$(".menu").css({visibility:"hidden"});	           		
	           		$("#menu4").css({visibility:"visible"});mem4=1;
	           		if(mem2==1){mem2=0;} else if(mem3==1){mem3=0;} else if(mem1==1){mem1=0;} else if(mem5==1){mem5=0;} else if(mem6==1){mem6=0;}
	           		else if(mem7==1){mem7=0;} else if(mem8==1){mem8=0;} else{mem9=0;}
	           		}
	      	  else{$("#menu4").css({visibility:"hidden"});mem4=0;}
         });
         

			
			$("#tab5").click(function(){
	           if(mem5==0){
						$(".menu").css({visibility:"hidden"});	           		
	           		$("#menu5").css({visibility:"visible"});mem5=1;
	           		if(mem2==1){mem2=0;} else if(mem3==1){mem3=0;} else if(mem4==1){mem4=0;} else if(mem1==1){mem1=0;} else if(mem6==1){mem6=0;}
	           		else if(mem7==1){mem7=0;} else if(mem8==1){mem8=0;} else{mem9=0;}
	           		}
	      	  else{$("#menu1").css({visibility:"hidden"});mem5=0;}
         });
         

			
			$("#tab6").click(function(){
	           if(mem6==0){
						$(".menu").css({visibility:"hidden"});	           		
	           		$("#menu6").css({visibility:"visible"});mem6=1;
	           		if(mem2==1){mem2=0;} else if(mem3==1){mem3=0;} else if(mem4==1){mem4=0;} else if(mem5==1){mem5=0;} else if(mem1==1){mem1=0;}
	           		else if(mem7==1){mem7=0;} else if(mem8==1){mem8=0;} else{mem9=0;}
	           		}
	      	  else{$("#menu6").css({visibility:"hidden"});mem6=0;}
         });
         
			$("#tab7").click(function(){
	           if(mem7==0){
						$(".menu").css({visibility:"hidden"});	           		
	           		$("#menu7").css({visibility:"visible"});mem7=1;
	           		if(mem2==1){mem2=0;} else if(mem3==1){mem3=0;} else if(mem4==1){mem4=0;} else if(mem5==1){mem5=0;} else if(mem1==1){mem1=0;}
	           		else if(mem6==1){mem6=0;} else if(mem8==1){mem8=0;} else{mem9=0;}
	           		}
	      	  else{$("#menu6").css({visibility:"hidden"});mem7=0;}
         });
			
			$("#tab8").click(function(){
	           if(mem8==0){
						$(".menu").css({visibility:"hidden"});	           		
	           		$("#menu8").css({visibility:"visible"});mem8=1;
	           		if(mem2==1){mem2=0;} else if(mem3==1){mem3=0;} else if(mem4==1){mem4=0;} else if(mem5==1){mem5=0;} else if(mem1==1){mem1=0;}
	           		else if(mem7==1){mem7=0;} else if(mem6==1){mem6=0;} else{mem9=0;}
	           		}
	      	  else{$("#menu8").css({visibility:"hidden"});mem8=0;}
         });
			
			$("#tab9").click(function(){
	           if(mem6==0){
						$(".menu").css({visibility:"hidden"});	           		
	           		$("#menu9").css({visibility:"visible"});mem9=1;
	           		if(mem2==1){mem2=0;} else if(mem3==1){mem3=0;} else if(mem4==1){mem4=0;} else if(mem5==1){mem5=0;} else if(mem1==1){mem1=0;}
	           		else if(mem7==1){mem7=0;} else if(mem8==1){mem8=0;} else{mem6=0;}
	           		}
	      	  else{$("#menu9").css({visibility:"hidden"});mem9=0;}
         });
         
         $("#tab1").hover(
				function(){
				   $(".menu").css({visibility:"hidden"});	
					$("#menu1").css({visibility:"visible"});},
				function(){
					if(mem1==0){$("#menu1").css({visibility:"hidden"});
            		if(mem2==1){$("#menu2").css({visibility:"visible"});}
            		else if(mem3==1){$("#menu3").css({visibility:"visible"});}
            		else if(mem4==1){$("#menu4").css({visibility:"visible"});}
            		else if(mem5==1){$("#menu5").css({visibility:"visible"});}
            		else if(mem6==1){$("#menu6").css({visibility:"visible"});}
            		else if(mem7==1){$("#menu7").css({visibility:"visible"});}
            		else if(mem8==1){$("#menu8").css({visibility:"visible"});}
            		else if(mem9==1){$("#menu9").css({visibility:"visible"});}	
				}}
			);
			
			$("#tab2").hover(
				function(){
				   $(".menu").css({visibility:"hidden"});	
					$("#menu2").css({visibility:"visible"});},
				function(){
					if(mem2==0){$("#menu2").css({visibility:"hidden"});
            		if(mem1==1){$("#menu1").css({visibility:"visible"});}
            		else if(mem3==1){$("#menu3").css({visibility:"visible"});}
            		else if(mem4==1){$("#menu4").css({visibility:"visible"});}
            		else if(mem5==1){$("#menu5").css({visibility:"visible"});}
            		else if(mem6==1){$("#menu6").css({visibility:"visible"});}
            		else if(mem7==1){$("#menu7").css({visibility:"visible"});}
            		else if(mem8==1){$("#menu8").css({visibility:"visible"});}
            		else if(mem9==1){$("#menu9").css({visibility:"visible"});}	
				}}
			);
			
			$("#tab3").hover(
				function(){
				   $(".menu").css({visibility:"hidden"});	
					$("#menu3").css({visibility:"visible"});},
				function(){
					if(mem3==0){$("#menu3").css({visibility:"hidden"});
            		if(mem2==1){$("#menu2").css({visibility:"visible"});}
            		else if(mem1==1){$("#menu1").css({visibility:"visible"});}
            		else if(mem4==1){$("#menu4").css({visibility:"visible"});}
            		else if(mem5==1){$("#menu5").css({visibility:"visible"});}
            		else if(mem6==1){$("#menu6").css({visibility:"visible"});}
            		else if(mem7==1){$("#menu7").css({visibility:"visible"});}
            		else if(mem8==1){$("#menu8").css({visibility:"visible"});}
            		else if(mem9==1){$("#menu9").css({visibility:"visible"});}	
				}}
			);
			
			$("#tab4").hover(
				function(){
				   $(".menu").css({visibility:"hidden"});	
					$("#menu4").css({visibility:"visible"});},
				function(){
					if(mem4==0){$("#menu4").css({visibility:"hidden"});
            		if(mem2==1){$("#menu2").css({visibility:"visible"});}
            		else if(mem3==1){$("#menu3").css({visibility:"visible"});}
            		else if(mem1==1){$("#menu1").css({visibility:"visible"});}
            		else if(mem5==1){$("#menu5").css({visibility:"visible"});}
            		else if(mem6==1){$("#menu6").css({visibility:"visible"});}
            		else if(mem7==1){$("#menu7").css({visibility:"visible"});}
            		else if(mem8==1){$("#menu8").css({visibility:"visible"});}
            		else if(mem9==1){$("#menu9").css({visibility:"visible"});}	
				}}
			);
			
			$("#tab5").hover(
				function(){
				   $(".menu").css({visibility:"hidden"});	
					$("#menu5").css({visibility:"visible"});},
				function(){
					if(mem5==0){$("#menu5").css({visibility:"hidden"});
            		if(mem2==1){$("#menu2").css({visibility:"visible"});}
            		else if(mem3==1){$("#menu3").css({visibility:"visible"});}
            		else if(mem4==1){$("#menu4").css({visibility:"visible"});}
            		else if(mem1==1){$("#menu1").css({visibility:"visible"});}
            		else if(mem6==1){$("#menu6").css({visibility:"visible"});}
            		else if(mem7==1){$("#menu7").css({visibility:"visible"});}
            		else if(mem8==1){$("#menu8").css({visibility:"visible"});}
            		else if(mem9==1){$("#menu9").css({visibility:"visible"});}	
				}}
			);
			
			$("#tab6").hover(
				function(){
				   $(".menu").css({visibility:"hidden"});	
					$("#menu6").css({visibility:"visible"});},
				function(){
					if(mem6==0){$("#menu6").css({visibility:"hidden"});
            		if(mem2==1){$("#menu2").css({visibility:"visible"});}
            		else if(mem3==1){$("#menu3").css({visibility:"visible"});}
            		else if(mem4==1){$("#menu4").css({visibility:"visible"});}
            		else if(mem5==1){$("#menu5").css({visibility:"visible"});}
            		else if(mem1==1){$("#menu1").css({visibility:"visible"});}
            		else if(mem7==1){$("#menu7").css({visibility:"visible"});}
            		else if(mem8==1){$("#menu8").css({visibility:"visible"});}
            		else if(mem9==1){$("#menu9").css({visibility:"visible"});}	
				}}
			);
			
			$("#tab7").hover(
				function(){
				   $(".menu").css({visibility:"hidden"});	
					$("#menu7").css({visibility:"visible"});},
				function(){
					if(mem7==0){$("#menu7").css({visibility:"hidden"});
            		if(mem2==1){$("#menu2").css({visibility:"visible"});}
            		else if(mem3==1){$("#menu3").css({visibility:"visible"});}
            		else if(mem4==1){$("#menu4").css({visibility:"visible"});}
            		else if(mem5==1){$("#menu5").css({visibility:"visible"});}
            		else if(mem6==1){$("#menu6").css({visibility:"visible"});}
            		else if(mem1==1){$("#menu1").css({visibility:"visible"});}
            		else if(mem8==1){$("#menu8").css({visibility:"visible"});}
            		else if(mem9==1){$("#menu9").css({visibility:"visible"});}	
				}}
			);
			
			$("#tab8").hover(
				function(){
				   $(".menu").css({visibility:"hidden"});	
					$("#menu8").css({visibility:"visible"});},
				function(){
					if(mem8==0){$("#menu8").css({visibility:"hidden"});
            		if(mem2==1){$("#menu2").css({visibility:"visible"});}
            		else if(mem3==1){$("#menu3").css({visibility:"visible"});}
            		else if(mem4==1){$("#menu4").css({visibility:"visible"});}
            		else if(mem5==1){$("#menu5").css({visibility:"visible"});}
            		else if(mem6==1){$("#menu6").css({visibility:"visible"});}
            		else if(mem7==1){$("#menu7").css({visibility:"visible"});}
            		else if(mem1==1){$("#menu1").css({visibility:"visible"});}
            		else if(mem9==1){$("#menu9").css({visibility:"visible"});}	
				}}
			);
			
			$("#tab9").hover(
				function(){
				   $(".menu").css({visibility:"hidden"});	
					$("#menu9").css({visibility:"visible"});},
				function(){
					if(mem9==0){$("#menu9").css({visibility:"hidden"});
            		if(mem2==1){$("#menu2").css({visibility:"visible"});}
            		else if(mem3==1){$("#menu3").css({visibility:"visible"});}
            		else if(mem4==1){$("#menu4").css({visibility:"visible"});}
            		else if(mem5==1){$("#menu5").css({visibility:"visible"});}
            		else if(mem6==1){$("#menu6").css({visibility:"visible"});}
            		else if(mem7==1){$("#menu7").css({visibility:"visible"});}
            		else if(mem8==1){$("#menu8").css({visibility:"visible"});}
            		else if(mem1==1){$("#menu1").css({visibility:"visible"});}	
				}}
			);

});
