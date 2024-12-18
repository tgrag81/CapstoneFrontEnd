import React, { createContext, useContext, useState, useEffect } from "react";
import { io } from "socket.io-client";
import axios from "axios";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io("http://localhost:5000");
        setSocket(newSocket);
        return () => newSocket.close();
    }, []);

    const api = axios.create({
        baseURL: "http://localhost:5000/api",
    });

    return (
        <ApiContext.Provider value={{ api, user, setUser, socket }}>
            {children}
        </ApiContext.Provider>
    );
};

export const useApi = () => {useContext(ApiContext);
const context = useContext(ApiContext);
if (!context) {
    throw new Error("useApi must be used within an Api Provider");
}
return context;
};
