import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Provider, createClient, useQuery } from 'urql';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';



const useStyles = makeStyles({
    root: {
        width: "25%",
        margin: 50,

    },
    title: {
        fontSize: 14,
    },

    formControl: {
        margin: 50,
        width:"50%"
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


export default function SimpleCard() {
    const classes = useStyles();

    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = event => {
        setPersonName(event.target.value);
    };

    const handleChangeMultiple = event => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setPersonName(value);
    };

    return (
        <div>

            <div> {/*THIS WILL SELECT THE METRICS BEING USED*/}
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<Input />}
                        renderValue={selected => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {names.map(name => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={personName.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            <div> {/*THIS WILL DISPLAY THE NUMERIC VALUES*/}
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {/*REAL TIME DATA HERE*/}
                            REAL TIME DATA HERE
          </Typography>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
}