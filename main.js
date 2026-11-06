let buttonCounter = 0;
      const button = document.querySelector('#countButton');
      const counterElement = document.getElementById('counter');
      const resetButton = document.querySelector('#resetButton');

      button.addEventListener('click', () => {
        buttonCounter++;
        counterElement.textContent = buttonCounter;
      });

      resetButton.addEventListener('click', () => {
        buttonCounter = 0;
        counterElement.textContent = buttonCounter;
      }); 