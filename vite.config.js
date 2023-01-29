import setsoConfig from "./setso.config.js"

let root = './html'

if (setsoConfig.input !== undefined){
    root = setsoConfig.input
}

export default {
    root: root
}