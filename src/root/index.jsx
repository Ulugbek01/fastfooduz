import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {sidebar} from '../utils/sidebar';
import Sidebar from '../components/Sidebar';
import { Container } from './style';

export const Root = () => {
    return (
        <Container>
            <Router>
                <Sidebar/>
                <Routes>
                    {
                        sidebar.map(({id, iconUrl, title, pathname, component: Element}) =>{
                            return <Route key={id} path={pathname} element={<Element/>} />
                        })
                    }
                    <Route path='*' element={<h1>404 not found</h1>} />
                </Routes>
            </Router>
        </Container>
    )
}

export default Root;