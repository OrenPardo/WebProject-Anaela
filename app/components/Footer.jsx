'use client';

import { useState, useRef, useCallback } from 'react';
import AccessibilityDialog from './AccessibilityDialog';

export default function Footer() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const triggerRef = useRef(null);
  const year = new Date().getFullYear();
  const closeDialog = useCallback(() => setIsDialogOpen(false), []);

  return (
    <>
      <footer className="bg-white border-t border-gray-200 py-6 px-6" role="contentinfo">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <p>&copy; {year} אנאלה — כל הזכויות שמורות.</p>
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setIsDialogOpen(true)}
            className="text-primary hover:text-primary-dark transition-colors font-medium min-h-[44px] flex items-center underline underline-offset-2"
          >
            הצהרת נגישות
          </button>
        </div>
      </footer>

      <AccessibilityDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        triggerRef={triggerRef}
      />
    </>
  );
}
