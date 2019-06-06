const path = require('path')
export default {
    extraBabelPlugins: [
      ["import", {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": true // `style: true` 会加载 less 文件
      }]
    ],
    alias:{
      Assets:path.resolve(__dirname,'src/assets')
    }
  }
