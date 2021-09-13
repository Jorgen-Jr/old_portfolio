import React from 'react';

import Layout from '../Layout';

const MainPage = () => {

    return (
        <Layout>
            <div className="page-content">
                <div className="page-text">
                    <h1 className="page-title">Olá,</h1>
                    <h1 className="page-title super">sou Jorge e</h1>
                    <h1 className="page-title">sou desenvolvedor.</h1>
                    <p>FullStack/Web Developer</p>
                </div>
                <div className="btn-group">
                    <button className="btn-default">
                        Contato
                    </button>
                </div>
            </div>
            <div className="page-icon">

            </div>
        </Layout>
    );
}

export default (MainPage);