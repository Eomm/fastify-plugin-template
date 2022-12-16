'use strict'

const { test } = require('tap')
const fastify = require('fastify')

const plugin = require('../index')

async function buildApp (t, opts) {
  const app = fastify()
  app.register(plugin, opts)
  t.teardown(() => app.close())

  return app
}

test('Basic usage', async t => {
  t.plan(1)

  const app = await buildApp(t)

  await app.ready()

  t.pass('CHANGE ME')
})
