'use client';
import ContractAnalysisResults from '@/components/analysis/contract-analysis-results';
import { useCurrentUser } from '@/hooks/use-current-user';
import { ContractAnalysis } from '@/interfaces/contract.interface';
import { api } from '@/lib/api';
import { useEffect, useState } from 'react';

export default function ContractResultsPage() {
  const { user } = useCurrentUser();
  const [analysisResults, setAnalysisResults] = useState<ContractAnalysis | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      fetchLatestAnalysis();
    }
  }, [user]);

  const fetchLatestAnalysis = async () => {
    try {
      setLoading(true);
      const response = await api.get('/contracts/user-contracts');
      const contracts = response.data;
      
      if (contracts && contracts.length > 0) {
        // Get the most recent contract
        const latestContract = contracts[0]; // They're sorted by createdAt desc
        setAnalysisResults(latestContract);
      } else {
        setAnalysisResults(null);
      }
      setError(false);
    } catch (error) {
      console.error('Error fetching latest analysis:', error);
      setError(true);
      setAnalysisResults(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center p-8'>
        <div className='text-gray-500 font-medium'>Loading latest analysis...</div>
      </div>
    );
  }

  if (error || !analysisResults) {
    return (
      <div className='flex items-center justify-center p-8'>
        <div className='text-gray-500 font-medium'>No analysis results available. Please analyze a contract first.</div>
      </div>
    );
  }

  return (
    <ContractAnalysisResults
      contractId={analysisResults._id || ''}
      isActive={false}
      anaysisResults={analysisResults}
    />
  );
}
