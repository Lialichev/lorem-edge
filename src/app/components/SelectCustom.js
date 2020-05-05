import React, {useEffect, useRef, useState} from 'react';
import {InputLabel, Select, MenuItem, FormControl} from '@material-ui/core';

function SelectCustom({ value, handleChange, label, name, data, empty, multiple }) {
    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);

    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    return (
        <FormControl variant="outlined" className="w-full">
            <InputLabel ref={inputLabel}>
                {label}
            </InputLabel>
            <Select
                name={name}
                value={value}
                onChange={handleChange}
                labelWidth={labelWidth}
                multiple={multiple}
            >
                {
                    empty && (
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                    )
                }
                {
                    data.map(({ name, value }) => (
                        <MenuItem value={value} key={value}>{name}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
}

export default SelectCustom;
