import React, { useState } from "react";
import { connect } from "react-redux";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Dropdown = ({unit, value1, value2, setUnit}) => {
  const [value, setValue] = useState('');

  const handleChange = (newValue) => {
    setValue(newValue)
    setUnit(newValue)
  }



  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-12" >{value || <ChevronDown />}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{unit}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={value} onValueChange={handleChange}>
          <DropdownMenuRadioItem value={value1}>{value1}</DropdownMenuRadioItem>
          {value2 ? <DropdownMenuRadioItem value={value2}>{value2}</DropdownMenuRadioItem> : null}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setUnit: (unitValue) => {
    switch (ownProps.unit) {
      case 'Frequency':
        dispatch({ type: 'SET_FREQUENCY_UNIT', payload: unitValue });
        break;
      case 'Voltage':
        dispatch({ type: 'SET_VOLTAGE_UNIT', payload: unitValue });
        break;
      case 'Resistance':
        dispatch({ type: 'SET_RESISTANCE_UNIT', payload: unitValue });
        break;
      case 'Capacitor':
        dispatch({ type: 'SET_CAPACITOR_UNIT', payload: unitValue });
        break;
      case 'Inductor':
        dispatch({ type: 'SET_INDUCTANCE_UNIT', payload: unitValue });
        break;
      default:
        break;
    }
  }
});

export default connect(null, mapDispatchToProps)(Dropdown);