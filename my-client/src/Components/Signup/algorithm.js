export const footInchHeight = () => {
    const content = [];
    for (let i = 3; i <= 7; i++) {
      for (let j = 0; j <= 11; j++) {
        j === 0
          ? content.push(
              <option
                value={`${i} foot`}
                key={`foot_${i + 1}`}
              >{`${i} foot`}</option>
            )
          : content.push(
              <option
                value={`${i} foot ${j} inch`}
                key={`footInches_${i}_${j + 1}`}
              >{`${i} foot ${j} inch`}</option>
            );
      };
    };

    return content;
};



export const yearAlgo = () => {
    const content = [];
    const start_year = 1960;
    const curr_year = (new Date).getFullYear()

    const option = <option key={'difault1'}>Year</option>
    content.push(option);

    for (let i = start_year; i <= curr_year; i++) {
        content.push(
            <option
              value={i}
              key={i}
            >{i}</option>
        );
    }
    return content;
}


export const monthAlgo = () => {
    const content = []
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const option = <option key={'default1'}>Month</option>
    content.push(option);


    for (let i = 0; i < months.length; i++) {
        let month_number = (i + 1);
        month_number = (month_number <= 9) ? '0' + month_number : month_number;
        
        let month = months[i];

        content.push(
            <option
              value={month_number}
              key={month_number}
            >{month}</option>
        );
    }
    return content;
}


export const dayAlgo = () => {
    const content = [];
    const days = 32;
    const option = <option key={'default1'}>Day</option>
    content.push(option)

    for (let i = 1; i < days; i++) {
        let day = (i <= 9) ? '0' + i : i;

        content.push(
            <option
              value={day}
              key={day}
            >{day}</option>
        );
    }
    return content;
}



export const ageCalc = (userDOB) => {
  let currDate = new Date();
  let birthDate = new Date(userDOB);
  let age = currDate.getFullYear() - birthDate.getFullYear();
  let m = currDate.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && currDate.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};