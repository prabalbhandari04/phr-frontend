import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    // SideNav Active Tabs
    const [activeTab, setActiveTab] = useState(1);
    // Token
    const [user, setUser] = useState('patient');
    // Edit Page Side Nav
    const [activeEdit, setActiveEdit] = useState(1);
    // Doctor Side Nav
    const [activeDoctor, setActiveDoctor] = useState(1);
    const [activeDoctorTab, setActiveDoctorTab] = useState('');
    // Booking
    const [bookingStep, setBookingStep] = useState(1);

    const [additionalData, setAdditionalData] = useState({
        userType: 'Patient',
        gender: 'Male',
        height: '',
        weight: '',
        blood_group: '',
        expertise: 'Cardiology',
        nmc: '',
        experience: '',
        fees: '',
        qualification: '',
        profile_picture: '',
        surgeries: [],
        diseases: [],
    });

    return (
        <UserContext.Provider value={{ activeTab, setActiveTab, user, setUser, activeEdit, setActiveEdit, activeDoctor, setActiveDoctor, activeDoctorTab, setActiveDoctorTab, bookingStep, setBookingStep, additionalData, setAdditionalData }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider