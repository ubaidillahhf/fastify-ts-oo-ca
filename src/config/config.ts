import configYaml from 'config-yaml'

const config = configYaml(`./config/env/config.yml`)

export default config[process.env.NODE_ENV]
