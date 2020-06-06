import * as React from "react"

type Props = {}

export const Header: React.FC<Props> = React.memo(({ ...props }: Props) => (
  <div {...props}>{"header"}</div>
))
