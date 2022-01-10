const fs = require('fs')
const { join } = require('path')
const root = __dirname + '/..'
const fileTypes = /\.md$/
const sidebar = []

const directories = []

fs.readdirSync(root).forEach(file => {
  let fPath = join(root, file)
  let stats = fs.statSync(fPath)
  if (stats.isDirectory() && file !== '.vuepress') {
    directories.push(file)
  }
})

for (let i = 0; i < directories.length; i++) {
  let arr = []
  fs.readdirSync(join(root, directories[i])).forEach(file => {
    if (file.match(fileTypes)) {
      const title = file.replace('.md', '')
      path = title === 'README' ? '' : title
      arr.push({
        title: title,
        path: `/${directories[i]}/${path}`
      })
    }
  })
  let o = {
    title: directories[i],
    path: `/${directories[i]}/${arr[0].title}`,
    children: arr
  }
  sidebar.push(o)
}
// console.log(o);



fs.writeFile(__dirname + '/auto-sidebar.json', JSON.stringify(sidebar), {}, () => { })