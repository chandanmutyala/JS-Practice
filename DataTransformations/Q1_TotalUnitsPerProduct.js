var output = new Object();
input.regions.forEach( obj => obj.sales.forEach(  s=> {
    let prod = s.product;
    let value = s.units ;
    if(output[prod]){
        output[prod] += value ;
    } else{
        output[prod] = value ;
    } }));
console.log(output)