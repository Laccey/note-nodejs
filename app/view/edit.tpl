<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/index.css" />
  </head>
  <body>
    <h1>Edit My Note</h1>
    <form action="/update" method="POST">
        <textarea id="text" placeholder="" name="text" value="{{ctx.csrf}}"> {{text}}</textarea>
        <button id="save">保存</button>
    </form>
    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js"></script>
    <script src="/public/js/edit.js"></script>
  </body>
</html>