'use client'
import React, { useEffect, useState } from 'react'

interface SelectLocationStepProps{
  input:any;
  i:any;
  currentInputsValues:any;
  handleStepValues:any;
  setUF:any;
  UF:any;
  city:any;
  setCity:any;
  currentStep:any;
  currentSubstep:any;
}
export const SelectLocationStep = ({input, i, currentInputsValues, handleStepValues, setUF, UF, city, setCity, currentStep, currentSubstep }:SelectLocationStepProps) => {
  const [estados, setEstados] = useState<any>([]);
  const [cidades, setCidades] = useState<any>([]);
  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => response.json())
      .then((data) => setEstados(data.sort((a:any, b:any) => a.nome.localeCompare(b.nome))));
  }, []);

  useEffect(() => {
    if (UF) {
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`)
        .then((response) => response.json())
        .then((data) => setCidades(data.sort((a:any, b:any) => a.nome.localeCompare(b.nome))));
    } else {
      setCidades([]);
    }
  }, [UF]);
  if (input.name === 'gymUF') {
    return (
      <select
        value={currentInputsValues[i] || ''}
        name={input.name}
        key={input.name}
        style={{ width: `${input.width}%` }}
        className="bg-acad-gray-light border border-acad-blue text-acad-gray-dark p-2 rounded-lg "
        onChange={(e) => {
          handleStepValues(i, e.target.value, currentStep, currentSubstep);
          setUF(e.target.value);
        }}
      >
        <option disabled value="">UF</option>
        {estados.map((estado:any) => (
          <option key={estado.id} value={estado.sigla}>{estado.nome}</option>
        ))}
      </select>
    );
  }

  if (input.name === 'gymCity') {
    return (
      <select
        value={currentInputsValues[i] || ''}
        name={input.name}
        key={input.name}
        style={{ width: `${input.width}%` }}
        className="bg-acad-gray-light border border-acad-blue text-acad-gray-dark p-2 rounded-lg min-w-fit"
        onChange={(e) => handleStepValues(i, e.target.value, currentStep, currentSubstep)}
        disabled={!UF}
      >
        <option disabled value="">Selecione uma cidade</option>
        {cidades.map((cidade:any) => (
          <option key={cidade.id} value={cidade.nome}>{cidade.nome}</option>
        ))}
      </select>
    );
  }
}
