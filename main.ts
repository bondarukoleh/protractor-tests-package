import * as argsParser from 'minimist'
import * as path from 'path'
import { init } from 'protractor/built/launcher'
const ENV_ARGS = argsParser(process.argv.slice(2))
const host = (ENV_ARGS.env_host) ? ENV_ARGS.env_host : 'localhost'
const port = (ENV_ARGS.env_port) ? ENV_ARGS.env_port : '5555'
const seleniumAddress = (ENV_ARGS.protractor_hub) && ENV_ARGS.protractor_hub
const addConfig = {
  baseUrl: `http://${host}:${port}`,
  specs: [path.resolve(__dirname, './specs/*.spec.js')],
}

function makeAdditionConf(conf) {
  if(seleniumAddress) {
    conf.seleniumAddress = `http://${seleniumAddress}/wd/hub`
  } else {
    conf.directConnect = true
  }
}
makeAdditionConf(addConfig)

init(path.resolve(__dirname, './config/config.js'), addConfig)
