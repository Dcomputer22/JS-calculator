let calculation = localStorage.getItem('calculation') || '';

      // Display calculation when the page first loads
      calculationDisplay();

      function updateCalculation(value) {
        calculation += value;
        calculationDisplay();
        localStorage.setItem('calculation', calculation);
      }

      function calculationDisplay(){
        document.querySelector('.js-calculation-result')
          .innerHTML = calculation;
      }