const getSleepHours=(day)=>{
  
    switch(day){
      case "monday": return 5
      break;
      case "tuesday": return 8
      break;
      case "wednesday": return 7
      break;
      case "thursday": return 6
      break;
      case "friday": return 5
      break;
      case "saturday": return 6
      break;
      case "sunday": return 8
      break;
    }
  }
  
  const getActualSleepHours=()=>{
  return getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday')
  }
  const getIdealSleepHours=()=>{
    let idealSleepHours = 8;
    return idealSleepHours*7
  }
  const calculateSleepDebt=()=>{
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if(actualSleepHours===idealSleepHours){
      console.log(`You got ${actualSleepHours-idealSleepHours}hrs of sleep. That is enough.`)
    }
    else if(actualSleepHours < idealSleepHours){
      console.log(`You got ${idealSleepHours-actualSleepHours}hrs less of sleep. `)
    }
    else {
      console.log('You got too much sleep')
      console.log(`${actualSleepHours-idealSleepHours}`)
    }
  }
  calculateSleepDebt();
  
  
  
  
  