import * as components from './index'
console.log(components, 'components')
// 组件库提示
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    // [key in keyof typeof components]: typeof components[key]
    DhButton: typeof components.DhButton
    DhScrollLoad: typeof components.DhScrollLoad
    DhViewLoad: typeof components.DhViewLoad
  }
}

export {}
// 当用户使用组件库的时候需要让用户在tsconfig.json中配置types:["easyest/lib/src/components"]才会出现提示效果
// "compilerOptions": {
//   //...
//   "types": ["easyest/lib/src/components"]
// },
