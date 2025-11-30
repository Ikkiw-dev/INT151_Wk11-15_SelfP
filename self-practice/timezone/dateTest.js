//1. input parameter
const today1 = new Date() //กรณีไม่ใส่ parameter ใน date object
console.log(today1) //แสดงเวลา วันที่ปัจจุบัน เช่น 2025-11-27T06:24:57.982Z เป็นต้น (เป็นมาตรฐาน UTC ต้องเอามา +7)

//2. input parameter ที่รับ number of millisecond
const now = new Date(Date.now()) //(Date.now()) - return millisecond of current datetime
console.log(now) //2025-11-27T06:28:05.134Z เพราะ millisecond แทนจำนวน current datetime

//3. input parameter - date string
const myDate1 = new Date('2025-05-02T17:15:35.100') //local datetime
console.log(myDate1) //2025-05-02T10:15:35.100Z แสดง UTC เวลาตามมาตรฐานสากล
const myDate2 = new Date("2025-05-02T17:15:35.100z") //มีการให้ date string ตามเวลามาตรฐานสากลแล้ว
console.log(myDate2) //2025-05-02T17:15:35.100Z

//4. input parameter - year, monthsIndex (0-11), day, hh, mm, ss, ms
const myDate3 = new Date(2025, 1, 2, 18, 15, 0, 150) //ใส่ parameter รายตัว เวลาเป็น local Datetime ต้อง -7
console.log(myDate3) //2025-02-02T11:15:00.150Z

//Part 2 : format สำหรับการจัด string (Dateformat มีผลต่างกัน)
//1. toString() จะทำการแปลง Date object กลายเป็น string
//จัด format หรือใส่ option อะไรไม่ได้
console.log(myDate3.toString()) //Sun Feb 02 2025 18:15:00 GMT+0700 (Indochina Time) ตาม timezone ของเครื่อง
//Note : ใส่ option จัด format ใดๆไม่ได้ เพราะตามเครื่องเลย

//2. toISOString()
//จัด format หรือใส่ option อะไรไม่ได้
console.log(myDate3.toISOString()) //2025-02-02T11:15:00.150Z (ต้องการทำเป็น UTC)
//การเปลี่ยนเวลา date object ให้กลายเป็น เวลามาตรฐานสากล UTC 

//3. toLocaleString() ผูกกับ object นั้นไปเลย
console.log(myDate3.toLocaleString('en-US', {
    dateStyle: "medium",
    timeStyle: "medium",
})) // (Option : Long) February 2, 2025 at 6:15:00 PM GMT+7, (Option : Short) 2/2/25, 6:15 PM, (Option Medium) Feb 2, 2025, 6:15:00 PM

console.log(myDate3.toLocaleString('th-TH', { //ตามประเทศและภาษาที่ระบุ
    dateStyle: "long",
    timeStyle: "long",
})) //2 กุมภาพันธ์ 2568 เวลา 18 นาฬิกา 15 นาที 00 วินาที GMT+7

//4. Intl.DateTimeFormat()
const formatter = Intl.DateTimeFormat('en-US', {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Asia/Bangkok"
}) //apply ได้กับหลาย Dateobject
// Pros. : เอา Option ไป reuse ได้หลายครั้ง กับหลาย date obejct (ต่างจาก tolocale ที่ใช้ได้แค่ครั้งเดียว กับ dateobject เดียว)

//ตัวอย่างการเรียกใช้งาน
console.log(formatter.format(myDate3)) //2/2/25, 6:15 PM

//resolvedOption() ช่วยจัดการเรื่อง datatimeformat ของ system ณ ตอนนั้น
const userPreference = Intl.DateTimeFormat().resolvedOptions()
console.log(userPreference.timeZone) //Asia Bangkok
console.log(userPreference.locale) //en-US

//Time Comparison
const openTime = new Date("2025-11-19T12:00:00")
const closeTime = new Date("2025-11-2-T12:00:00")
const mybookingTime = new Date("2025-11-20T11:59:00")
const aTime = new Date("2025-11-19T12:00:00")

//using >,<,>=, <= with data object (covert to milliseconds automatically before comparing)
if (openTime < closeTime) {
    console.log("Open comes before close time") //opentime comes after close time
}
else {
    console.log("opentime comes after close time")
}

//try by using ===, compares reference of objects not check time
if (openTime===openTime) {
    console.log("both opentime is the same") //both opentime is the same เพราะ reference เดียวกัน
} else {
    console.log('both are differ')
}

if (openTime===aTime) { //เป็น false เพราะ reference ไม่ตรงกัน
    console.log("both opentime is the same as aTime")
} else {
    console.log('not same') //not same
}

//when you want to compare both date objects are the same. using getTime() function
//getTime() - returns millisecond of date object
if (openTime.getTime() === aTime.getTime()) {
    console.log("both opentime and atime are the same") //both opentime and atime are the same
}
//เพราะ gettime() เปรียบเทียบเป็น milliseconds เวลาเราจะเทียบ ต้อง convert เป็น millisec ก่อน
