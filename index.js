//Question 1
console.log("1.Program to search for a particular character in a string:");
let sampleword = "Javascript";
let tofind = 's';
console.log("The String is: "+sampleword);
if(sampleword.indexOf(find) >0){
    console.log("The Charcter searched is "+tofind+" and is found at: "+sampleword.indexOf(tofind+1));
}
else{
    console.log("The Charcter searched is "+tofind+" and it is not found.");
}
console.log("-----------------------------------------------------------------");

//Question2 
console.log("2.Program to convert minutes to secs:");
let timeinmins = 5;
console.log("Time in Minutes: "+timeinmins);
console.log("Time in Seconds: "+timeinmins*60);
console.log("-----------------------------------------------------------------");

//Question 3
console.log("3.Program to search for an element in an array of strings:");
let sampledata =["ODC","Cafeteria","Library","Clinic","Central Spine"];
let position = 2;
let tosearch = "Clinic";
console.log(`The element searched is: ${tosearch} and is found at: ${sampledata.findIndex(tosearch)+1}`);
console.log("Element at position "+position+" is: "+sampledata[position-1]);
console.log("-----------------------------------------------------------------");

//Question 4
console.log("4.Program to display only elements containg 'a' in an array:");
let data =["ODC","Cafeteria","Library","Clinic","Central Spine"];
console.log("Words containing alphabet 'a' are:");
data.forEach(function(ele)
{

	if(ele.indexOf('a')>=0)
	{
		console.log(a);
	}
});
console.log("-----------------------------------------------------------------");

//Question 5
let vowels=['a','e','i','o','u'];
console.log("Reverse order of Array:");
for(let i=vowels.length;i>0;i--)
{
	console.log(vowels[i-1]);
}
console.log("-----------------------------------------------------------------");



