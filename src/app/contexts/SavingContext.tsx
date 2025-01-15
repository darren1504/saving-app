'use client'

import { createContext, useContext, useState } from 'react';

interface SavingContextType {
    amount: string;
    roomName: string;
    setAmount: (value: string) => void;
    setRoomName: (value: string) => void;
}

export const SavingContext = createContext<SavingContextType>({
    amount: '',
    roomName: '',
    setAmount: () => { },
    setRoomName: () => { },
});

export const SavingProvider = ({ children }: { children: React.ReactNode }) => {
    const [amount, setAmount] = useState('');
    const [roomName, setRoomName] = useState('');

    return (
        <SavingContext.Provider value={{ amount, roomName, setAmount, setRoomName }}>
            {children}
        </SavingContext.Provider>
    );
};

export const useSaving = () => useContext(SavingContext);