const {override, fixBabelImports, addDecoratorsLegacy } = require("customize-cra");

//override 返回一个函数，该函数返回对象将作为webpack的配置对象
module.exports = override(
    fixBabelImports("import",{
        librarName:"antd",
        libraryDirectory:"es",
        style:"css"
    }),
    addDecoratorsLegacy()
);