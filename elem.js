    function add() 
    {
		var num1 = document.getElementById("num1").value;
		var num2 = document.getElementById("num2").value;
		
		var sum = parseInt(num1) + parseInt(num2);
		
		document.getElementById("final").innerHTML = sum;
    }
    
    function boxM() {
        if (document.getElementById("select").value == "√") {
            document.getElementById("num1").style.width = "180px";
        }
        else {
            document.getElementById("num1").style.width = "275px";
        }
    }
    function sub()
    {
        var num1 = document.getElementById("num1").value;
        var num2 = document.getElementById("num2").value;

        var diff = parseInt(num1) - parseInt(num2);

        document.getElementById("final").innerHTML = diff;
    }
    function mult()
    {
        var num1 = document.getElementById("num1").value;
        var num2 = document.getElementById("num2").value;

        var prod = parseInt(num1) * parseInt(num2);

        document.getElementById("final").innerHTML = prod;
    }
    function divi()
    {
        var num1 = document.getElementById("num1").value;
        var num2 = document.getElementById("num2").value;

        var divi = parseFloat(num1) /parseFloat(num2);

        document.getElementById("final").innerHTML = divi;
    }

    function roots() {
		var root = document.getElementById("num1").value;
		var inside = document.getElementById("num2").value;
		
		var num = Math.pow(inside,(1/root));
		
		document.getElementById("final").innerHTML = num;
	}

    function select()
    {
        var select = document.getElementById("select").value;

        switch(select)
        {
            case "+":
                add();
                break;
            case "-":
                sub();
                break;
            case "*":
                mult();
                break;
            case "/":
                divi();
                break;
            case "√":
                roots();
                break;

        }
    }