'use client';
import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import { createFlashAction } from '@/server/actions/flash.action';

export default function newFlash() {
 const [formData, setFormData] = useState({
   
title: '',
subtitle: '',
content: '',
editor: '',
date: '',
  }); 
  
  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('newFlashFormData'));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    localStorage.setItem('newFlashFormData', JSON.stringify(formData));
  }, [formData]);


 return (
     <div dir="rtl" className="max-w-lg mx-auto mt-10 px-4">
      <h1  className={`${style.typing_effect} text-2xl font-bold mb-4`}>הוספת מבזק חדש</h1>
      <form action={createFlashAction}  className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">כותרת:</label>
          <input type="text" required name="title" value={formData.title} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">כותרת משנה:</label>
          <input type="text" required name="subtitle" value={formData.subtitle} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">תוכן:</label>
          <textarea name="content" required value={formData.content} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full resize-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">שם הכותב/ת:</label>
          <input type="text" required name="editor" value={formData.editor} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

  
 