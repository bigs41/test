>
# Add or Edit Exam
header:
```
url : https://{{API_HOST}}/api/exs/store
method : GET
Content-Type  : application/json
```
param:
```
{
    "redirect":"https://{{YOUR_HOST}}/callback",
    "exId":1,
    "transection":"1590633393"
}
```
Parameter    | Description
------------ | -----------
redirect | url redirect กลับ
exId | id ของ exam ที่ต้องการแก้ไข or 0 สร้างใหม่
transection | format timestam

response:
```
redirect->page
create | edit exam
save
redirect->https://{{YOUR_HOST}}/callback?exId={int}&name={str}
```
____

>
# testing
header:
```
url : https://{{API_HOST}}/api/exs/user
method : GET
Content-Type  : application/json
```
param:
```
{
    "redirect":"https://{{YOUR_HOST}}/callback",
    "exId":1,
    "transection":"1590633393",
    "timeLimit":"1800"
}
```
Parameter    | Description
------------ | -----------
redirect | url redirect กลับ
exId | id ของ exam ที่ต้องการทำแบบทดสอบ
transection | format timestam
timeLimit | เวลาในการทำแบบทดสอบ / วินาที

response:
```
redirect->page
testing exam
save
redirect->https://{{YOUR_HOST}}/callback?exId={int}&name={str}&score=&{float}
```
