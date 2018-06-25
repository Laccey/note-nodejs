<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/index.css" />
  </head>
  <body>
    <h1>My Note</h1>
    <form action="/add" method="POST">
        <textarea id="text" placeholder="写点什么呢？" name="text" value="{{ctx.csrf}}"></textarea>
        <button id="add">新建</button>
    </form>
    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js"></script>
    <script src="/public/js/index.js"></script>
  </body>
</html>