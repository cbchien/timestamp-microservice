# timestamp-microservice
FCC API project Timestamp Microservice
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
</head>

<body>
  <div class="container">

    <h1 class="header">Timestamp API</h1>

    <hr/>

    <h3>User Stories:</h3>
    <blockquote>
      <p>1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).</p>
      <p>2. If it does, it returns both the Unix timestamp and the natural language form of that date.</p>
      <p>3. If it does not contain a date or Unix timestamp, it returns null for those properties.</p>
    </blockquote>

    <small>Note: Solely numeric dates (ex. 12-15-15, or most variations thereof) have been excluded in the interest of not discriminating against either the group of people who choose to put their month first or the group of people who choose to put their day first.</small>

    <h3>Example Usage:</h3>
    <a href="https://timestamp-api-bq.herokuapp.com/December 15, 2015">https://timestamp-api-bq.herokuapp.com/December 15, 2015</a>
    <br/>
    <a href="https://timestamp-api-bq.herokuapp.com/1450137600">https://timestamp-api-bq.herokuapp.com/1450137600</a>

    <h3>Example Output:</h3>
    <code>
      {
        unix: 1450137600,
        natural: "December 15, 2015"
      }
    </code>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <hr/>

  </div>
</body>

<footer style="text-align: center">
  <p>Created with <i class="fa fa-heart" style="color: #FF5252"></i> by <a href="https://github.com/bethqiang">Beth Qiang</a></p>
  <br/>
</footer>

</html>
