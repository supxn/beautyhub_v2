import React from "react";
import styles from "./mainPage.module.scss";
import { Box } from "@mui/material";

import Search from "../../components/Search/Search"
import ServicesComp from "../../components/ServicesGrids/ServicesComp"

const mainPage: React.FC = () => {
    return(
        <Box className={styles.search}>
            <Search />
            <ServicesComp />
        </Box>
    );
}

export default mainPage;
