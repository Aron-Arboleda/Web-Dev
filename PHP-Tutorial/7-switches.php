<?php
  // switch = replacement to using many elseif statements;
  // more efficient, less code to write;

  // $grade = "F";

  // switch ($grade) {
  //   case 'A':
  //     echo "You did great!";
  //     break;
  //   case 'B':
  //     echo "You did good.";
  //     break;
  //   case 'C':
  //     echo "You did okay.";
  //     break;
  //   case 'D':
  //     echo "You did poorly.";
  //     break;
  //   case 'F':
  //     echo "You failed.";
  //     break;
  //   default:
  //     echo "That is not a valid grade.";
  //     break;
  // }


  $date = date("l");

  switch ($date) {
    case 'Monday':
      echo "I hate mondays.";
      break;
    case 'Tuesday':
      echo "It is Taco tuesday.";
      break;
    case 'Wednesday':
      echo "It is Wednesday.";
      break;
    case 'Thursday':
      echo "It is Thursday.";
      break;
    case 'Friday':
      echo "It is Friday.";
      break;
    case 'Saturday':
      echo "It is Saturday.";
      break;
    case 'Sunday':
      echo "It is Sunday.";
      break;
    default:
      echo "{$date} is not a day";
      break;
  }
?>