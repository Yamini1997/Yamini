var a = [2,5,3,1,6,8];
var x = 4;
var result;
function c1(at, x)
{
var i;
var j;
var r;
var temp;
for(i=0; i<(at.length-1); i++)
{
	for(j=1; j<at.length; j++)
	{
		if(at[i]>at[j])
		{
			temp=at[j];
			at[j]=at[i];
			at[i]=temp;
		}
	}
}

console.log("Sorted array:");
for(var t=0;t<at.length; i++)
{
	console.log(at[t]);
}

result= at[x-1];
console.log("The answer is:" +result);
}
c1(a,4);
