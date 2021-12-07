import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';


export default function CheckboxSelector( props ) {

  const handleChange = (event) => {
    props.setSelected( current => !current );
  };

  return (
    <div>
      <FormControl component="fieldset">
            <FormControlLabel 
                value={ props.value }  
                control={ <Checkbox
                    checked={props.selected}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                  /> } 
                label={ props.label } 
                labelPlacement={ props.labelPlacement } 
            />
        </FormControl>
    </div>
  );
}