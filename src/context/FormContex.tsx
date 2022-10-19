import React, { createContext, useState } from 'react';
import { FormInterface } from '../interface/FormInterface';
export interface FormProviderProps {
    children: React.ReactNode;
}
interface FormContextInterface {
    credito: FormInterface,
    guardarCredito: (credito: FormInterface) => {},
}
export const FormContext = createContext<FormContextInterface>({} as FormContextInterface);
const InitialContext = (): FormContextInterface => {    
    const [credito, setCredito] = useState<FormInterface>({} as FormInterface);
    
	const guardarCredito = (creditoBySave: FormInterface) => {
        setCredito(creditoBySave);
    }
    return {
        credito,
        guardarCredito
    } as FormContextInterface;
}
export const FormProvider : React.FC<FormProviderProps> = ({ children }) => { 
    const iniContext = InitialContext();
    return (
        <FormContext.Provider value={iniContext}>
            {children}
        </FormContext.Provider>
    )
}