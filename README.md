---
title: API Document Deep1 v3b128974-45f3-4048-8f83-04122485228c
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - javascript--nodejs: Node.JS
  - ruby: Ruby
  - python: Python
  - java: Java
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="API-Document-Deep1">API Document Deep1 v3b128974-45f3-4048-8f83-04122485228c</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

description
```
ในกรณีที่เรียกจากฝั่ง server
ให้เพิ่ม http request header
x-service-token    2zTBruhVv5U6vMUarykEqZTWgM6GP2Jj

ส่วนกรณีที่เรียกจากฝั่ง client 
ให้เพิ่ม http request header
Authorization    Bearer <access_token>
```


Base URLs:

* <a href="https://{host}">https://{host}</a>

    * **host** -  Default: skill.deep.go.th







 License: 


# Authentication





- HTTP Authentication, scheme: bearer 






- HTTP Authentication, scheme: noauth 










<h1 id="API-Document-Deep1-ex">ex</h1>









## สร้างแบบทดสอบ


<a id="opIdสร้างแบบทดสอบ"></a>












> Code samples

```shell
# You can also use wget
curl -X GET https://{host}/api/exs/store?redirect=%7B%7Burl_redirect%7D%7D&transection=%7B%7Btransection%7D%7D&exId=0

```

```http
GET https://{host}/api/exs/store?redirect=%7B%7Burl_redirect%7D%7D&transection=%7B%7Btransection%7D%7D&exId=0 HTTP/1.1
Host: 



```

```javascript

$.ajax({
  url: 'https://{host}/api/exs/store',
  method: 'get',
  data: '?redirect=%7B%7Burl_redirect%7D%7D&transection=%7B%7Btransection%7D%7D&exId=0',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');


fetch('https://{host}/api/exs/store?redirect=%7B%7Burl_redirect%7D%7D&transection=%7B%7Btransection%7D%7D&exId=0',
{
  method: 'GET'


})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'



result = RestClient.get 'https://{host}/api/exs/store',
  params: {
  'redirect' => 'string',
'transection' => 'string',
'exId' => 'number'
}

p JSON.parse(result)
```

```python
import requests

r = requests.get('https://{host}/api/exs/store', params={
  'redirect': '{{url_redirect}}',  'transection': '{{transection}}',  'exId': '0'
)

print r.json()
```

```java
URL obj = new URL("https://{host}/api/exs/store?redirect=%7B%7Burl_redirect%7D%7D&transection=%7B%7Btransection%7D%7D&exId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```




`GET /api/exs/store`

*/api/exs/store*

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




<h3 id="สร้างแบบทดสอบ-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|redirect|query|string|true|url ที่ส่งข้อมูลกลับ|
|transection|query|string|true|เป็น timestamp|
|exId|query|number|true|ใส่เพื่อแก้ไข|




































<h3 id="สร้างแบบทดสอบ-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|Unknown|No description|None|

















<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, bearer, noauth, bearer, bearer, bearer
</aside>








## redirect ทำแบบทดสอบ


<a id="opIdredirect ทำแบบทดสอบ"></a>












> Code samples

```shell
# You can also use wget
curl -X GET https://{host}/api/exs/user?redirect=%7B%7Burl_redirect%7D%7D&transection=%7B%7Btransection%7D%7D&timeLimit=%7B%7BsecondTime%7D%7D&exId=0&passScore=0

```

```http
GET https://{host}/api/exs/user?redirect=%7B%7Burl_redirect%7D%7D&transection=%7B%7Btransection%7D%7D&timeLimit=%7B%7BsecondTime%7D%7D&exId=0&passScore=0 HTTP/1.1
Host: 



```

```javascript

$.ajax({
  url: 'https://{host}/api/exs/user',
  method: 'get',
  data: '?redirect=%7B%7Burl_redirect%7D%7D&transection=%7B%7Btransection%7D%7D&timeLimit=%7B%7BsecondTime%7D%7D&exId=0&passScore=0',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');


fetch('https://{host}/api/exs/user?redirect=%7B%7Burl_redirect%7D%7D&transection=%7B%7Btransection%7D%7D&timeLimit=%7B%7BsecondTime%7D%7D&exId=0&passScore=0',
{
  method: 'GET'


})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'



result = RestClient.get 'https://{host}/api/exs/user',
  params: {
  'redirect' => 'string',
'transection' => 'string',
'timeLimit' => 'string',
'exId' => 'number',
'passScore' => 'number'
}

p JSON.parse(result)
```

```python
import requests

r = requests.get('https://{host}/api/exs/user', params={
  'redirect': '{{url_redirect}}',  'transection': '{{transection}}',  'timeLimit': '{{secondTime}}',  'exId': '0',  'passScore': '0'
)

print r.json()
```

```java
URL obj = new URL("https://{host}/api/exs/user?redirect=%7B%7Burl_redirect%7D%7D&transection=%7B%7Btransection%7D%7D&timeLimit=%7B%7BsecondTime%7D%7D&exId=0&passScore=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```




`GET /api/exs/user`

*/api/exs/user*

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




<h3 id="redirect ทำแบบทดสอบ-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|redirect|query|string|true|url ที่ส่งข้อมูลกลับ|
|transection|query|string|true|เป็น timestamp|
|timeLimit|query|string|true|ตั้งเวลาในการทำข้อสอบ (วินาที)|
|exId|query|number|true|id ที่ต้องการ testing|
|passScore|query|number|true|เกณฑ์คะแนนที่ผ่าน 1-100 percen|
















































<h3 id="redirect ทำแบบทดสอบ-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|Unknown|No description|None|

















<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, bearer, noauth, bearer, bearer, bearer
</aside>








## get Log ดูแบบฝึกหัดย้อยหล


<a id="opIdget Log ดูแบบฝึกหัดย้อยหล"></a>












> Code samples

```shell
# You can also use wget
curl -X GET https://{host}/api/exs/log?code=%7B%7Bcode%7D%7D&transection=%7B%7Btransection%7D%7D

```

```http
GET https://{host}/api/exs/log?code=%7B%7Bcode%7D%7D&transection=%7B%7Btransection%7D%7D HTTP/1.1
Host: 



```

```javascript

$.ajax({
  url: 'https://{host}/api/exs/log',
  method: 'get',
  data: '?code=%7B%7Bcode%7D%7D&transection=%7B%7Btransection%7D%7D',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');


fetch('https://{host}/api/exs/log?code=%7B%7Bcode%7D%7D&transection=%7B%7Btransection%7D%7D',
{
  method: 'GET'


})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'



result = RestClient.get 'https://{host}/api/exs/log',
  params: {
  'code' => 'string',
'transection' => 'string'
}

p JSON.parse(result)
```

```python
import requests

r = requests.get('https://{host}/api/exs/log', params={
  'code': '{{code}}',  'transection': '{{transection}}'
)

print r.json()
```

```java
URL obj = new URL("https://{host}/api/exs/log?code=%7B%7Bcode%7D%7D&transection=%7B%7Btransection%7D%7D");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```




`GET /api/exs/log`

*/api/exs/log*

```
get Log ดูแบบฝึกหัดย้อยหลัง
```




<h3 id="get Log ดูแบบฝึกหัดย้อยหล-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|code|query|string|true|No description|
|transection|query|string|true|No description|






























<h3 id="get Log ดูแบบฝึกหัดย้อยหล-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|Unknown|No description|None|

















<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, bearer, noauth, bearer, bearer, bearer
</aside>








## สรุปผลแบบทดสอบ


<a id="opIdสรุปผลแบบทดสอบ"></a>












> Code samples

```shell
# You can also use wget
curl -X GET https://{host}/api/exs/report/{idEx}

```

```http
GET https://{host}/api/exs/report/{idEx} HTTP/1.1
Host: 



```

```javascript

$.ajax({
  url: 'https://{host}/api/exs/report/{idEx}',
  method: 'get',


  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');


fetch('https://{host}/api/exs/report/{idEx}',
{
  method: 'GET'


})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'



result = RestClient.get 'https://{host}/api/exs/report/{idEx}',
  params: {
  }

p JSON.parse(result)
```

```python
import requests

r = requests.get('https://{host}/api/exs/report/{idEx}', params={

)

print r.json()
```

```java
URL obj = new URL("https://{host}/api/exs/report/{idEx}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```




`GET /api/exs/report/{idEx}`

*/api/exs/report/{idEx}*

```
สรุปผลแบบทดสอบ
```




<h3 id="สรุปผลแบบทดสอบ-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|idEx|path|string|true|No description|
























<h3 id="สรุปผลแบบทดสอบ-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|Unknown|No description|None|

















<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, bearer, noauth, bearer, bearer, bearer
</aside>








## อัพโหลด ข้อมูลแบบทดสอบด้วยไฟล์ excel


<a id="opIdอัพโหลด ข้อมูลแบบทดสอบด้วยไฟล์ excel"></a>












> Code samples

```shell
# You can also use wget
curl -X POST https://{host}/api/content/excel \
  -H 'Content-Type: multipart/form-data'

```

```http
POST https://{host}/api/content/excel HTTP/1.1
Host: 
Content-Type: multipart/form-data


```

```javascript
var headers = {
  'Content-Type':'multipart/form-data'

};

$.ajax({
  url: 'https://{host}/api/content/excel',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "file": "string"
}';
const headers = {
  'Content-Type':'multipart/form-data'

};

fetch('https://{host}/api/content/excel',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'multipart/form-data'
}

result = RestClient.post 'https://{host}/api/content/excel',
  params: {
  }, headers: headers


p JSON.parse(result)
```

```python
import requests
headers = {
  'Content-Type': 'multipart/form-data'
}

r = requests.post('https://{host}/api/content/excel', params={

}, headers = headers)

print r.json()
```

```java
URL obj = new URL("https://{host}/api/content/excel");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```




`POST /api/content/excel`

*/api/content/excel*

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


> Body parameter

```yaml
file: string
```




<h3 id="อัพโหลด ข้อมูลแบบทดสอบด้วยไฟล์ excel-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|| key | type |
|
|» file|body|string(binary)|true|No description|



#### Detailed descriptions

**body**: | key | type |
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






























<h3 id="อัพโหลด ข้อมูลแบบทดสอบด้วยไฟล์ excel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|Unknown|No description|None|

















<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, bearer, noauth, bearer, bearer, bearer
</aside>









<h1 id="API-Document-Deep1-notification">notification</h1>









## เรียกข้อมูล notification ที่ยังไม่ไ


<a id="opIdเรียกข้อมูล notification ที่ยังไม่ไ"></a>












> Code samples

```shell
# You can also use wget
curl -X GET https://{host}/api/notifications/unread-count \
  -H 'Accept: application/json'

```

```http
GET https://{host}/api/notifications/unread-count HTTP/1.1
Host: 

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'https://{host}/api/notifications/unread-count',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://{host}/api/notifications/unread-count',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://{host}/api/notifications/unread-count',
  params: {
  }, headers: headers


p JSON.parse(result)
```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://{host}/api/notifications/unread-count', params={

}, headers = headers)

print r.json()
```

```java
URL obj = new URL("https://{host}/api/notifications/unread-count");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```




`GET /api/notifications/unread-count`

*/notifications/unread-count*

```
เรียกข้อมูล notification ที่ยังไม่ได้อ่าน
```












> Example responses

```json
{
  "total": 5
}```



<h3 id="เรียกข้อมูล notification ที่ยังไม่ไ-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|Unknown|No description|noti_total|

















<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, bearer, noauth, bearer, bearer, bearer
</aside>








## update สถานะ notification ว่าอ่านแ


<a id="opIdupdate สถานะ notification ว่าอ่านแ"></a>












> Code samples

```shell
# You can also use wget
curl -X PATCH https://{host}/api/notifications/read?notiId=string

```

```http
PATCH https://{host}/api/notifications/read?notiId=string HTTP/1.1
Host: 



```

```javascript

$.ajax({
  url: 'https://{host}/api/notifications/read',
  method: 'patch',
  data: '?notiId=string',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');


fetch('https://{host}/api/notifications/read?notiId=string',
{
  method: 'PATCH'


})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'



result = RestClient.patch 'https://{host}/api/notifications/read',
  params: {
  'notiId' => 'string'
}

p JSON.parse(result)
```

```python
import requests

r = requests.patch('https://{host}/api/notifications/read', params={
  'notiId': 'string'
)

print r.json()
```

```java
URL obj = new URL("https://{host}/api/notifications/read?notiId=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PATCH");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```




`PATCH /api/notifications/read`

*/notifications/read*

```
update สถานะ notification ว่าอ่านแล้ว
```




<h3 id="update สถานะ notification ว่าอ่านแ-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|notiId|query|string|true|No description|






















<h3 id="update สถานะ notification ว่าอ่านแ-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|















<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, bearer, noauth, bearer, bearer, bearer
</aside>








## update notification


<a id="opIdupdate notification"></a>












> Code samples

```shell
# You can also use wget
curl -X PUT https://{host}/api/notifications/:id \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
PUT https://{host}/api/notifications/:id HTTP/1.1
Host: 
Content-Type: application/json
Accept: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

$.ajax({
  url: 'https://{host}/api/notifications/:id',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "notiId": 4637,
  "message": "ในบทเรียนเพิ่มเติม",
  "menu": "subject",
  "userId": 224,
  "refTable": "",
  "refId": 553,
  "isRead": 0,
  "refURL": "",
  "createdAt": "2020-08-27T08:08:04.000Z",
  "updatedAt": "2020-08-27T08:08:04.000Z",
  "subject": {
    "subjectId": 553,
    "name": "เครื่องจักรกลเกษตรในระบบสมาร์ทฟาร์ม (AMSF)"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://{host}/api/notifications/:id',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.put 'https://{host}/api/notifications/:id',
  params: {
  }, headers: headers


p JSON.parse(result)
```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('https://{host}/api/notifications/:id', params={

}, headers = headers)

print r.json()
```

```java
URL obj = new URL("https://{host}/api/notifications/:id");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```




`PUT /api/notifications/:id`

*/notifications/:id*

```
update notification
```


> Body parameter

```json
{
  "notiId": 4637,
  "message": "ในบทเรียนเพิ่มเติม",
  "menu": "subject",
  "userId": 224,
  "refTable": "",
  "refId": 553,
  "isRead": 0,
  "refURL": "",
  "createdAt": "2020-08-27T08:08:04.000Z",
  "updatedAt": "2020-08-27T08:08:04.000Z",
  "subject": {
    "subjectId": 553,
    "name": "เครื่องจักรกลเกษตรในระบบสมาร์ทฟาร์ม (AMSF)"
  }
}```




<h3 id="update notification-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[put_notification](#schemaput_notification)|true|No description|























> Example responses

```json
{
  "notiId": 4637,
  "message": "ในบทเรียนเพิ่มเติม",
  "menu": "subject",
  "userId": 224,
  "refTable": "",
  "refId": 553,
  "isRead": 0,
  "refURL": "",
  "createdAt": "2020-08-27T08:08:04.000Z",
  "updatedAt": "2020-08-27T08:08:04.000Z",
  "subject": {
    "subjectId": 553,
    "name": "เครื่องจักรกลเกษตรในระบบสมาร์ทฟาร์ม (AMSF)"
  }
}```



<h3 id="update notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|Unknown|No description|notification|

















<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, bearer, noauth, bearer, bearer, bearer
</aside>








## เรียกข้อมูล notification


<a id="opIdเรียกข้อมูล notification"></a>












> Code samples

```shell
# You can also use wget
curl -X GET https://{host}/api/notifications \
  -H 'Accept: application/json'

```

```http
GET https://{host}/api/notifications HTTP/1.1
Host: 

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'https://{host}/api/notifications',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://{host}/api/notifications',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://{host}/api/notifications',
  params: {
  }, headers: headers


p JSON.parse(result)
```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://{host}/api/notifications', params={

}, headers = headers)

print r.json()
```

```java
URL obj = new URL("https://{host}/api/notifications");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```




`GET /api/notifications`

*/notifications*






<h3 id="เรียกข้อมูล notification-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|any|false|No description|
|limit|query|any|false|No description|
|search_fields|query|any|false|No description|
|order_by|query|any|false|No description|
|before|query|string|false|notiId|
|where|query|any|false|No description|





















































> Example responses

```json
{
  "value": [
    {
      "notiId": 4698,
      "message": "asdfadsf",
      "menu": "",
      "userId": 101156,
      "refTable": "",
      "refId": "",
      "isRead": 1,
      "refURL": "",
      "createdAt": "2020-10-02T03:38:47.000Z",
      "updatedAt": "2020-10-02T04:13:27.000Z",
      "subject": {}
    },
    {
      "notiId": 4637,
      "message": "ในบทเรียนเพิ่มเติม",
      "menu": "subject",
      "userId": 224,
      "refTable": "",
      "refId": 553,
      "isRead": 0,
      "refURL": "",
      "createdAt": "2020-08-27T08:08:04.000Z",
      "updatedAt": "2020-08-27T08:08:04.000Z",
      "subject": {
        "subjectId": 553,
        "name": "เครื่องจักรกลเกษตรในระบบสมาร์ทฟาร์ม (AMSF)"
      }
    }
  ]
}```



<h3 id="เรียกข้อมูล notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|Unknown|No description|notification|

















<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, bearer, noauth, bearer, bearer, bearer
</aside>








## post_/api/notifications













> Code samples

```shell
# You can also use wget
curl -X POST https://{host}/api/notifications \
  -H 'Content-Type: application/json'

```

```http
POST https://{host}/api/notifications HTTP/1.1
Host: 
Content-Type: application/json


```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: 'https://{host}/api/notifications',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "notiId": 4637,
  "message": "ในบทเรียนเพิ่มเติม",
  "menu": "subject",
  "userId": 224,
  "refTable": "",
  "refId": 553,
  "isRead": 0,
  "refURL": "",
  "createdAt": "2020-08-27T08:08:04.000Z",
  "updatedAt": "2020-08-27T08:08:04.000Z",
  "subject": {
    "subjectId": 553,
    "name": "เครื่องจักรกลเกษตรในระบบสมาร์ทฟาร์ม (AMSF)"
  }
}';
const headers = {
  'Content-Type':'application/json'

};

fetch('https://{host}/api/notifications',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post 'https://{host}/api/notifications',
  params: {
  }, headers: headers


p JSON.parse(result)
```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('https://{host}/api/notifications', params={

}, headers = headers)

print r.json()
```

```java
URL obj = new URL("https://{host}/api/notifications");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```




`POST /api/notifications`

*/notifications*




> Body parameter

```json
{
  "notiId": 4637,
  "message": "ในบทเรียนเพิ่มเติม",
  "menu": "subject",
  "userId": 224,
  "refTable": "",
  "refId": 553,
  "isRead": 0,
  "refURL": "",
  "createdAt": "2020-08-27T08:08:04.000Z",
  "updatedAt": "2020-08-27T08:08:04.000Z",
  "subject": {
    "subjectId": 553,
    "name": "เครื่องจักรกลเกษตรในระบบสมาร์ทฟาร์ม (AMSF)"
  }
}```




<h3 id="post_/api/notifications-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[post_notification](#schemapost_notification)|true|No description|






















<h3 id="post_/api/notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|















<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, bearer, noauth, bearer, bearer, bearer
</aside>








## delete_/api/notifications













> Code samples

```shell
# You can also use wget
curl -X DELETE https://{host}/api/notifications \
  -H 'Accept: Text'

```

```http
DELETE https://{host}/api/notifications HTTP/1.1
Host: 

Accept: Text

```

```javascript
var headers = {
  'Accept':'Text'

};

$.ajax({
  url: 'https://{host}/api/notifications',
  method: 'delete',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'Text'

};

fetch('https://{host}/api/notifications',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'Text'
}

result = RestClient.delete 'https://{host}/api/notifications',
  params: {
  'notiId' => 'any'
}, headers: headers


p JSON.parse(result)
```

```python
import requests
headers = {
  'Accept': 'Text'
}

r = requests.delete('https://{host}/api/notifications', params={
  'notiId': null
}, headers = headers)

print r.json()
```

```java
URL obj = new URL("https://{host}/api/notifications");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```




`DELETE /api/notifications`

*/notifications*






<h3 id="delete_/api/notifications-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|notiId|query|any|true|No description|























> Example responses




<h3 id="delete_/api/notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|Unknown|No description|Inline|

















<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, bearer, noauth, bearer, bearer, bearer
</aside>









<h1 id="API-Document-Deep1-subject">subject</h1>









## เรียกข้อมูลวิชา ของผู้


<a id="opIdเรียกข้อมูลวิชา ของผู้"></a>












> Code samples

```shell
# You can also use wget
curl -X GET https://{host}/api/subjects/user?citizen_id=0

```

```http
GET https://{host}/api/subjects/user?citizen_id=0 HTTP/1.1
Host: 



```

```javascript

$.ajax({
  url: 'https://{host}/api/subjects/user',
  method: 'get',
  data: '?citizen_id=0',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');


fetch('https://{host}/api/subjects/user?citizen_id=0',
{
  method: 'GET'


})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'



result = RestClient.get 'https://{host}/api/subjects/user',
  params: {
  'citizen_id' => 'number'
}

p JSON.parse(result)
```

```python
import requests

r = requests.get('https://{host}/api/subjects/user', params={
  'citizen_id': '0'
)

print r.json()
```

```java
URL obj = new URL("https://{host}/api/subjects/user?citizen_id=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```




`GET /api/subjects/user`

*/api/subjects/user*

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






<h3 id="เรียกข้อมูลวิชา ของผู้-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|citizen_id|query|number|true|เลขบัตรประจำตัว|
|filter|query|string|false|ใช้ค้นหา|
|limit|query|number|false|กำหนดจำนวนข้อมูลต่อ หน้าลิสข้อมูล|
|page|query|number|false|เลขหน้าลิสข้อมูล|
|where|query|string|false|ค้นหาด้วยคำสั่ง where|
|order_by|query|string|false|กำหนดการเรียงข้อมูล|






















































<h3 id="เรียกข้อมูลวิชา ของผู้-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|Unknown|```json
    [
        {
            "subjectId": 500,
            "name": "การจดโน๊ดอย่างไรให้น่าประทับใจและดูโปร",
            "description": "การอบรมทักษะพื้นฐานการใช้ iPadOS ในหัวข้อ \"จดโน๊ตอย่างไรให้น่าประทับใจและดูโปร\" โดย อ.ปัญชสา เชาวน์ชูเวชช (APLP)",
            "userIdCreator": "",
            "orgcodeCreator": "",
            "isLearningOrder": "Y",
            "cover": "",
            "owner_name": "Apple Professional Learning Provider",
            "subjectCategoryId": "",
            "organizationCode": "",
            "createdBy": 101003,
            "countUnit": "",
            "category": {},
            "detail": {
                "userSubjectId": 13565,
                "subjectId": 500,
                "userId": 101003,
                "status": "learnt",
                "isFinished": "Y"
            }
        },...
    ]
```|None|

















<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, bearer, noauth, bearer, bearer, bearer
</aside>








## list


<a id="opIdlist"></a>












> Code samples

```shell
# You can also use wget
curl -X GET https://{host}/api/subjects/list

```

```http
GET https://{host}/api/subjects/list HTTP/1.1
Host: 



```

```javascript

$.ajax({
  url: 'https://{host}/api/subjects/list',
  method: 'get',


  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');


fetch('https://{host}/api/subjects/list',
{
  method: 'GET'


})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'



result = RestClient.get 'https://{host}/api/subjects/list',
  params: {
  }

p JSON.parse(result)
```

```python
import requests

r = requests.get('https://{host}/api/subjects/list', params={

)

print r.json()
```

```java
URL obj = new URL("https://{host}/api/subjects/list");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```




`GET /api/subjects/list`

*/api/subjects/list*

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





<h3 id="list-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|ใช้ค้นหา|
|limit|query|number|false|กำหนดจำนวนข้อมูลต่อ หน้าลิสข้อมูล|
|page|query|number|false|เลขหน้าลิสข้อมูล|
|where|query|string|false|ค้นหาด้วยคำสั่ง where|
|order_by|query|string|false|กำหนดการเรียงข้อมูล|
















































<h3 id="list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|Unknown|```json
    [
        {
            "subjectId": 500,
            "name": "การจดโน๊ดอย่างไรให้น่าประทับใจและดูโปร",
            "description": "การอบรมทักษะพื้นฐานการใช้ iPadOS ในหัวข้อ \"จดโน๊ตอย่างไรให้น่าประทับใจและดูโปร\" โดย อ.ปัญชสา เชาวน์ชูเวชช (APLP)",
            "userIdCreator": "",
            "orgcodeCreator": "",
            "isLearningOrder": "Y",
            "cover": "",
            "owner_name": "Apple Professional Learning Provider",
            "subjectCategoryId": "",
            "organizationCode": "",
            "createdBy": 101003,
            "countUnit": "",
            "category": {}
        },...
    ]
```|None|

















<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, bearer, noauth, bearer, bearer, bearer
</aside>








## เรียกข้อมูลวิชา ของผู้เรียน (หล


<a id="opIdเรียกข้อมูลวิชา ของผู้เรียน (หล"></a>












> Code samples

```shell
# You can also use wget
curl -X GET https://{host}/api/subjects/user-list?citizen_id=0

```

```http
GET https://{host}/api/subjects/user-list?citizen_id=0 HTTP/1.1
Host: 



```

```javascript

$.ajax({
  url: 'https://{host}/api/subjects/user-list',
  method: 'get',
  data: '?citizen_id=0',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
```

```javascript--nodejs
const request = require('node-fetch');


fetch('https://{host}/api/subjects/user-list?citizen_id=0',
{
  method: 'GET'


})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

```ruby
require 'rest-client'
require 'json'



result = RestClient.get 'https://{host}/api/subjects/user-list',
  params: {
  'citizen_id' => 'number'
}

p JSON.parse(result)
```

```python
import requests

r = requests.get('https://{host}/api/subjects/user-list', params={
  'citizen_id': '0'
)

print r.json()
```

```java
URL obj = new URL("https://{host}/api/subjects/user-list?citizen_id=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
```




`GET /api/subjects/user-list`

*/api/subjects/user-list*

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






<h3 id="เรียกข้อมูลวิชา ของผู้เรียน (หล-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|citizen_id|query|number|true|เลขบัตรประจำตัว|
|filter|query|string|false|ใช้ค้นหา|
|limit|query|number|false|กำหนดจำนวนข้อมูลต่อ หน้าลิสข้อมูล|
|page|query|number|false|เลขหน้าลิสข้อมูล|
|where|query|string|false|ค้นหาด้วยคำสั่ง where|
|order_by|query|string|false|กำหนดการเรียงข้อมูล|






















































<h3 id="เรียกข้อมูลวิชา ของผู้เรียน (หล-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|Unknown|```json
[
    {
        "userId": 101010,
        "name": "ยงศักดิ์",
        "lastname": "สุพรรณ",
        "middlename": "",
        "prefix": "นาย",
        "email": "example@obec.moe.go.th",
        "subject": [
            {
                "userSubjectId": 8759,
                "subjectId": 311,
                "userId": 101010,
                "status": "learning",
                "isFinished": "Y",
                "detail": {
                    "subjectId": 311,
                    "name": "หลักสูตรการยกระดับพัฒนาทักษะความเข้าใจด้านการใช้เทคโนโลยีดิจิทัล",
                    "description": "หลักสูตรการยกระดับพัฒนาทักษะความเข้าใจด้านการใช้เทคโนโลยีดิจิทัล สำหรับข้าราชครูและบุคลากรทางการศึกษา \nด้วยประกาศนียบัตรมาตรฐานสากล IC3 Digital Literacy Certification",
                    "userIdCreator": "",
                    "orgcodeCreator": "",
                    "isLearningOrder": "Y",
                    "cover": "",
                    "owner_name": "บริษัท เออาร์ไอที จำกัด",
                    "subjectCategoryId": "",
                    "organizationCode": "",
                    "createdBy": 1,
                    "countUnit": "",
                    "category": ""
                }
            }
        ]
    },...
]
```|None|

















<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, bearer, noauth, bearer, bearer, bearer
</aside>









# Schemas





<h2 id="tocS200">200</h2>

<a id="schema200"></a>

```json
[
  {
    "notiId": 4698,
    "message": "asdfadsf",
    "menu": null,
    "userId": 101156,
    "refTable": null,
    "refId": null,
    "isRead": 1,
    "refURL": null,
    "createdAt": "2020-10-02T03:38:47.000Z",
    "updatedAt": "2020-10-02T04:13:27.000Z",
    "subject": {}
  }
]
```





### Properties



|Name|Type|Required|Description|
|---|---|---|---|
|notiId|integer|false|No description|
|message|string|false|No description|
|menu|any|false|No description|
|userId|integer|false|No description|
|refTable|any|false|No description|
|refId|any|false|No description|
|isRead|integer|false|No description|
|refURL|any|false|No description|
|createdAt|string|false|No description|
|updatedAt|string|false|No description|
|subject|object|false|No description|










<h2 id="tocSget_notification">get_notification</h2>

<a id="schemaget_notification"></a>

```json
{
  "notiId": "",
  "message": "",
  "menu": "",
  "userId": "",
  "refTable": "",
  "refId": "",
  "isRead": "",
  "refURL": "",
  "createdAt": "",
  "updatedAt": ""
}
```





### Properties



|Name|Type|Required|Description|
|---|---|---|---|
|notiId|string|false|No description|
|message|string|true|No description|
|menu|string|false|No description|
|userId|string|true|No description|
|refTable|string|false|No description|
|refId|string|false|No description|
|isRead|number|false|No description|
|refURL|string|false|No description|










<h2 id="tocSnotiid">notiId</h2>

<a id="schemanotiid"></a>

```json
{}
```





### Properties







*None*








<h2 id="tocSnotification">notification</h2>

<a id="schemanotification"></a>

```json
{
  "notiId": 4637,
  "message": "ในบทเรียนเพิ่มเติม",
  "menu": "subject",
  "userId": 224,
  "refTable": "",
  "refId": 553,
  "isRead": 0,
  "refURL": "",
  "createdAt": "2020-08-27T08:08:04.000Z",
  "updatedAt": "2020-08-27T08:08:04.000Z",
  "subject": {
    "subjectId": 553,
    "name": "เครื่องจักรกลเกษตรในระบบสมาร์ทฟาร์ม (AMSF)"
  }
}
```





### Properties



|Name|Type|Required|Description|
|---|---|---|---|
|notiId|string|true|No description|
|message|string|true|No description|
|menu|string|false|No description|
|userId|string|true|No description|
|refTable|string|false|No description|
|refId|string|false|No description|
|isRead|number|false|No description|
|refURL|string|false|No description|
|createdAt|string(date-time)|false|No description|
|updatedAt|string(date-time)|false|No description|










<h2 id="tocSnoti_total">noti_total</h2>

<a id="schemanoti_total"></a>

```json
{
  "total": 5
}
```





### Properties



|Name|Type|Required|Description|
|---|---|---|---|
|total|integer(int32)|false|No description|










<h2 id="tocSpost_notification">post_notification</h2>

<a id="schemapost_notification"></a>

```json
{
  "notiId": 4637,
  "message": "ในบทเรียนเพิ่มเติม",
  "menu": "subject",
  "userId": 224,
  "refTable": "",
  "refId": 553,
  "isRead": 0,
  "refURL": "",
  "createdAt": "2020-08-27T08:08:04.000Z",
  "updatedAt": "2020-08-27T08:08:04.000Z",
  "subject": {
    "subjectId": 553,
    "name": "เครื่องจักรกลเกษตรในระบบสมาร์ทฟาร์ม (AMSF)"
  }
}
```





### Properties



|Name|Type|Required|Description|
|---|---|---|---|
|notiId|string|true|No description|
|message|string|true|No description|
|menu|string|false|No description|
|userId|string|true|No description|
|refTable|string|false|No description|
|refId|string|false|No description|
|isRead|number|false|No description|
|refURL|string|false|No description|










<h2 id="tocSput_notification">put_notification</h2>

<a id="schemaput_notification"></a>

```json
{
  "notiId": 4637,
  "message": "ในบทเรียนเพิ่มเติม",
  "menu": "subject",
  "userId": 224,
  "refTable": "",
  "refId": 553,
  "isRead": 0,
  "refURL": "",
  "createdAt": "2020-08-27T08:08:04.000Z",
  "updatedAt": "2020-08-27T08:08:04.000Z",
  "subject": {
    "subjectId": 553,
    "name": "เครื่องจักรกลเกษตรในระบบสมาร์ทฟาร์ม (AMSF)"
  }
}
```





### Properties



|Name|Type|Required|Description|
|---|---|---|---|
|message|string|false|No description|
|menu|string|false|No description|
|userId|string|false|No description|
|refTable|string|false|No description|
|refId|string|false|No description|
|isRead|number|false|No description|
|refURL|string|false|No description|















