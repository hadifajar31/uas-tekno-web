// resources/js/Pages/About.jsx

import React from 'react';
import Layout from '../Layouts/Default';

export default function About() {
    return (
        <Layout>
            <div className="container" style={{ marginTop: '100px' }}>
                <div className="card border-0 rounded shadow-sm border-top-info">
                    <div className="card-header">
                        <h4 className="font-weight-bold">Tentang Aplikasi</h4>
                    </div>
                    <div className="card-body">
                        <p>
                            Aplikasi ini dibuat untuk mengelola data produk dengan fitur CRUD
                            menggunakan React, Laravel, dan Inertia.js.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
