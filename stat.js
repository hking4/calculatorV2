function change()
    {
        if(document.getElementById("sel").value == "FACT")
        {
            document.getElementsByTagName("INPUT")[0].setAttribute("type", "number");
        }
        else
        {
            document.getElementsByTagName("INPUT")[0].setAttribute("type","text");
        }
    }
	function sdev() {
		var nums = document.getElementById("num1").value;
		var avg = aver();
		var square = 0;
		var data = [];
		var beg = 0;
		
		gather(nums,data,beg);	
			
		for(let k = 0; k < data.length; k++)
		{
			square += Math.pow(data[k]-avg,2);
		}	
		
		var inside = (1/data.length) * square;
		
		var sdev = Math.pow(inside,(1/2));
		
		document.getElementById("final").innerHTML = sdev;	
	}
	
	function aver() {
		var text = document.getElementById("num1").value;		
		
		var data = [];
		
		var beg = 0;
		
		var sum = 0;
		
		gather(text,data,beg);
		
		for(let j = 0; j < data.length; j++)
		{
			sum += data[j];
		}
		
		
		var avg = sum/data.length;

        if(document.getElementById("sel").value == "AVG")
        {
            document.getElementById("final").innerHTML = avg;
        }
        else {
            return avg;
        }
	}
	
	function gather(text,data,beg) {
		for(let i = 0; i < text.length; i++)
		{
			if(text.charAt(i) == ',') {
				data.push(parseInt(text.slice(beg,i)));
				beg = i+1;
			}
			else if(i == text.length-1)
			{
				data.push(parseInt(text.slice(beg,i+1)));
			}	
		}
	}

    function vari()
    {
        var nums = document.getElementById("num1").value;
		var avg = aver();
		var square = 0;
		var data = [];
		var beg = 0;
		
		gather(nums,data,beg);	
			
		for(let k = 0; k < data.length; k++)
		{
			square += Math.pow(data[k]-avg,2);
		}	
		
		var inside = (1/data.length) * square;
		
		document.getElementById("final").innerHTML = inside;	
    }

    function fact() {
		var max = document.getElementById("num1").value;
		var fact = 1;
		
		if(max > 0)
		{
			for(let i = 1; i <= max; i++)
			{
				fact *= i;
			}
		}
		
        document.getElementById("final").innerHTML = fact;
	}

    function selects()
    {
        var select = document.getElementById("sel").value;
        switch(select)
        {
            case "AVG":
                aver();
                break;
            case "SDEV":
                sdev();
                break;
            case "VAR":
                vari();
                break;
            case "FACT":
                fact();
                break;
        }
    }