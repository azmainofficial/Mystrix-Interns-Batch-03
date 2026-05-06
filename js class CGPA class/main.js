
//sub er count ke "n" diye define korlam 
let n = 4;

// "n" er value koto seta print kora 
console.log("Number of Subject is " + n);

// "n" er value diye amara ekta array create korechi jeta "Number_list" diye difine korechi 
let Number_list = new Array(n).fill(0);

Number_list[0] = 50;
Number_list[1] = 88;
Number_list[2] = 75;
Number_list[3] = 67;

function cal_cgpa(mark){
    if(mark >= 80 && mark <=100){
        return 4.00;
    }else if (mark >= 75 && mark < 80){
        return 3.75;
    }else if(mark >= 70 && mark < 75){
        return 3.50;
    }else if (mark >= 65 && mark < 70){
        return 3.25;
    }else if(mark >= 60 && mark < 65){
        return 3.00;
    }else if (mark >= 55 && mark < 60){
        return 2.75;
    }else if(mark >= 50 && mark < 55){
        return 2.50;
    }else if (mark >= 45 && mark < 50){
        return 2.25;
    }else if(mark >= 40 && mark < 45){
        return 2.00;
    }else{
        return 0.00;
    }

}

let cgpa_list = new Array(n).fill(0);

for(let i = 0; i < n; i++){
    cgpa_list[i] = cal_cgpa(Number_list[i]);
}


let total_cgpa = (cgpa_list[0] + cgpa_list[1] + cgpa_list[2] + cgpa_list[3]) / n;

console.log("Total CGPA is " + total_cgpa);
