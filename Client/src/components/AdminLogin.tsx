import React, { useState } from "react";
import { Button } from "./ui/button";
import { loginAdmin } from "../api/admin.api";
import AddProjectsForVoting from './AddVotingProjects';


export const AdminLogin = () => {
    return(
        <AddProjectsForVoting/>
    );
};

export default AdminLogin;
