var names=new Array();
names[0]="Arpit";
names[1]="Jonathan";
names[2]="Adarsh";
names[3]="Johnny";
names[4]="Shreyansh";
names[5]="John";
names[6]="Jeff";

for (let i = 0; i < names.length; i++) {
    if(names[i].charAt(0)=='j'||names[i].charAt(0)=='J')
    {
        console.log("Goodbye " + names[i]);
    }
    else
    {
        console.log("Hello " + names[i]);
    }
}