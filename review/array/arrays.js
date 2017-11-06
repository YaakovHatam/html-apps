var sampleArray = [1,2,3,4,5,6,7,8,9];
var sampleArray2 = [true,2,'3',function(){},{a:5},[6,7],8,9];


var studentArray = [
    new Student('stu1'),
    new Student('stu2'),
    new Student('stu3')
]

studentArray.push(new Student());

for (let i=0; studentArray.length; i++) {
    console.log(studentArray[i]);
}