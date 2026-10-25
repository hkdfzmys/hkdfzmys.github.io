import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { About, Events, EventDetail, Gallery, Join, Credits, Privacy, NotFound } from './pages/ClubPages';
import { Blog, Article } from './pages/Blog';
import './styles.css';
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><HashRouter><Routes><Route element={<Layout/>}><Route index element={<Home/>}/><Route path="about" element={<About/>}/><Route path="events" element={<Events/>}/><Route path="events/:id" element={<EventDetail/>}/><Route path="gallery" element={<Gallery/>}/><Route path="join" element={<Join/>}/><Route path="blog" element={<Blog/>}/><Route path="blog/category/:category" element={<Blog/>}/><Route path="blog/tag/:tag" element={<Blog/>}/><Route path="blog/archive/:year" element={<Blog/>}/><Route path="blog/:slug" element={<Article/>}/><Route path="credits" element={<Credits/>}/><Route path="privacy" element={<Privacy/>}/><Route path="*" element={<NotFound/>}/></Route></Routes></HashRouter></React.StrictMode>);
