'use client'
import { useState, useEffect } from 'react';
import { hasScreenshots } from '@/utils/screenshotUtils';

export function useScreenshots(caseStudyId: string) {
  const [hasScreens, setHasScreens] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    
    hasScreenshots(caseStudyId)
      .then(result => {
        if (mounted) {
          setHasScreens(result);
          setLoading(false);
        }
      })
      .catch(() => {
        if (mounted) {
          setHasScreens(false);
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [caseStudyId]);

  return { hasScreens, loading };
}