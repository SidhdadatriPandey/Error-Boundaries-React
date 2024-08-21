import React, { createContext, useState, ReactNode } from "react";

interface Data {
    count1: number;
    count2: number;
    setCount1: React.Dispatch<React.SetStateAction<number>>;
    setCount2: React.Dispatch<React.SetStateAction<number>>;
}

const initialData: Data = {
    count1: 0,
    count2: 0,
    setCount1: () => {},
    setCount2: () => {}
}

export const UserContext = createContext<Data>(initialData);

interface CounterContextProps {
    children: ReactNode;
}

const CounterContext: React.FC<CounterContextProps> = ({ children }) => {
    const [count1, setCount1] = useState<number>(0);
    const [count2, setCount2] = useState<number>(0);

    const value = {
        count1,
        count2,
        setCount1,
        setCount2
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export default CounterContext;
