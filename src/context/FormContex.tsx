import React, { createContext, useState } from 'react';
import { FormInterface } from '../interface/FormInterface';
export interface FormProviderProps {
    children: React.ReactNode;
}
interface FormContextInterface {
    data: FormInterface,
    saveData: (data: FormInterface) => {},
}
export const FormContext = createContext<FormContextInterface>({} as FormContextInterface);
const InitialContext = (): FormContextInterface => {    
    const [data, setData] = useState<FormInterface>({} as FormInterface);
    
	const saveData = (dataBySave: FormInterface) => {
        setData(dataBySave);
    }
    return {
        data,
        saveData
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