function ExpenseDate() {
  const day =  props.date.toLocaleString("en-US", {day: '2-digit'});
  const month = props.date.toLocaleString("en-US", {month: 'long'});
  const year = props.date.getFullYear();
  return (
    <div>{day} </div>
    <div>{month} </div>
    <div>{year} </div>
  )

}


export default ExpenseDate;
