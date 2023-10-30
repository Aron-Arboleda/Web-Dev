function ZodiacIdentifier(m, d){
    m = m.toLowerCase();
    if (m == "december"){
        if (d >= 1 && d <= 21){return "Sagittarius ♐︎ (The Archer)";}
        else if (d >= 22 && d <= 31){return "Capricorn ♑︎ (The Goat)";}
        else {return "(Birthdate doesn't exist.)";}
    } else if (m == "january"){
        if (d >= 1 && d <= 19){return "Capricorn ♑︎ (The Goat)";}
        else if (d >= 20 && d <= 31){return "Aquarius ♒︎ (The Water Bearer)";}
        else {return "(Birthdate doesn't exist.)";}   
    } else if (m == "february" && d <= 29){
        if (d >= 1 && d <= 18){return "Aquarius ♒︎ (The Water Bearer)";}
        else if (d >= 19 && d <= 29){return "Pisces ♓︎ (The Fishes)";}
        else {return "(Birthdate doesn't exist.)";}
    } else if (m == "march"){
        if (d >= 1 && d <= 20){return "Pisces ♓︎ (The Fishes)";}
        else if (d >= 21 && d <= 31){return "Aries ♈︎ (The Ram)";}
        else {return "(Birthdate doesn't exist.)";}
    } else if (m == "april" && d <= 30){
        if (d >= 1 && d <= 19){return "Aries ♈︎ (The Ram)";}   
        else if (d >= 20 && d <= 30){return "Taurus ♉︎ (The Bull)";}
        else {return "(Birthdate doesn't exist.)";}
    } else if (m == "may"){
        if (d >= 1 && d <= 20){return "Taurus ♉︎ (The Bull)";} 
        else if (d >= 21 && d <= 31){return "Gemini ♊︎ (The Twins)";}
        else {return "(Birthdate doesn't exist.)";}
    } else if (m == "june" && d <= 30) {
        if (d >= 1 && d <= 20){return "Gemini ♊︎ (The Twins)";}
        else if (d >= 21 && d <= 30){return "Cancer ♋︎ (The Crab)";}  
        else {return "(Birthdate doesn't exist.)";}
    } else if (m == "july") {
        if (d >= 1 && d <= 22){return "Cancer ♋︎ (The Crab)";}
        else if (d >= 23 && d <= 31){return "Leo ♌︎ (The Lion)";}
        else {return "(Birthdate doesn't exist.)";}    
    } else if (m == "august"){
        if (d >= 1 && d <= 22){return "Leo ♌︎ (The Lion)";}
        else if (d >= 23 && d <= 31){return "Virgo ♍︎ (The Virgin)";}
        else {return "(Birthdate doesn't exist.)";}
    } else if (m == "september" && d <= 30){
        if (d >= 1 && d <= 22){return "Virgo ♍︎ (The Virgin)";}
        else if (d >= 23 && d <= 30){return "Libra ♎︎ (The Scales)";}
        else {return "(Birthdate doesn't exist.)";}
    } else if (m == "october"){
        if (d >= 1 && d <= 22){return "Libra ♎︎ (The Scales)";}
        else if (d >= 23 && d <= 31){return "Scorpio ♏︎ (The Scorpion)";}
        else {return "(Birthdate doesn't exist.)";}
    } else if (m == "november" && d <= 30){
        if (d >= 1 && d <= 21){return "Scorpio ♏︎ (The Scorpion)";}
        else if (d >= 22 && d <= 30){return "Sagittarius ♐︎ (The Archer)";}
        else {return "(Birthdate doesn't exist.)";}
    } else
        return "(Birthdate doesn't exist.)";
}
      
console.log("\nZodiac sign identifier program.");
const input = require('prompt-sync')();

while (true){
    console.log("\nPlease enter your birth date below: ");
    console.log("(Example. Month: March, Day: 13)");
    let Month = input("Month: ");
    let Day = parseInt(input("Day: "));
    let ZODIAC = ZodiacIdentifier(Month, Day);
    console.log(`Zodiac Sign: ${ZODIAC}\n`) ;

    ans = input("Would you like to try again?(y/n): ");
    if (ans == "n"){
        console.log("ok bye.");
        break;
    }
}
  
    
