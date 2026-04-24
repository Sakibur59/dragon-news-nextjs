import Header from '@/Component/shared/Header';
import Navbar from '@/Component/shared/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
        <Header></Header>
        <Navbar></Navbar>
        {children}
        </>
    );
};

export default MainLayout;