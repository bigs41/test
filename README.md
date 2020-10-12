# testEx Copy
description
```
ในกรณีที่เรียกจากฝั่ง server
ให้เพิ่ม http request header
x-service-token    2zTBruhVv5U6vMUarykEqZTWgM6GP2Jj

ส่วนกรณีที่เรียกจากฝั่ง client 
ให้เพิ่ม http request header
Authorization    Bearer <access_token>
```


## 1. ex



### 1.1. createEx
```
GET https://skill.deep.go.th/api/exs/store
```
```
Accept:*/*
```
params

| key | value |
|--|--|
redirect | {{url_redirect}}
transection | {{transection}}
exId | 74.4437041084486

example
```
https://skill.deep.go.th/api/exs/store?redirect=%7B%7Burl_redirect%7D%7D&transection=%7B%7Btransection%7D%7D&exId=74.4437041084486
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

### 1.2. testingEx
```
GET https://skill.deep.go.th/api/exs/user
```
```
Accept:*/*
```
params

| key | value |
|--|--|
redirect | {{url_redirect}}
transection | {{transection}}
timeLimit | {{secondTime}}
exId | 74.4437041084486
passScore | 74.4437041084486

example
```
https://skill.deep.go.th/api/exs/user?redirect=%7B%7Burl_redirect%7D%7D&transection=%7B%7Btransection%7D%7D&timeLimit=%7B%7BsecondTime%7D%7D&exId=74.4437041084486&passScore=74.4437041084486
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

### 1.3. getLogดูแบบฝึกหัดย้อยหลัง
```
GET https://skill.deep.go.th/api/exs/log
```
```
Accept:*/*
```
params

| key | value |
|--|--|
code | {{code}}
transection | {{transection}}

example
```
https://skill.deep.go.th/api/exs/log?code=%7B%7Bcode%7D%7D&transection=%7B%7Btransection%7D%7D
```
get Log ดูแบบฝึกหัดย้อยหลัง

---

### 1.4. getReport
```
GET https://skill.deep.go.th/api/exs/report/:idEx
```
```
Accept:*/*
```
get Report

---

### 1.5. importexcel
```
POST https://skill.deep.go.th/api/content/excel
```
```
Accept:*/*
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

## 2. account



### 2.1. register
```
POST https://skill.deep.go.th/api/account
```
```
Accept:*/*
Content-Type:text/plain
```

หลังจาก มีการ register เสร็จ
ส่งข้อมูล account เพื่อบันทึกข้อมูล

---
response

```json
{
    "code": 200,
    "status": "success"
}
```

---

## 3. notification



### 3.1. /notifications/unread-count
```
GET https://skill.deep.go.th/api/notifications/unread-count
```
```
Accept:application/json
```
/notifications/unread-count

---

### 3.2. /notifications/read
```
PATCH https://skill.deep.go.th/api/notifications/read?notiId=notiId8
```
```
Accept:*/*
```
/notifications/read

---

### 3.3. /notifications/:id
```
PUT https://skill.deep.go.th/api/notifications/:id
```
```
Accept:application/json
Content-Type:application/json
```
/notifications/:id

---

### 3.4. /notifications
```
GET https://skill.deep.go.th/api/notifications
```
```
Accept:application/json
```
params

| key | value |
|--|--|
search | {}
limit | {}
search_fields | message,userId
order_by | -updatedAt
before | before8
where | {}

example
```
https://skill.deep.go.th/api/notifications?search=%7B%7D&limit=%7B%7D&search_fields=message%2CuserId&order_by=-updatedAt&before=before8&where=%7B%7D
```
/notifications

---

### 3.5. /notifications
```
POST https://skill.deep.go.th/api/notifications
```
```
Accept:*/*
Content-Type:application/json
```
/notifications

---

### 3.6. /notifications
```
DELETE https://skill.deep.go.th/api/notifications?notiId=%7B%7D
```
```
Accept:Text
```
/notifications

---

## 4. subject



### 4.1. user
```
GET https://skill.deep.go.th/api/subjects/user
```
```
Accept:*/*
```
params

| key | value |
|--|--|
citizen_id | 74.4437041084486
filter | {"subject.name":"POD"}
limit | 74.4437041084486
page | 74.4437041084486
where | {"subject.subjectId":{"<>":430}}
order_by | createdBy,-detail.userSubjectId

example
```
https://skill.deep.go.th/api/subjects/user?citizen_id=74.4437041084486&filter=%7B%22subject.name%22%3A%22POD%22%7D&limit=74.4437041084486&page=74.4437041084486&where=%7B%22subject.subjectId%22%3A%7B%22%3C%3E%22%3A430%7D%7D&order_by=createdBy%2C-detail.userSubjectId
```
description
```
api ข้อมูลการเรียนรายบุคล
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

### 4.2. list
```
GET https://skill.deep.go.th/api/subjects/list
```
```
Accept:*/*
```
params

| key | value |
|--|--|
filter | {"subject.name":"POD"}
limit | 74.4437041084486
page | 74.4437041084486
where | {"subject.subjectId":{"<>":430}}
order_by | createdBy,-detail.userSubjectId

example
```
https://skill.deep.go.th/api/subjects/list?filter=%7B%22subject.name%22%3A%22POD%22%7D&limit=74.4437041084486&page=74.4437041084486&where=%7B%22subject.subjectId%22%3A%7B%22%3C%3E%22%3A430%7D%7D&order_by=createdBy%2C-detail.userSubjectId
```
description
```
api ข้อมูลวิชา
```
params

| key | required | description | example
--|--|--|--
filter | false | ใช้ค้นหา | {"name":"POD"}
limit | false | กำหนดจำนวนข้อมูลต่อ หน้าลิสข้อมูล | 10
page | false | เลขหน้าลิสข้อมูล | 1
order_by | false | กำหนดการเรียงข้อมูล | createdBy,-detail.userSubjectId


---

### 4.3. user-list
```
GET https://skill.deep.go.th/api/subjects/user-list
```
```
Accept:*/*
```
params

| key | value |
|--|--|
citizen_id | 74.4437041084486
filter | {"subject.name":"POD"}
limit | 74.4437041084486
page | 74.4437041084486
where | {"subject.detail.subjectId":{"<>":430}}
order_by | name

example
```
https://skill.deep.go.th/api/subjects/user-list?citizen_id=74.4437041084486&filter=%7B%22subject.name%22%3A%22POD%22%7D&limit=74.4437041084486&page=74.4437041084486&where=%7B%22subject.detail.subjectId%22%3A%7B%22%3C%3E%22%3A430%7D%7D&order_by=name
```
description
```
api ข้อมูลการเรียนรายบุคลแบบหลายคน
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

