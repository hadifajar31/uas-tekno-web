//import hook useState from react
import React, { useState } from 'react';

//import layout
import Layout from '../../Layouts/Default';

//import Inertia adapter
import { Inertia } from '@inertiajs/inertia';

export default function CreatePost({ errors }) {

    //define state
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [quantity, setQuantity] = useState('');


    //function "storePost"
    const storePost = async (e) => {
        e.preventDefault();

        Inertia.post('/posts', {
            title: title,
            content: content,
            quantity: quantity
        });
    }

    // function reset
    const resetForm = () => {
        setTitle('');
        setContent('');
        setQuantity('');
    };

    return (
        <Layout>
            <div className="row" style={{ marginTop: '100px' }}>
                <div className="col-12">
                    <div className="card border-0 rounded shadow-sm border-top-success">
                        <div className="card-header">
                            <span className="font-weight-bold">TAMBAH PRODUK</span>
                        </div>
                        <div className="card-body">
                            <form onSubmit={storePost}>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Nama Produk</label>
                                    <input type="text" className="form-control" value={title}
                                        onChange={(e) => setTitle(e.target.value)} placeholder="Masukkan Nama Produk" />
                                    {errors.title && (
                                        <div className="alert alert-danger">
                                            {errors.title}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Deskripsi Produk</label>
                                    <textarea className="form-control" value={content}
                                        onChange={(e) => setContent(e.target.value)} placeholder="Masukkan Deskripsi Produk" rows="4">
                                    </textarea>
                                    {errors.content && (
                                        <div className="alert alert-danger">
                                            {errors.content}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Jumlah Produk</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        placeholder="Masukkan Jumlah Produk"
                                    />
                                    {errors.quantity && (
                                        <div className="alert alert-danger">
                                            {errors.quantity}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <button type="submit" className="btn btn-md btn-success me-2">
                                        <i className="fa fa-save"></i> SIMPAN
                                    </button>
                                    <button type="button" onClick={resetForm} className="btn btn-md btn-warning">
                                    <i className="fa fa-redo"></i> RESET
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
