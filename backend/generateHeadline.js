const generateHeadline = (name, location) => {
  const templates = [
    `Why ${name} is ${location}'s Sweetest Spot in 2025`,
    `Why ${name} is ${location}'s Top Choice in 2025`,
    `Discover the Secret Behind ${name}'s Popularity in ${location}`,
    `2025 Guide: Why Everyone in ${location} Loves ${name}`,
    `${name}: Redefining Excellence in ${location}`,
    `The Buzz Around ${name} in ${location} – What You Need to Know`,
    `${name} is the Heartbeat of ${location}'s Local Scene`,
    `${name} is ${location}'s Hidden Gem You Can’t Miss in 2025`,
    `Unveiling ${name}: ${location}'s Must-Visit Spot of 2025`,
    `Why ${name} is the Talk of ${location} in 2025`,
    `Experience the Magic of ${name} in ${location} – 2025 Edition`,
    `What Makes ${name} a Must-See in ${location} This Year`,
    `The Rise of ${name} in ${location}: A 2025 Phenomenon`,
    `How ${name} Became ${location}'s Favorite in 2025`,   
    `The Allure of ${name}: Why ${location} Can't Get Enough in 2025`,
    `Exploring ${name}: ${location}'s Best-Kept Secret of 2025`,
    `Why ${name} is the Best Thing to Happen to ${location} in 2025`,
    `The Story Behind ${name}: ${location}'s 2025 Sensation`,
    `From Local to Legendary: ${name}'s Journey in ${location} 2025`,
    `Why ${name} is the Future of ${location} in 2025`,
    `The Impact of ${name} on ${location} in 2025`,
    `Why ${name} is the Best Choice for ${location} Residents in 2025`,
  ];

  const index = Math.floor(Math.random() * templates.length);
  return templates[index];
};

module.exports = generateHeadline;