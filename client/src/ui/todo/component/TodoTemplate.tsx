import * as React from "react"

type Props = {
  data: any
}

export const TodoTemplate: React.FC<Props> = React.memo(
  ({
     ...props
   }: Props) => (
    <div className="App" {...props}>
      <p>{"hogehogehoge"}</p>
      <div>data</div>
    </div>  )
)