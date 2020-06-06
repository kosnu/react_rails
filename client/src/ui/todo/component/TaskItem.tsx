import * as React from "react"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Task } from "../../store/task"

type Props = {
  task: Task
  onDeleteButtonClick: (ids: [string]) => void
}

export const TaskItem: React.FC<Props> = React.memo(
  ({ task, onDeleteButtonClick, ...props }: Props) => {
    const classes = useStyles()

    return (
      <div {...props}>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {task.name}
            </Typography>
            <Typography variant="body2" component="p">
              {task.describe}
            </Typography>
            <Typography>{task.deadlineAt}</Typography>
            <Typography>{task.completionAt}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
            <Button
              size="small"
              onClick={() => onDeleteButtonClick([task.id.toString()])}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  },
)

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "5vh 10vh",
    backgroundColor: "#F5F5F5",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
})
