import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from "../components/footer";
import Header from "../components/MainHeader";
import Container from "@mui/material/Container";




const MainLayout = () => {

    return (
        <Container maxWidth="lg">
            <main>
                <Header title="Wanderlust Words"/>
                {/* this the entry point for all pages */}
                <Outlet />
                <Footer sx={{ mt: 20 }} />
            </main>
        </Container>
    )
}

export default MainLayout