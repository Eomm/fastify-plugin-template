'use strict'

const fp = require('fastify-plugin')

function fastifyChangeMe (fastify, options, next) {
  next()
}

const plugin = fp(fastifyChangeMe, {
  fastify: '^4.x',
  name: 'fastify-change-me'
})

module.exports = plugin
module.exports.default = plugin
module.exports.fastifyChangeMe = fastifyChangeMe
