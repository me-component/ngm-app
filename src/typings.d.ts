/* SystemJS module definition */
declare var module: NodeModule
declare var VERSION: string
interface NodeModule {
  id: string
}

declare module '*.json' {
  const value: any
  export default value
}

declare module '*.css' {
  const value: any
  export default value
}

declare module '*.txt' {
  const value: any
  export default value
}

// Extra variables that live on Global that will be replaced by webpack DefinePlugin
