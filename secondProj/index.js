const from = document.querySelector('form');


from.addEventListener('submit',function(e){
    e.preventDefault();
    
    const height =  parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const weightguide = document.querySelector('#weight-guide');

    const bmi = (weight / ((height**2) / 10000)).toFixed(2);
//  isNaN(height) will provide boolean value true or false to check the given number are numbers or strings or charactera

    if( height <0 || height === '' || isNaN(height) ){

        result.innerHTML = "Please provide a valid height number to calculate";
    }else if(weight <0 || weight ==="" || isNaN(weight)){
          result.innerHTML = "Please provde a valid weight number to calculate"
    }else{
        result.innerHTML = `<span>${bmi}</span>`;
    }

    if(bmi>24.9){
      weightguide.innerHTML = `<p>Over weight ${bmi}</p>`
    }
    else if(bmi<18.6){
        weightguide.innerHTML = `<p>under weight ${bmi}</p>`
    }else{
        weightguide.innerHTML = `<p>Normal weight ${bmi}</p>`
    }

})