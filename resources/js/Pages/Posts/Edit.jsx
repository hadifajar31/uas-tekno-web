import React, { useState } from 'react';

//import layout
import Layout from '../../Layouts/Default';

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';

export default function EditPost({ errors, post }) {
    //define state
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const [quantity, setQuantity] = useState(post.quantity);

    //function "updatePost"
    const updatePost = async (e) => {
        e.preventDefault();

        Inertia.put(`/posts/${post.id}`, {
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
                            <span className="font-weight-bold">EDIT POST</span>
                        </div>
                        <div className="card-body">
                            <form onSubmit={updatePost}>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Nama Produk</label>
                                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Masukkan Nama Produk" />
                                </div>
                                {errors.title && (
                                    <div className="alert alert-danger">
                                        {errors.title}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Deskripsi Produk</label>
                                    <textarea className="form-control" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Masukkan Deskripsi Produk" rows={4}></textarea>
                                </div>
                                {errors.content && (
                                    <div className="alert alert-danger">
                                        {errors.content}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Jumlah Produk</label>
                                    <input type="number" className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Masukkan Jumlah Produk" />
                                </div>
                                {errors.quantity && (
                                    <div className="alert alert-danger">
                                        {errors.quantity}
                                    </div>
                                )}

                                <div>
                                    <button type="submit" className="btn btn-md btn-success me-2">
                                        <i className="fa fa-save"></i> UPDATE
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
