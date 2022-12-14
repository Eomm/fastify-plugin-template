import { FastifyPluginCallback } from 'fastify'
import { expectAssignable } from 'tsd'
import fastifyChangeMe, { fastifyChangeMe as fastifyChangeMeNamed} from '..'

expectAssignable<FastifyPluginCallback>(fastifyChangeMe)
expectAssignable<FastifyPluginCallback>(fastifyChangeMeNamed)
