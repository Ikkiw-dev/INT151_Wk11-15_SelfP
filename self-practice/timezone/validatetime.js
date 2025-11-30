//check เวล่าแบบ same timzexone
const openTime = new Date("2025-11-19T12:00:00")
const closeTime = new Date("2025-11-2-T12:00:00")
const mybookingTime = new Date("2025-11-1T12:50:01")

if (mybookingTime >= openTime && mybookingTime <= closeTime) {
    console.log('valid booking time')
} else {
    console.log('invalid booking time')
}