import clsx from 'clsx';
import { IconButton, Paper } from '@material-ui/core';
import { useStyles } from './styles';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

function ClientOverview() {
  const classes = useStyles();

  return (
    <Paper
      variant='outlined'
      className={clsx(classes.paper, classes.userOverview)}
    >
      <div>
        <img
          className={classes.overviewImg}
          src='https://images.pexels.com/photos/4155490/pexels-photo-4155490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt=''
        />
      </div>
      <div>
        <h1>Roberta Fox</h1>
        <p>ID: 90237420</p>
        <p>Age: 28 years old</p>
      </div>
      <div>
        <IconButton className={classes.communication}>
          <VideocamOutlinedIcon />
        </IconButton>
        <IconButton className={classes.communication}>
          <PhoneOutlinedIcon />
        </IconButton>
        <IconButton className={classes.communication}>
          <ChatBubbleOutlineOutlinedIcon />
        </IconButton>
      </div>
    </Paper>
  );
}

export default ClientOverview;
