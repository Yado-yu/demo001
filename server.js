const http = require('http')

const port = 4356

http
  .createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST')
    console.log(req.url)
    if (req.url === '/yado') {
      res.end(
        JSON.stringify(
          [...Array(10)].map((v, i) => {
            return {
              key:v,
              username: (Math.random() * i).toString(16).slice(-8),
              realName: `yado-${i}`,
              age: `yado-${i}-yado`,
              password:(Math.random() * i).toString(16).slice(-8),
              sex:`${i}`,
              mobilePhone:`${i}`
            }
          }),
        ),
      )
    } else {
      res.end(JSON.stringify({ a: 1, url: req.url }))
    }
  })
  .listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}/`)
  })