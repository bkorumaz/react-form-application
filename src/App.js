import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {DialogActions, DialogContent, DialogTitle, InputLabel, Input,MenuItem, FormControl, Select, Dialog, Button, TextField} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  container: {
    direction: 'column',
    margin: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function App() {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [mc1, setMc1] = React.useState('');
  const [mc2, setMc2] = React.useState('');

  const handleMc1Change = event => {
    setMc1(Number(event.target.value) || '');
  };

  const handleMc2Change = event => {
    setMc2(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <div>
      <Button onClick={handleClickOpen}>OPEN FORM DIALOG</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Query Screen</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <TextField
             variant="outlined"
             margin="dense"
             required
             fullWidth
             id="gorevKodu"
             label="Görev Kodu"
             name="gorevKodu"
             autoComplete="email"
             autoFocus
           />
           <KeyboardDateTimePicker
           className={classes.formControl}
            variant="inline"
            ampm={false}
            label="With keyboard"
            value={selectedDate}
            onChange={handleDateChange}
            onError={console.log}
            disablePast
            format="yyyy/MM/dd HH:mm"
          />
           
           <KeyboardDateTimePicker
           className={classes.formControl}
            variant="inline"
            ampm={false}
            label="With keyboard"
            value={selectedDate}
            onChange={handleDateChange}
            onError={console.log}
            disablePast
            format="yyyy/MM/dd HH:mm"
          />
              <InputLabel htmlFor="demo-dialog-native">Faaliyet Türü</InputLabel>
              <Select
              className={classes.formControl}
                fullWidth
                native
                value={mc1}
                onChange={handleMc1Change}
                input={<Input id="demo-dialog-native" />}
              >
                <option value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
              <InputLabel id="demo-dialog-select-label">Görev Tipi</InputLabel>
              <Select
              className={classes.formControl}
                fullWidth
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={mc2}
                onChange={handleMc2Change}
                input={<Input />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
     </MuiPickersUtilsProvider>
  );
}

 export default App;


