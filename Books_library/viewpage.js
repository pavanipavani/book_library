		let result=JSON.parse(localStorage.getItem("bookDetails"))||[];
		let display=document.querySelector(".display");
		
		for(let i=0;i<result.length;i++)
		{	
			
			//console.log(result[i]);
			let divTag = document.createElement("div");
			let first=document.createElement("div");
			
			let img = document.createElement("img");
			img.setAttribute("src",result[i].avatar);
			
			
			let second = document.createElement("div");
			let name=document.createElement("p");
			name.innerText=result[i].name;
			
			let author = document.createElement("p");
			author.innerText="-"+result[i].author;
			
			let publisher = document.createElement("p");
			publisher.innerText="("+result[i].publisher+")";
			
			
			first.append(img);
			
		
			second.append(name,author,publisher);
			
			
			divTag.append(first,second);
			
			display.append(divTag);
			
			
			divTag.setAttribute("class" ,"divTag");	
			img.setAttribute("class","img");
			name.setAttribute("class", "name");
			author.setAttribute("class", "author");7
			publisher.setAttribute("class", "publisher");
		
		divTag.setAttribute("onClick" ,`functionName(${i})`);
		function functionName(i){
			localStorage.setItem("onebook",JSON.stringify(result[i]));
			window.location.href="onebook.html";
		
		}
		}
		
