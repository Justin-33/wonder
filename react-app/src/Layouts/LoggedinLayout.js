import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from "../components/footer";
import LoggedinHeader from "../components/LoggedinHeader";
import Container from "@mui/material/Container";




const LoggedinLayout = () => {

    return (
        <Container maxWidth="lg">
            <main>
                <LoggedinHeader title="Wanderlust Words"/>
                {/* this the entry point for all pages */}
                <Outlet />
                <Footer sx={{ mt: 20 }} />
            </main>
        </Container>
    )
}

export default LoggedinLayout