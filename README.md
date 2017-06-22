# timestamp-microservice
FCC API project Timestamp Microservice

User Stories:
1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

2. If it does, it returns both the Unix timestamp and the natural language form of that date.

3. If it does not contain a date or Unix timestamp, it returns null for those properties.

Example Usage:<br>
https://season-jasmine.glitch.me//June 22, 2017 <br>
https://season-jasmine.glitch.me//1498089600 <br>
Example Output: <br>
{ unix: 1498089600, natural: "June 22, 2017" } 
<br><br>
Created by Brian Chien. <br><br>
FCC Project - Timestamp Microservice
