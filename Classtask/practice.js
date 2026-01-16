const greet =()=>{
    console.log("morning");
}

function fun(cb){
    console.log("This is fun function");
    cb();
}
fun(greet);

fun(()=>{
    console.log("GLA");
});

