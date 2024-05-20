"use client"
import { createArticle } from '@/server/BL/article.service'
import { connectToMongo } from '@/server/DL/connectToMongo'
import React, { useState, useEffect } from 'react';
import style from './style.module.css'


export default function NewArticle() {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    content: '',
    editor: '',
    quote: '',
    image: '',
    tags: '',
  });

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('newArticleFormData'));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    localStorage.setItem('newArticleFormData', JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await connectToMongo();
      console.log(formData);
      const response = await createArticle(formData);
      console.log(response);
      localStorage.removeItem('newArticleFormData');
    } catch (error) {
      console.error('Error submitting article:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 px-4">
      <h1 className={`${style.typing_effect} text-2xl font-bold mb-4`}>Add New Article</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Subtitle:</label>
          <input type="text" name="subtitle" value={formData.subtitle} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Content:</label>
          <textarea name="content" value={formData.content} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Editor:</label>
          <input type="text" name="editor" value={formData.editor} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Quote:</label>
          <input type="text" name="quote" value={formData.quote} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL:</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tags (comma separated):</label>
          <input type="text" name="tags" value={formData.tags} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <button type="submit" className="bg-theme-dark hover:shadow-inner hover:text-theme-accent hover:shadow-theme-accent text-white py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
}
