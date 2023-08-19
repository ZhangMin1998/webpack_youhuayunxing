import { sum } from "./math"
import count from "./count"

console.log("hello main")
console.log(sum(1, 2, 3, 4, 5))

document.getElementById('btn').onclick = function() {
  // console.log(count(2,1))
  // import动态导入 会将动态导入的文件分割，在需要时自动加载
  import('./count').then((res) => {
    console.log('加载ok', res)
  }).catch(err => {
    console.log(err)
  })
}