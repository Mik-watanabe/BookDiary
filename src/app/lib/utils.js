export function parseDate(timestamp) {
   const date = new Date(timestamp);
   const day = date.getDate();
   const monthIndex = date.getMonth();
   const year = date.getFullYear();
   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   return `${day} ${monthNames[monthIndex]} ${year}`;
}
