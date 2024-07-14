import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "./button";
import { useState, useEffect } from "react";

const Dialogbox = ({ data }) => {
  const [values, setValues] = useState({
    resistance: 0,
    capacitor: 0,
    inductance: 0,
    frequency: 0,
    voltage: 0,
    xl: 0,
    xc: 0,
    impedance: 0,
    currentRMS: 0,
    powerFactor: 0,
    power: 0,
    resonantFrequency: 0,
    phaseAngle: 0,
    resistorVoltage: 0,
    inductorVoltage: 0,
    capacitorVoltage: 0,
  });

  const updateValues = (data) => {
    const resistance =
      data.resistanceUnit === "kΩ" ? data.resistance * 1000 : data.resistance;
    const capacitor =
      data.capacitorUnit === "µF" ? data.capacitor / 1000000 : data.capacitor;
    const inductance =
      data.inductanceUnit === "mH" ? data.inductance / 1000 : data.inductance;

    const frequency = data.frequency;
    const voltage = data.voltage;

    const xl = 2 * Math.PI * frequency * inductance;
    const xc = 1 / (2 * Math.PI * frequency * capacitor);
    const impedance = Math.sqrt(Math.pow(resistance, 2) + Math.pow(xl - xc, 2));
    const currentRMS = voltage / impedance;
    const powerFactor = resistance / impedance;
    const power = voltage * currentRMS * powerFactor;
    const resonantFrequency =
      1 / (2 * Math.PI * Math.sqrt(inductance * capacitor));
    const phaseAngle = Math.acos(powerFactor);

    setValues({
      resistance,
      capacitor,
      inductance,
      frequency,
      voltage,
      xl,
      xc,
      impedance,
      currentRMS,
      powerFactor,
      power,
      resonantFrequency,
      phaseAngle,
      resistorVoltage: currentRMS * resistance,
      inductorVoltage: currentRMS * xl,
      capacitorVoltage: currentRMS * xc,
    });
  };

  useEffect(() => {
    updateValues(data);
  }, [data]);

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline" onClick={() => console.log(values)}>
          Submit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <ScrollArea className="min-w-36 h-96">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Units</TableHead>
                <TableHead>Values</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Frequency</TableCell>
                <TableCell className="font-mono">
                  {values.frequency} Hz
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Voltage</TableCell>
                <TableCell className="font-mono">{values.voltage} V</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Resistance</TableCell>
                <TableCell className="font-mono">
                  {values.resistance} Ω
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Capacitance</TableCell>
                <TableCell className="font-mono">
                  {values.capacitor} F
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Inductor</TableCell>
                <TableCell className="font-mono">
                  {values.inductance} H
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Inductive Reactance</TableCell>
                <TableCell className="font-mono">
                  {values.xl.toFixed(3)} Ω
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Capacitive Reactance</TableCell>
                <TableCell className="font-mono">
                  {values.xc.toFixed(3)} Ω
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Impedance</TableCell>
                <TableCell className="font-mono">
                  {values.impedance.toFixed(3)} Ω
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>RMS Current</TableCell>
                <TableCell className="font-mono">
                  {values.currentRMS.toFixed(3)} I{" "}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Power Factor</TableCell>
                <TableCell className="font-mono">
                  {values.powerFactor.toFixed(3)} W
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Power</TableCell>
                <TableCell className="font-mono">
                  {values.power.toFixed(3)} W
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell> Resonant Frequency </TableCell>
                <TableCell className="font-mono">
                  {values.resonantFrequency.toFixed(3)} Hz
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell> Phase Angle </TableCell>
                <TableCell className="font-mono">
                  {values.phaseAngle.toFixed(3)} Φ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell> Resistor Voltage </TableCell>
                <TableCell>{values.resistorVoltage.toFixed(3)} V</TableCell>
              </TableRow>
              <TableRow>
                <TableCell> Inductor Voltage </TableCell>
                <TableCell>{values.inductorVoltage.toFixed(3)} V</TableCell>
              </TableRow>
              <TableRow>
                <TableCell> Capacitor Voltage </TableCell>
                <TableCell>{values.capacitorVoltage.toFixed(3)} V</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export { Dialogbox };
