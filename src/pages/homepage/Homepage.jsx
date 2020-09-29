import React from 'react';
import './homepage.styles.scss';
import Directory from "../../components/directory/Directory";
import {HomePageContainer} from "./homePageStyles";

const Homepage = () => (
    <HomePageContainer>
        <Directory/>
    </HomePageContainer>
)

export default Homepage;
