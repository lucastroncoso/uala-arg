import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown(props) {

  const handleChange = (event) => {
    props.setSelectedValue(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ width: '100%' }} >
        <InputLabel id={`${props.slug}-label`}>{props.name}</InputLabel>
        <Select
          labelId={`${props.slug}-label`}
          id={props.slug}
          value={props.selectedValue}
          onChange={handleChange}
          label={props.name}
          disableUnderline
        >
          {
            props.items.map(item => (
              <MenuItem key={item} value={item}>{item}</MenuItem>
            ))
          }
        </Select>
      </FormControl>

    </div>
  );
}