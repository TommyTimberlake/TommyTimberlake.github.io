async function populate() {

    const requestURL = 'assignment10.json';
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const hrEmployees = await response.json();
  
    //populateHeader(hrEmployees);
    //populateEmployees(hrEmployees);
  
    console.log(hrEmployees);
  }

//Problem 2

  function populateHeader(obj) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.companyName;
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = `Website: ${obj.website}`;
    header.appendChild(myPara);

    console.log(myH1)
    console.log(myPara)
  }

  function populateEmployees(obj) {
    const section = document.querySelector('section');
    const workers = obj.employees;
  
//for (let i = 0; i<employees.length; i++) {
    
    for (const employee of workers) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myPara4 = document.createElement('p');
      //const myList = document.createElement('ul');
  
    //Problem 1 + 3

      myH2.textContent = employee.firstName;
      myPara1.textContent = `Department: ${employee.department}`;
      myPara2.textContent = `Designation: ${employee.designation}`;
      myPara3.textContent = `Salary: ${employee.salary}`;
      myPara4.textContent = `Raise Eligible: ${employee.raiseEligible}`;
  
      //const superPowers = hero.powers;
      //for (const power of superPowers) {
        //const listItem = document.createElement('li');
        //listItem.textContent = power;
        //myList.appendChild(listItem);
      //}
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      //myArticle.appendChild(myList);
  
      section.appendChild(myArticle);

      console.log(myArticle)
    }
  }

  populate();

//}

  //Problem 4

  const requestURL = 'assignment10.json';


  //fetch(requestURL)
  //.then(response => response.text())
  //.then(text => displaySalaryInfo(text))

  function displaySalaryInfo(salaryString) {
    let total = 0;
    
    const employeeMoney = JSON.parse(salaryString)

    let raiseInfo = employeeMoney['employees']['salary'];

    for (let i = 0; i < employeeMoney.length; i++) {
for (const worker of employeeMoney[i].employees){
    total += worker.salary;
    console.log(`Total salary is ${total}`);

    //Problem 5

    if (worker.raiseEligible === true) {
        (raiseEligible = false);
        //(employees.salary)
        (raiseInfo += raiseInfo * 0.10);
        //raiseElible === false;
        console.log(raiseInfo);
        console.log(`Raise eligibility has been set to ${raiseEligible}`);
    }
    else {
        (raiseEligibile = true);
        //raiseElible == true
        console.log(`Raise eligibility has been set to ${raiseEligible}`);
    }
}

    }

  }

  displaySalaryInfo(salaryString);

