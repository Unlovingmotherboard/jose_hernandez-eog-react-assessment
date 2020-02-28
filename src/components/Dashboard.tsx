import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Provider, createClient, useQuery } from 'urql';
import { metricActions } from "../Features/Weather/metrix_reducer2"
import { IState } from '../store';

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
    'waterTemp',
    'casingPressure',
    'injValveOpen',
    'flareTemp',
    'oilTemp',
    'tubingPressure',
];

function getStyles(name: any, personName: string | any[], theme: { typography: { fontWeightRegular: any; fontWeightMedium: any; }; }) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


export default function SimpleCard(this: any) {
    const classes = useStyles({});
    const dispatch = useDispatch();


    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    // const handleChange = (event: { target: { value: React.SetStateAction<never[]>; }; }) => {
    //     setPersonName(event.target.value);
    //     dispatch(metricActions.selectMetric(event.target.value))
    //     getMetrics();
    // };

    // const handleChangeMultiple = (event: { target: { options: any; }; }) => {
    //     const { options } = event.target;
    //     const value = [];
    //     for (let i = 0, l = options.length; i < l; i += 1) {
    //         if (options[i].selected) {
    //             value.push(options[i].value);
    //         }
    //     }
    //     setPersonName(value);
    // };


    const getMetrics = (IState: undefined) => {
        console.log(IState)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {
        // No longer need to cast to any - hooray for react!
        console.log(e)
      }


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