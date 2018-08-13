import * as argsParser from 'minimist'
import * as path from 'path'
import { init } from 'protractor/built/launcher'
const ENV_ARGS = argsParser(process.argv.slice(2))
const host = (ENV_ARGS.env_host) ? ENV_ARGS.env_host : 'localhost'
const port = (ENV_ARGS.env_port) ? ENV_ARGS.env_port : '5555'
const seleniumAddress = (ENV_ARGS.protractor_hub) ? ENV_ARGS.protractor_hub : 'localhost:4444'

init(path.resolve(__dirname, './config/config.js'), {
  baseUrl: `http://${host}:${port}`,
  seleniumAddress: `http://${seleniumAddress}/wd/hub` || `http://localhost:4444/wd/hub`,
  specs: [path.resolve(__dirname, './specs/*.spec.js')]
})
