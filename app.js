document.addEventListener("DOMContentLoaded", function () {
    const languages = [
      "SQUAD-56",          // English
      "संघ-५६",          // Marathi
      "ஸ்க்வாட்-௫௬",        // Tamil
      "ಸ್ಕ್ವಾಡ್-೫೬",        // Kannada
      "स्क्वॉड-56",          // Marathi
      "స్క్వాడ్-56",        // Telugu
      "സ്ക്വാഡ്-൫൬",        // Malayalam
      "ਸਕਵਾਡ-੫੬",           // Punjabi
      "سکواڈ-56"             // Urdu
    ];
  
    const languageText = document.getElementById("languageText");
    let currentIndex = 0;
  
    function updateLanguage() {
      languageText.textContent = languages[currentIndex];
      currentIndex = (currentIndex + 1) % languages.length;
    }
  
    // Start language rotation after a delay of 2000 milliseconds (2 seconds)
    setTimeout(function () {
      const languageInterval = setInterval(updateLanguage, 1000);
    }, 2000);
  });

document.querySelector('.button-82-pushable').addEventListener("click" , ()=>{
    window.location.href = "explore.html"
})  