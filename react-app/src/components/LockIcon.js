import React from 'react'
import { Link, Avatar } from '@mui/material'
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { PATH_PAGE } from "../router/paths";


const LockIcon = () => {
    return (
        <Link href={PATH_PAGE.homepage}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
            </Avatar>
        </Link>
    )
}

export default LockIcon