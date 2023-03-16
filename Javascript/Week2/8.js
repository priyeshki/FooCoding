let foo = 3;
console.log("The value of my variable foo is: " + foo);
let test = "Name";
console.log("The value of my variable test is: " + test);
let x = 1.5;
console.log("The value of my variable x is: " + x);
let y = true;
console.log("The value of my variable y is: " + y);
console.log("The type of my variable foo is: integer" );
console.log("The type of my variable foo is: "+typeof(foo) );
console.log("The type of my variable test is: character" );
console.log("The type of my variable test is: "+typeof(test) );
console.log("The type of my variable x is: fraction" );
console.log("The type of my variable x is: "+typeof(x) );
console.log("The type of my variable y is: boolean" );
console.log("The type of my variable y is: "+typeof(y) );
if (typeof(foo) ==typeof(test)) {
    console.log('SAME TYPE');
}
else
{
    console.log('NOT SAME TYPE');
}