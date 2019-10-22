const fs = require('fs-extra')
async function copyFiles () {
  try {
    await fs.copy('./static', './dist/static')
    await fs.copy('./index.html', './dist/index.html')
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

copyFiles()

