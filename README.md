# API Document Deep1
description
```
ในกรณีที่เรียกจากฝั่ง server
ให้เพิ่ม http request header
x-service-token    2zTBruhVv5U6vMUarykEqZTWgM6GP2Jj

ส่วนกรณีที่เรียกจากฝั่ง client 
ให้เพิ่ม http request header
Authorization    Bearer <access_token>
```


## 1. api



### 1.1. /api/content/excel
```
POST https://:host/api/content/excel
```
```
Content-Type: multipart/form-data
```
```
อัพโหลด ข้อมูลแบบทดสอบด้วยไฟล์ excel
```

| key | type |
|--|--|
file_upload | file

ดาวน์โหลด ไฟล์รูปแบบ
https://skill.deep.go.th/api/content/excel-format

status 200
```json
{
    "code": 200,
    "status": "success",
    "list": [
        {
            "exId": 221,
            "name": "AMSF"
        }
    ]
}
```

---

## 2. exs



### 2.1. /api/exs/store
```
GET https://:host/api/exs/store?redirect=<string>&transection=<string>&exId=<number>
```
```
สร้างแบบทดสอบ
```
| | |
|--|--|
1 | redirect มาที่ https://`{{host}}`/api/exs/store?redirect=`{{url_redirect}}`&transection=`{{transection}}`&exId=1
2 | ส่ง access_token มากับ hearder  Authorization Bearer `{{access_token}}`
3 | สร้างหรือแก้ไขข้อสอบเสร็จ จะส่งข้อมูลกลับไปยัง `{{url_redirect}}`

---
| Header | Value |
|---|---|
Authorization | Barer `USER_ACCESS_TOKEN`

---

### ข้อมูลที่ส่งกลับไป
| | Key | Value
|--|--|--|
1 | exId | คือ id exam ที่ถูกสร้างหรือแก้ไข
2 | name | คือ ชื่อ exam ที่ถูกสร้างหรือแก้ไข
3 | transection | คือ `{{transection}}` ที่ได้ส่งมา

---

### 2.2. /api/exs/user
```
GET {{baseUrl}}/api/exs/user?redirect=<string>&transection=<string>&timeLimit=<string>&exId=<number>&passScore=<number>
```
```
redirect ทำแบบทดสอบ
```

| | |
|--|--|
1 | redirect มาที่ `{{url_deep}}`/api/exs/user?redirect=`{{url_redirect}}`&transection=`{{transection}}`&timeLimit=`{{secondTime}}`&exId=`1`&passScore=`50`
2 | ส่ง access_token มากับ hearder  Authorization Bearer `{{access_token}}`
3 | ทำข้อสอบเสร็จ จะส่งข้อมูลกลับไปยัง `{{url_redirect}}`

### ข้อมูลที่ต้องส่งมา (request)
| | Key | Value
|--|--|--|
1 | redirect | ลิ่งที่จะส่งกลับ
2 | transection | 
3 | timeLimit | ระบุจำนวนเวลาในการทำแบบฝึกหัด( วินาที )
4 | exId | ระบุ exam ที่ต้องการ
5 | passScore | เกณร์คะแนนผ่านแบบฝึกหัด ( เปอร์เช็น )

---

| Header | Value |
|---|---|
Authorization | Barer `USER_ACCESS_TOKEN`

---

### ข้อมูลที่ส่งกลับไป (response)
| | Key | Value
|--|--|--|
1 | exId | คือ id exam testing
2 | score | คือ คะแนนที่ทำได้
3 | duration | คือ เวลาที่ใช้ไป
4 | transection | คือ `{{transection}}` ที่ได้ส่งมา
5 | code | คือ keyid ของ log
6 | isPass | complete คือสอบผ่าน ส่วน not-complete คือสอบไม่ผ่าน
7 | rawScore | คือ คะแนนดิบ
8 | maxScore | คือ คะแนนเต็ม
9 | timetable_id | 

---

### 2.3. /api/exs/log
```
GET https://:host/api/exs/log?code=<string>&transection=<string>
```
```
get Log ดูแบบฝึกหัดย้อยหลัง
```

---

### 2.4. /api/exs/report/{idEx}
```
GET https://:host/api/exs/report/:idEx
```
```
สรุปผลแบบทดสอบ
```

---

## 3. notifications



### 3.1. /notifications
```
GET {{baseUrl}}/api/notifications?search=schema type not provided&limit=schema type not provided&search_fields=schema type not provided&order_by=schema type not provided&before=<string>&where=schema type not provided
```


---

### 3.2. /notifications
```
POST {{baseUrl}}/api/notifications
```
```
Content-Type: application/json
```


---

### 3.3. /notifications
```
DELETE {{baseUrl}}/api/notifications?notiId=schema type not provided
```


---

### 3.4. /notifications/unread-count
```
GET {{baseUrl}}/api/notifications/unread-count
```
```
เรียกข้อมูล notification ที่ยังไม่ได้อ่าน
```

---

### 3.5. /notifications/read
```
PATCH {{baseUrl}}/api/notifications/read?notiId=<string>
```
```
update สถานะ notification ว่าอ่านแล้ว
```

---

### 3.6. /notifications/:id
```
PUT {{baseUrl}}/api/notifications/:id
```
```
Content-Type: application/json
```
```
update notification
```

---

## 4. subjects



### 4.1. /api/subjects/user
```
GET {{baseUrl}}/api/subjects/user?citizen_id=<number>&filter=<string>&limit=<number>&page=<number>&where=<string>&order_by=<string>
```
description
```
เรียกข้อมูลวิชา ของผู้เรียน
```
params

| key | required | description | example
--|--|--|--
citizen_id | true | เลขบัตรประจำตัว | 2151321154118
filter | false | ใช้ค้นหา | {"name":"POD"}
limit | false | กำหนดจำนวนข้อมูลต่อ หน้าลิสข้อมูล | 10
page | false | เลขหน้าลิสข้อมูล | 1
order_by | false | กำหนดการเรียงข้อมูล | createdBy,-detail.userSubjectId



---

### 4.2. /api/subjects/list
```
GET {{baseUrl}}/api/subjects/list?filter=<string>&limit=<number>&page=<number>&where=<string>&order_by=<string>
```
description
```
เรียกข้อมูล วิชา
```
params

| key | required | description | example
--|--|--|--
filter | false | ใช้ค้นหา | {"name":"POD"}
limit | false | กำหนดจำนวนข้อมูลต่อ หน้าลิสข้อมูล | 10
page | false | เลขหน้าลิสข้อมูล | 1
order_by | false | กำหนดการเรียงข้อมูล | createdBy,-detail.userSubjectId


---

### 4.3. /api/subjects/user-list
```
GET {{baseUrl}}/api/subjects/user-list?citizen_id=<number>&filter=<string>&limit=<number>&page=<number>&where=<string>&order_by=<string>
```
description
```
เรียกข้อมูลวิชา ของผู้เรียน (หลายคน)
```
params

| key | required | description | example
--|--|--|--
citizen_id | true | เลขบัตรประจำตัว | 2151321154118,1524896358411
filter | false | ใช้ค้นหา | {"name":"POD"}
limit | false | กำหนดจำนวนข้อมูลต่อ หน้าลิสข้อมูล | 10
page | false | เลขหน้าลิสข้อมูล | 1
order_by | false | กำหนดการเรียงข้อมูล | createdBy,-detail.userSubjectId



---

