import React from 'react';
import Header from "../components/Header";
import GreyBlocks from "../components/GreyBlocks";
import{ Provider} from 'react-redux';
import {store} from "../store/store";

const Home = () => {
    return (
        <Provider store={ store }>
            <Header/>
            <GreyBlocks opened={true}></GreyBlocks>
            <GreyBlocks opened={false}></GreyBlocks>
            <GreyBlocks opened={false}></GreyBlocks>
        </Provider>
    );
};

export default Home;
