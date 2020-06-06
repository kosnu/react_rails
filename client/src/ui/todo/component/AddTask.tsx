import * as React from "react"
import { Button } from "@material-ui/core"

type Props = {
  onClick: () => void
}

export const AddTask: React.FC<Props> = React.memo(
  ({ onClick, ...props }: Props) => (
    <div {...props}>
      <Button variant="contained" color="primary" onClick={onClick}>
        {"Add"}
      </Button>
    </div>
  ),
)
