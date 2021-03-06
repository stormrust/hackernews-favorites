import { writeJsonDataToFilename } from '../util/file-util'

const getFavs = require('../hnfa/idAry')

const user = 'michaelangerman'
const fn = 'favorites'
const numofpages = 1

async function writeFavorites() {
  let data = await getFavs(user, numofpages)
  // console.info('result', data)

  let json = JSON.stringify(data)
  let filename = './data/out/' + fn + '.json'
  await writeJsonDataToFilename(filename, json)
}

async function go() {
  await writeFavorites()
}

go()
