import {Input} from "@/components/ui/input";
import Dropdown from "@/components/ui/dropdown";
import { Dialogbox } from "./components/ui/dialogbox";
import { Card, CardHeader, CardTitle, CardDescription } from "./components/ui/card";
import { connect } from "react-redux";
import { setCapacitor, setCapacitorUnit, setFrequency, setFrequencyUnit, setInductance, setInductanceUnit, setResistance, setResistanceUnit, setVoltage, setVoltageUnit } from '@/actions/action';

// import { type } from "os";

const Form = ({frequency, frequencyUnit, voltage, voltageUnit, resistance, resistanceUnit, capacitor, capacitorUnit, inductance, inductanceUnit, setFrequency, setFrequencyUnit, setVoltage, setVoltageUnit, setResistance, setResistanceUnit, setCapacitor, setCapacitorUnit, setInductance, setInductanceUnit}) => {
    const data = {
        frequency,
        frequencyUnit,
        voltage,
        voltageUnit,
        resistance,
        resistanceUnit,
        capacitor,
        capacitorUnit,
        inductance,
        inductanceUnit
    }
  return (
        <Card className="flex flex-col min-w-fit w-3/12 gap-3 px-1 py-5 bg-gradient-to-r from-sky-700 to-purple-700 m-4">
            <CardHeader className="py-1">
                <CardTitle className="text-4xl font-semibold leading-none tracking-tight text-fontColor " >Insert Values</CardTitle>
                <CardDescription className="text-lg text-fontColor ">Input the values and select their units</CardDescription>
            </CardHeader>

            <div className="units mx-2">
                <Input type="number" placeholder="Frequency" className="mx-2" value={frequency} onChange={(e) => setFrequency(e.target.value)} />
                <Dropdown unit="Frequency" value1="Hz" />
            </div>
            <div className="units mx-2">
                <Input type="number" placeholder="Voltage" className="mx-2" value={voltage} onChange={(e) => setVoltage(e.target.value)} />
                <Dropdown unit="Voltage" value1="V" />
            </div>
            <div className="units mx-2">
                <Input type="number" placeholder="Resistance" className="mx-2" value={resistance} onChange={(e) => setResistance(e.target.value)} />
                <Dropdown unit="Resistance" value1="Ω" value2="kΩ" />
            </div>
            <div className="units mx-2">
                <Input type="number" placeholder="Capacitor" className="mx-2" value={capacitor} onChange={(e) => setCapacitor(e.target.value)} />
                <Dropdown unit="Capacitor" value1="F" value2="µF" />
            </div>
            <div className="units mx-2">
                <Input type="number" placeholder="Inductor" className="mx-2" value={inductance} onChange={(e) => setInductance(e.target.value)} />
                <Dropdown unit="Inductor" value1="H" value2="mH" />
            </div>
            <Dialogbox data={data} />
        </Card>
  );
};

const mapStateToProps = (state) => ({
    frequency: state.frequency,
    frequencyUnit: state.frequencyUnit,
    voltage: state.voltage,
    voltageUnit: state.voltageUnit,
    resistance: state.resistance,
    resistanceUnit: state.resistanceUnit,
    capacitor: state.capacitor,
    capacitorUnit: state.capacitorUnit,
    inductance: state.inductance,
    inductanceUnit: state.inductanceUnit
  });
  
  const mapDispatchToProps = {
    setFrequency,
    setFrequencyUnit,
    setVoltage,
    setVoltageUnit,
    setResistance,
    setResistanceUnit,
    setCapacitor,
    setCapacitorUnit,
    setInductance,
    setInductanceUnit
  };

export default connect(mapStateToProps, mapDispatchToProps)(Form);