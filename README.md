>
# login
header:
```
url : https://{{API_HOST}}/api/login/local
method : POST
Content-Type  : application/json
```
data:
```json
{
   "email":"user@mail.com",
   "password":"123456"
}
```
retponse:
```json
{
    "user": {
        "prefix": null,
        "middlename": null,
        "name": "Hayden",
        "lastname": "Zieme",
        "email": "user@mail.com",
        "birthDate": "1982-02-04T00:00:00.000Z",
        "positionCode": "00000",
        "userType": "ครู",
        "geolocation": {
            "type": "Point",
            "coordinates": [
                17.2392,
                99.2319
            ]
        }
    },
    "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxfSwiaWF0IjoxNTkwMzc1NjE1fQ.67U5kS0gLBjYFyOqmuXnHppUtX9sYYzVJDVXJEk5p0M"
}
```
------------------------------------------
>
# add score
header:
```
url : https://{{API_HOST}}/api/hrdc/addscore
method : POST
Content-Type  : application/json
Authorization : Bearer <jwtToken>
```
data:
```json
{
    "idCard":"6966787259311",
    "score":100,
    "stationCode":"IC30101",
    "้standardTest":"IC3",
    "startDate":"2020-05-17 17:09:17",
    "endDate":"2020-05-17 17:09:17",
    "jsonDetail ":{
        "rawScore":100,
        "maxScore":100,
        "testingAttemps":1
    }
}
```
retponse:
```json
{
    "status":"success"
}
```
Parameter    | Description
------------ | -----------
idCard | เลขบัตรประชาชน
score | คะแนน(เปอร์เซ็น)
standardTest | ชื่อมาตรฐานการสอบ
startDate | วันเวลาที่เริ่ม
endDate | วันเวลาที่สิ้นสุด
jsonDetail | ละเอียดการสอบ
stationCode | รศูนย์สอบ
