//energy needs fonctions

function harrisBenedict (sex, age, mass, height, activity) {
    if (sex == 'M') {
        ree = 66.5 + 13.75*mass + 5.003*height - 6.755*age
    } else {
        ree = 655.1 + 9.563*mass + 1.85*height - 4.676*age
    };
    return ree*activity;
}

function mifflinStJeor (sex, age, mass, height, activity) {
    if (sex == 'M') {
        ree = 10*mass + 6.25*height - 5*age + 5
    } else {
        ree = 10*mass + 6.25*height - 5*age -161
    };
    return ree*activity;
}

//callback function

function calculate() {

    const d = document.querySelector('body'); //remove old result
    const r = d.querySelector('.result');

    if (r) {
       d.removeChild(r);
     };

    let massInput = document.querySelector('#mass_inp').value;
    let heightInput = document.querySelector('#height_inp').value;
    let ageInput = document.querySelector('#age_inp').value;
    let sexInput = document.querySelector('#sex_inp').value;
    let actInput = document.querySelector ('#act_inp').value;
    let forInput = document.querySelector('#formula_select').value;

    if ((massInput < 1) || (heightInput < 1) || (massInput > 700) || (heightInput > 300) || (ageInput <= 0)) {
        const err = document.createElement('section');
        err.textContent = 'Molim unesite valjane podatke.';
        err.className = 'result';
        err.id = 'error';
        document.body.appendChild(err);
      } else if (ageInput < 15) {
       const warning = document.createElement('section');
       warning.textContent = 'Ove formule nisu pogodne za procjenu energetskih potreba djece mlađe od 15 godin.';
       warning.className = 'result';
       warning.id = 'warning';
       document.body.appendChild(warning);
      } else {
        if (forInput == 'Harris-Benedict') {
            tee = harrisBenedict(sexInput, ageInput, massInput, heightInput, actInput);
        } else {
            tee = mifflinStJeor(sexInput, ageInput, massInput, heightInput, actInput);
        }
        };
        const res = document.createElement('section');
        res.textContent = 'Vaše dnevne energetske potrebe iznose otprilike ' + tee.toFixed(1) + ' kcal.';
        res.className = 'result';
        document.body.appendChild(res);
}; 

//button - event listener
document.querySelector('#run').addEventListener('click', calculate, false); 