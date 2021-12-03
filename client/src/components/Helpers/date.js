export const convertDate = (date) => {
  const newDate = new Date(date)
  const dateArr = []
  const newStringDate = []
  dateArr.push(newDate.toString().slice(0, 10).split(' '))
  newStringDate.push(dateArr[0][0])
  newStringDate.push(dateArr[0][2])
  newStringDate.push(dateArr[0][1])
  return newStringDate.toString().split(',').join(' ')
} 