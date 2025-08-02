'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Code,
  FileText,
  Globe,
  Github,
  Linkedin,
  Mail,
  Database,
  Layers,
  Server,
} from 'lucide-react';

export default function About() {
  return (
    <main className='flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-white'>
      {/* Header */}
      <div className='w-full bg-gradient-to-r from-indigo-900 to-slate-900 py-12'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-between items-center'>
            <Link href='/'>
              <div className='flex items-center text-white hover:opacity-90 transition-opacity'>
                <ArrowLeft className='mr-2 w-5 h-5' />
                Back to Home
              </div>
            </Link>
            <h1 className='text-3xl font-bold text-white'>About ClearClause AI</h1>
            <div className='w-24'></div> {/* Empty div for alignment */}
          </div>
        </div>
      </div>

      {/* About the Platform */}
      <div className='w-full py-16'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl font-bold text-slate-800 mb-6'>
                What is ClearClause AI?
              </h2>
              <p className='text-lg text-slate-600 mb-4'>
                ClearClause AI is a cutting-edge platform designed to revolutionize
                how legal professionals handle contracts. Using advanced AI and
                machine learning technologies, our platform can analyze,
                summarize, and identify potential issues in legal documents in a
                fraction of the time it would take a human reviewer.
              </p>
              <p className='text-lg text-slate-600 mb-4'>
                Our mission is to make contract analysis more efficient,
                accurate, and accessible for legal teams of all sizes, from solo
                practitioners to enterprise legal departments.
              </p>
            </div>
                         <div className='bg-white p-6 rounded-xl shadow-lg border border-slate-100'>
               <div className='aspect-video bg-gradient-to-br from-slate-50 to-white rounded-lg p-4 border border-slate-200 relative overflow-hidden'>
                 {/* Mockup Frame */}
                 <div className='absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-slate-300 to-slate-400 flex items-center justify-center'>
                   <div className='flex items-center gap-2'>
                     <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                     <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                     <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                   </div>
                 </div>
                 
                 {/* Content Area */}
                 <div className='mt-8'>
                   {/* Header Bar */}
                   <div className='h-8 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-t-lg flex items-center justify-between px-4 mb-4'>
                     <div className='flex items-center gap-2'>
                       <div className='w-4 h-4 bg-white rounded-sm'></div>
                       <span className='text-white text-xs font-medium'>ClearClause AI Dashboard</span>
                     </div>
                     <div className='flex items-center gap-1'>
                       <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                       <span className='text-white text-xs'>Live</span>
                     </div>
                   </div>
                   
                   {/* Main Content */}
                   <div className='grid grid-cols-3 gap-3'>
                     {/* Left Panel - Upload */}
                     <div className='bg-white border border-slate-200 rounded-lg p-3'>
                       <div className='text-center'>
                         <div className='w-12 h-12 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
                           <span className='text-indigo-600 text-lg'>📄</span>
                         </div>
                         <p className='text-xs text-slate-700 font-medium'>Upload Contract</p>
                         <p className='text-xs text-slate-500 mt-1'>Drag & Drop</p>
                       </div>
                     </div>
                     
                     {/* Center Panel - Analysis */}
                     <div className='bg-white border border-slate-200 rounded-lg p-3'>
                       <div className='space-y-2'>
                         <div className='flex items-center justify-between'>
                           <span className='text-xs text-slate-600'>Type</span>
                           <span className='text-xs bg-green-100 text-green-700 px-1 rounded'>Employment</span>
                         </div>
                         <div className='flex items-center justify-between'>
                           <span className='text-xs text-slate-600'>Risk</span>
                           <span className='text-xs bg-yellow-100 text-yellow-700 px-1 rounded'>Medium</span>
                         </div>
                         <div className='flex items-center justify-between'>
                           <span className='text-xs text-slate-600'>Clauses</span>
                           <span className='text-xs bg-blue-100 text-blue-700 px-1 rounded'>12</span>
                         </div>
                       </div>
                     </div>
                     
                     {/* Right Panel - Chart */}
                     <div className='bg-white border border-slate-200 rounded-lg p-3'>
                       <div className='text-center'>
                         <div className='w-12 h-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
                           <div className='flex items-end gap-1'>
                             <div className='w-1 h-3 bg-purple-400 rounded-sm'></div>
                             <div className='w-1 h-5 bg-purple-500 rounded-sm'></div>
                             <div className='w-1 h-2 bg-purple-400 rounded-sm'></div>
                             <div className='w-1 h-4 bg-purple-500 rounded-sm'></div>
                           </div>
                         </div>
                         <p className='text-xs text-slate-700 font-medium'>Confidence</p>
                         <p className='text-xs text-slate-500'>94%</p>
                       </div>
                     </div>
                   </div>
                   
                   {/* Bottom Bar */}
                   <div className='mt-4 bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg p-2'>
                     <div className='flex items-center justify-between'>
                       <span className='text-xs text-slate-600'>Analysis Complete</span>
                       <div className='w-16 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full'></div>
                     </div>
                   </div>
                 </div>
                 
                 {/* Mockup Shadow */}
                 <div className='absolute -bottom-2 left-2 right-2 h-2 bg-black opacity-10 rounded-full blur-sm'></div>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* How to Use */}
      <div className='w-full py-16 bg-gradient-to-b from-white to-slate-50'>
        <div className='max-w-7xl mx-auto px-4'>
          <h2 className='text-4xl font-bold text-slate-800 mb-12 text-center'>
            How to Use ClearClause AI
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Step 1 */}
            <div className='bg-white p-8 rounded-xl border border-slate-100 shadow-lg relative'>
              <div className='absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl'>
                1
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-slate-800 mt-4'>
                Upload Your Contract
              </h3>
              <p className='text-slate-600'>
                Simply drag and drop your contract file (PDF, DOCX, or TXT) into
                the dashboard upload area. Our system accepts files up to 50MB
                in size.
              </p>
            </div>

            {/* Step 2 */}
            <div className='bg-white p-8 rounded-xl border border-slate-100 shadow-lg relative'>
              <div className='absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl'>
                2
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-slate-800 mt-4'>
                AI Analysis
              </h3>
              <p className='text-slate-600'>
                Our AI engine will automatically analyze your document,
                extracting key clauses, identifying potential risks, and
                highlighting areas that may need attention.
              </p>
            </div>

            {/* Step 3 */}
            <div className='bg-white p-8 rounded-xl border border-slate-100 shadow-lg relative'>
              <div className='absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl'>
                3
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-slate-800 mt-4'>
                Review and Export
              </h3>
              <p className='text-slate-600'>
                Review the analysis results in our interactive dashboard. Export
                summaries, annotations, and risk assessments in various formats
                for team collaboration.
              </p>
            </div>
          </div>

          <div className='mt-12 text-center'>
            <Link href='/dashboard'>
              <Button className='bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                Try It Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className='w-full py-16'>
        <div className='max-w-7xl mx-auto px-4'>
          <h2 className='text-4xl font-bold text-slate-800 mb-12 text-center'>
            Technology Stack
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Frontend */}
            <div className='bg-white p-8 rounded-xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300'>
              <div className='w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <Code className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold mb-4 text-slate-800 text-center'>
                Frontend
              </h3>
              <ul className='space-y-2'>
                <li className='flex items-center text-slate-600'>
                  <div className='w-2 h-2 bg-indigo-500 rounded-full mr-2'></div>
                  Next.js 14
                </li>
                <li className='flex items-center text-slate-600'>
                  <div className='w-2 h-2 bg-indigo-500 rounded-full mr-2'></div>
                  React 18
                </li>
                <li className='flex items-center text-slate-600'>
                  <div className='w-2 h-2 bg-indigo-500 rounded-full mr-2'></div>
                  Tailwind CSS
                </li>
                <li className='flex items-center text-slate-600'>
                  <div className='w-2 h-2 bg-indigo-500 rounded-full mr-2'></div>
                  Lucide React Icons
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className='bg-white p-8 rounded-xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300'>
              <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <Server className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold mb-4 text-slate-800 text-center'>
                Backend
              </h3>
              <ul className='space-y-2'>
                <li className='flex items-center text-slate-600'>
                  <div className='w-2 h-2 bg-blue-500 rounded-full mr-2'></div>
                  Node.js
                </li>
                <li className='flex items-center text-slate-600'>
                  <div className='w-2 h-2 bg-blue-500 rounded-full mr-2'></div>
                  Express.js
                </li>
                <li className='flex items-center text-slate-600'>
                  <div className='w-2 h-2 bg-blue-500 rounded-full mr-2'></div>
                  RESTful API
                </li>
                <li className='flex items-center text-slate-600'>
                  <div className='w-2 h-2 bg-blue-500 rounded-full mr-2'></div>
                  OAuth2 Authentication
                </li>
              </ul>
            </div>

            {/* Database */}
            <div className='bg-white p-8 rounded-xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300'>
              <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <Database className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold mb-4 text-slate-800 text-center'>
                Database
              </h3>
              <ul className='space-y-2'>
                <li className='flex items-center text-slate-600'>
                  <div className='w-2 h-2 bg-green-500 rounded-full mr-2'></div>
                  MongoDB
                </li>
                <li className='flex items-center text-slate-600'>
                  <div className='w-2 h-2 bg-green-500 rounded-full mr-2'></div>
                  Mongoose ODM
                </li>
                <li className='flex items-center text-slate-600'>
                  <div className='w-2 h-2 bg-green-500 rounded-full mr-2'></div>
                  Redis Cache
                </li>
                
              </ul>
            </div>

            {/* AI & ML */}
            <div className='bg-white p-8 rounded-xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300'>
              <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <Layers className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold mb-4 text-slate-800 text-center'>
                AI & ML
              </h3>
              <ul className='space-y-2'>
                <li className='flex items-center text-slate-600'>
                  <div className='w-2 h-2 bg-purple-500 rounded-full mr-2'></div>
                  Gemini API
                </li>
                <li className='flex items-center text-slate-600'>
                  <div className='w-2 h-2 bg-purple-500 rounded-full mr-2'></div>
                  TensorFlow.js
                </li>
                <li className='flex items-center text-slate-600'>
                  <div className='w-2 h-2 bg-purple-500 rounded-full mr-2'></div>
                  NLP Processing
                </li>
                <li className='flex items-center text-slate-600'>
                  <div className='w-2 h-2 bg-purple-500 rounded-full mr-2'></div>
                  Custom NER Models
                </li>
              </ul>
            </div>
          </div>

          <div className='mt-16 bg-indigo-50 p-8 rounded-xl'>
            <h3 className='text-2xl font-semibold mb-4 text-slate-800'>
              Additional Technologies
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              <div className='bg-white p-4 rounded-lg text-center shadow-sm'>
                Stripe Payments
              </div>
              <div className='bg-white p-4 rounded-lg text-center shadow-sm'>
                Jest Testing
              </div>
              <div className='bg-white p-4 rounded-lg text-center shadow-sm'>
                CI/CD Pipeline
              </div>
              <div className='bg-white p-4 rounded-lg text-center shadow-sm'>
                Docker
              </div>
              <div className='bg-white p-4 rounded-lg text-center shadow-sm'>
                Kubernetes
              </div>
              <div className='bg-white p-4 rounded-lg text-center shadow-sm'>
                PDF.js
              </div>
              <div className='bg-white p-4 rounded-lg text-center shadow-sm'>
                Chart.js
              </div>
              <div className='bg-white p-4 rounded-lg text-center shadow-sm'>
                WebSockets
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* Footer */}
      <div className='w-full bg-slate-900 py-12 text-slate-400'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-between items-center'>
            <div className='text-xl font-bold'>ClearClause AI</div>
            <div className='flex gap-6'>
              <Link href='/' className='hover:text-white transition-colors'>
                Home
              </Link>
              <a href='#' className='hover:text-white transition-colors'>
                Features
              </a>
              <a href='#' className='hover:text-white transition-colors'>
                Pricing
              </a>
              <a href='#' className='hover:text-white transition-colors'>
                Contact
              </a>
            </div>
          </div>
          <div className='mt-8 pt-8 border-t border-slate-800 text-center'>
            <p>
              © 2025 ClearClause AI. All rights reserved. Developed by Susmit
              Bhamare.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
