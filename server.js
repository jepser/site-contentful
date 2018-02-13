require('dotenv').config()
const express = require('express')
const next = require('next')
const { parse } = require('url')

const DEV = process.env.ENVIRONMENT !== 'production'
const PORT = process.env.PORT || 3000

const app = next({dir: '.', dev: DEV})
const handle = app.getRequestHandler()

const routes = require('./routes')

app.prepare().then(() => {
  const server = express()

  server.get('/:type/:slug', (req, res, next) => {
    const type = req.params.type
    if(['labs', 'articles'].indexOf(type) !== -1) {
      const params = { slug: req.params.slug, type: type }
      let template = '/article'
      if (params.slug === 'script-para-migracion') {
        template = '/labs/migration-script'
      }
      return app.render(req, res, template, params)
    } else {
      next()
    }
  })

  server.get('*', (req, res) => {

    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    const route = routes[pathname]

    if (route) {
      return app.render(req, res, route.page, route.query)
    }
    return handle(req, res)
  })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready for liftoff: http://localhost:${PORT}`)
  })
})
