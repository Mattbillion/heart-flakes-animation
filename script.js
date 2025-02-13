function heartFlakes() {
    const numberOfHeart = 16; // Adjust the number of snowflakes
    const heartContainer = document.getElementById('heartContainer'); // Container for snowflakes
    heartContainer.style.width = "100%";
      heartContainer.style.height = "100%";
      heartContainer.style.display = 'flex';
      heartContainer.style.justifyContent ='center';
      heartContainer.style.position = "relative";
    for (let i = 0; i < numberOfHeart; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');

      // Randomize the snowflake image source
      heart.style.backgroundImage = "url('./images/heart.png')" // Replace with your PNG URL
      
      // Randomize position and animation timing
      const randomX = Math.random() * 100 - 50; // Random X position for movement
      const randomDelay = Math.random() * 1 + 's'; // Random animation delay
      const randomSize = Math.random() * 20 + 20; // Random size

      heart.style.setProperty('--random-x', `${randomX}vw`);
      heart.style.animationDelay = randomDelay;
      heart.style.width = `${randomSize}px`;
      heart.style.height = `${randomSize}px`;
      

      heartContainer.appendChild(heart);
    }
  }

  // Start the snowflakes animation
  heartFlakes();