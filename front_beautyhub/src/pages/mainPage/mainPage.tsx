import React from "react";
import styles from "./mainPage.module.scss";
import { Box } from "@mui/material";

import Search from "../../components/MainPageComp/Search/Search"
import ServicesComp from "../../components/MainPageComp/ServicesGrids/ServicesComp"

const mainPage: React.FC = () => {
    return(
        <Box className={styles.search}>
            <Search />
            <ServicesComp />
        </Box>
    );
}

export default mainPage;
