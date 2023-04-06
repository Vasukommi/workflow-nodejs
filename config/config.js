const devlopment = {
    workflowDB: "mongodb://ccmStage:ccmStage123@192.168.2.7:27017/workflow?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
}

const stage = {
    workflowDB: "mongodb://ccmStage:ccmStage123@192.168.2.7:27017/workflow?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
}

const production = {
    workflowDB: "mongodb://ccmStage:ccmStage123@192.168.2.7:27017/workflow?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
}

const configuration = process.env.NODE_ENV === 'development' ?
    production :
    process.env.NODE_ENV === 'stage' ? stage : devlopment

export default configuration