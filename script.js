//your JS code here. If required.
document.getElementById("btn").addEventListener("click", ()=>{
let input=document.getElementById("ip").value;
let output=document.getElementById("output");
	output.innerText="";

	new Promise((resolve, reject)=>{
		setTimeout(()=>{
			const number=Number(input);
			resolve(number);
			output.innerText=`Result: ${number}`;
		}, 2000);
	})

	.then ((result)=>{
		return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			const multiplied=result*2;
			resolve(multiplied);
			output.innerText=`Result:${multiplied}`;
		},3000);
			})
	})
.then((result)=>{
	return new Promise((resolve,reject)=>{
	setTimeout(()=>{
		const subtracted=result - 3;
		resolve(subtracted);
		output.innerText=`Result: ${subtracted}`;
	},4000);
})
})

	.then((result)=>{
		return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			const divide=result / 2;
			resolve(divide);
			output.innerText=`Result:${divide}`;
		},5000);
	})
	})

	.then((result)=>{
		return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			const add=result + 10;
			resolve(add);
			output.innerText=`Final result:${add}`;
		},6000)
	})
	})
	.catch((err)=>{
		console.error(error);
	})
});