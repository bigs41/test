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
    "googleID":"100184372264039063801",
    "exId":1,
    "transection":"1590633393"
}
```
Parameter    | Description
------------ | -----------
redirect | url redirect กลับ
exId | id ของ exam ที่ต้องการแก้ไข or 0 สร้างใหม่
googleID | googleID ผู้สร้างทดสอบ
transection | format timestam

response:
```
redirect->page
create | edit exam
save
redirect->https://{{YOUR_HOST}}/callback?exId={int}&name={str}&transection={str}
```

Parameter    | Description
------------ | -----------
exId | id ของ exam ที่แก้ไข or สร้างใหม่
name | name ของ exam ที่แก้ไข or สร้างใหม่
transection | format timestam
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
    "googleID":"100184372264039063801",
    "exId":1,
    "transection":"1590633393",
    "timeLimit":"1800"
}
```
Parameter    | Description
------------ | -----------
redirect | url redirect กลับ
googleID | googleID ผู้รับการทดสอบ
exId | id ของ exam ที่ต้องการทำแบบทดสอบ
transection | format timestam
timeLimit | เวลาในการทำแบบทดสอบ / วินาที

response:
```
redirect->page
testing exam
save
redirect->https://{{YOUR_HOST}}/callback?exId={int}&score=&{float}&transection={str}
```

Parameter    | Description
------------ | -----------
exId | id ของ exam ทดสอบ
score | คะแนนที่ทำได้
transection | format timestam
