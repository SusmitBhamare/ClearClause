'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { api } from '@/lib/api';
import stripePromise from '@/lib/stripe';
import {
  Globe,
  ArrowRight,
  FileText,
  Shield,
  Clock,
  PiggyBank,
  Scale,
  Zap,
  Sparkles,
  Brain,
  Cpu,
  Rocket,
  Check,
  Star,
  Users,
  TrendingUp,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const handleUpgrade = async () => {
    try {
      const response = await api.get('/payments/create-checkout-session');
      const stripe = await stripePromise;
      await stripe?.redirectToCheckout({
        sessionId: response.data.sessionId,
      });
    } catch (error) {
      console.error('Error redirecting to checkout:', error);
    }
  };

  return (
    <main className='flex min-h-screen flex-col items-center bg-gradient-to-br from-gray-50 via-white to-blue-50'>

      {/* Hero Section */}
      <div className='w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 relative overflow-hidden'>
        {/* Background Elements */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl'></div>
          <div className='absolute top-20 right-20 w-40 h-40 bg-indigo-400 rounded-full blur-3xl'></div>
          <div className='absolute bottom-10 left-1/3 w-36 h-36 bg-purple-400 rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center relative z-10'>
            <div className='mb-8'>
              <span className='inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg'>
                <Sparkles className='mr-2 w-4 h-4' />
                AI-Powered Contract Analysis
              </span>
            </div>

            <h1 className='text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight'>
              Decode Legal
              <span className='block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>Documents Instantly</span>
            </h1>

            <p className='text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed'>
              Stop struggling with complex legal jargon. Our AI-powered platform instantly breaks down contracts, 
              highlights critical terms, identifies potential risks, and delivers clear summaries that anyone can understand. 
              Your legal documents, simplified.
            </p>

            <div className='flex flex-col sm:flex-row justify-center gap-6 mb-16'>
              <Link href='/dashboard'>
                <Button className='bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-5 rounded-xl text-lg font-semibold flex items-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1'>
                  Get Started
                  <ArrowRight className='ml-2 w-5 h-5' />
                </Button>
              </Link>
              <Link href='/about'>
                <Button 
                  variant='outline'
                  className='border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 px-10 py-5 rounded-xl text-lg font-semibold flex items-center transition-all duration-300 transform hover:-translate-y-1'
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className='flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600'>
              <div className='flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100'>
                <Check className='w-4 h-4 text-green-500 mr-2' />
                AI-Powered Analysis
              </div>
              <div className='flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100'>
                <Check className='w-4 h-4 text-green-500 mr-2' />
                Enterprise Security
              </div>
              <div className='flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100'>
                <Check className='w-4 h-4 text-green-500 mr-2' />
                Instant Results
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='w-full py-20 bg-gradient-to-r from-blue-50 to-indigo-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Trusted by Industry Leaders</h2>
            <p className='text-lg text-gray-600'>Proven results that speak for themselves</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow'>
              <div className='text-5xl font-bold text-blue-600 mb-3'>99.9%</div>
              <div className='text-gray-700 font-semibold text-lg'>Accuracy Rate</div>
              <div className='text-gray-500 text-sm mt-2'>Industry-leading precision</div>
            </div>
            <div className='text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow'>
              <div className='text-5xl font-bold text-green-600 mb-3'>&lt; 30s</div>
              <div className='text-gray-700 font-semibold text-lg'>Analysis Time</div>
              <div className='text-gray-500 text-sm mt-2'>Lightning-fast processing</div>
            </div>
            <div className='text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow'>
              <div className='text-5xl font-bold text-purple-600 mb-3'>10,000+</div>
              <div className='text-gray-700 font-semibold text-lg'>Contracts Analyzed</div>
              <div className='text-gray-500 text-sm mt-2'>Proven track record</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id='features' className='w-full py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-20'>
            <h2 className='text-5xl font-bold text-gray-900 mb-6'>
              Smart Features for Modern Legal Teams
            </h2>
            <p className='text-xl text-gray-600 max-w-4xl mx-auto'>
              Everything you need to read between the lines and extract actionable insights from complex legal documents.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div className='bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2'>
              <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6'>
                <Brain className='w-6 h-6 text-blue-600' />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>Smart Clause Extraction</h3>
              <p className='text-gray-600 leading-relaxed'>
                Automatically identify and extract the most important clauses from any contract. 
                No more manual searching through pages of legal text.
              </p>
            </div>

            <div className='bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 transform hover:-translate-y-2'>
              <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6'>
                <Zap className='w-6 h-6 text-green-600' />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>Lightning Fast</h3>
              <p className='text-gray-600 leading-relaxed'>
                Process hundreds of pages in minutes with our optimized AI engine. 
                Get instant insights and recommendations.
              </p>
            </div>

            <div className='bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-2'>
              <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6'>
                <Shield className='w-6 h-6 text-purple-600' />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>Enterprise Security</h3>
              <p className='text-gray-600 leading-relaxed'>
                Bank-level encryption and security protocols protect your sensitive data. 
                SOC 2 compliant with regular security audits.
              </p>
            </div>

            <div className='bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-2'>
              <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6'>
                <Scale className='w-6 h-6 text-orange-600' />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>Legal Summarization</h3>
              <p className='text-gray-600 leading-relaxed'>
                Transform complex legal jargon into clear, understandable summaries. 
                Get the key points without wading through pages of dense text.
              </p>
            </div>

            <div className='bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg border border-red-100 hover:shadow-xl hover:border-red-200 transition-all duration-300 transform hover:-translate-y-2'>
              <div className='w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6'>
                <TrendingUp className='w-6 h-6 text-red-600' />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>Risk Detection</h3>
              <p className='text-gray-600 leading-relaxed'>
                Spot potential problems before they become costly mistakes. 
                Our AI flags unusual terms, hidden obligations, and risky conditions.
              </p>
            </div>

            <div className='bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-xl hover:border-indigo-200 transition-all duration-300 transform hover:-translate-y-2'>
              <div className='w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6'>
                <Users className='w-6 h-6 text-indigo-600' />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>Team Collaboration</h3>
              <p className='text-gray-600 leading-relaxed'>
                Share insights and collaborate with your team. 
                Track changes and maintain version control.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className='w-full py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Trusted by Leading Legal Teams
            </h2>
          </div>
          
          <div className='bg-gray-50 rounded-2xl p-8 md:p-12'>
            <div className='flex items-center mb-6'>
              <div className='flex text-yellow-400'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='w-5 h-5 fill-current' />
                ))}
              </div>
              <span className='ml-2 text-gray-600'>5.0 rating</span>
            </div>
            
            <blockquote className='text-xl text-gray-700 italic mb-6'>
              "ClearClause has transformed our contract review process. We've reduced review time by 75% 
              and saved over $200,000 in legal fees in just three months. The AI insights are incredibly accurate."
            </blockquote>
            
            <div className='flex items-center'>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                <span className='text-blue-600 font-semibold'>JD</span>
              </div>
              <div className='ml-4'>
                <div className='font-semibold text-gray-900'>Jessica Daniels</div>
                <div className='text-gray-600'>Legal Operations Director, Fortune 500 Company</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='w-full py-20 bg-blue-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>
            Ready to Transform Your Contract Workflow?
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
            Join thousands of legal professionals who are saving time and reducing risk with our AI-powered solution.
          </p>
          
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Link href='/dashboard'>
              <Button className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300'>
                Get Started
              </Button>
            </Link>
                        <Link href='/about'>
              <Button
                variant='outline'
                className='border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300'
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className='w-full bg-gray-900 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center mb-4 md:mb-0'>
              <div className='w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>CC</span>
              </div>
              <span className='ml-2 text-xl font-bold text-white'>ClearClause</span>
            </div>
            
            <div className='flex space-x-6 text-gray-400'>
              <a href='#features' className='hover:text-white transition-colors'>Features</a>
              <Link href='/about' className='hover:text-white transition-colors'>About</Link>
            </div>
          </div>
          
          <div className='mt-8 pt-8 border-t border-gray-800 text-center'>
            <p className='text-gray-400'>© 2025 ClearClause. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
