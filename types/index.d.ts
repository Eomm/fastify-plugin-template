import { FastifyPluginCallback } from 'fastify'

type FastifyChangeMe = FastifyPluginCallback<fastifyChangeMe.FastifyChangeMeOptions>

declare namespace fastifyChangeMe {
  export interface FastifyChangeMeOptions {}

  export const fastifyChangeMe: FastifyChangeMe
  export { fastifyChangeMe as default }
}

declare function fastifyChangeMe(...params: Parameters<FastifyChangeMe>): ReturnType<FastifyChangeMe>

export = fastifyChangeMe
