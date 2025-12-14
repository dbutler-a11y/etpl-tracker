"use client";

import Link from "next/link";
import { ArrowLeft, Download, Printer, Home, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DocumentLayoutProps {
  title: string;
  section: string;
  children: React.ReactNode;
  subtitle?: string;
}

export function DocumentLayout({ title, section, children, subtitle }: DocumentLayoutProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50/30">
      {/* Navigation Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-10 print:hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-3 sm:py-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1 text-xs sm:text-sm text-slate-500 mb-2 sm:mb-3 flex-wrap">
            <Link href="/" className="flex items-center gap-1 hover:text-slate-900 transition-colors">
              <Home className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400" />
            <Link href="/documents" className="hover:text-slate-900 transition-colors">
              Documents
            </Link>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400" />
            <span className="text-slate-700 font-medium truncate max-w-[150px] sm:max-w-none">{title}</span>
          </nav>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <Link
              href="/documents"
              className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors text-sm font-medium group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Documents
            </Link>
            <div className="flex gap-2 sm:gap-3">
              <Button onClick={handlePrint} variant="outline" size="sm" className="gap-2 border-slate-300 hover:bg-slate-50 flex-1 sm:flex-none">
                <Printer className="h-4 w-4" />
                <span className="hidden sm:inline">Print</span>
              </Button>
              <Button onClick={handlePrint} size="sm" className="gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md shadow-blue-500/20 flex-1 sm:flex-none">
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Save</span> PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Document Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 print:py-0 print:px-0">
        <article className="bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 overflow-hidden print:shadow-none print:border-none print:rounded-none">
          {/* Document Header */}
          <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 px-12 py-12 print:bg-slate-800 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <span className="px-4 py-1.5 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-full uppercase tracking-wider border border-blue-400/20">
                  {section}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white leading-tight tracking-tight print:text-2xl">
                {title}
              </h1>
              {subtitle && (
                <p className="text-slate-400 mt-4 text-lg font-light">{subtitle}</p>
              )}
            </div>
          </div>

          {/* Document Body */}
          <div className="px-12 py-12 print:px-8 print:py-6">
            <div className="document-content">
              {children}
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 bg-white/60 backdrop-blur-sm mt-12 sm:mt-16 print:hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
            <div className="font-semibold text-slate-600">
              AI Capability Specialist Certificate
            </div>
            <div className="text-slate-400">
              Texas ETPL Application Documentation
            </div>
          </div>
        </div>
      </footer>

      {/* Global styles for document content */}
      <style jsx global>{`
        .document-content {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          line-height: 1.8;
          color: #475569;
        }

        .document-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1e293b;
          margin-top: 3rem;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #e2e8f0;
          letter-spacing: -0.025em;
        }

        .document-content h2:first-child {
          margin-top: 0;
        }

        .document-content h3 {
          font-size: 1.35rem;
          font-weight: 600;
          color: #334155;
          margin-top: 2.25rem;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .document-content h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #475569;
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
        }

        .document-content p {
          margin-bottom: 1.25rem;
          font-size: 1.05rem;
          line-height: 1.85;
        }

        .document-content ul, .document-content ol {
          margin: 1.5rem 0;
          padding-left: 1.75rem;
        }

        .document-content li {
          margin-bottom: 0.75rem;
          font-size: 1.05rem;
          line-height: 1.75;
        }

        .document-content ul li {
          position: relative;
          padding-left: 0.5rem;
        }

        .document-content ul li::marker {
          color: #3b82f6;
        }

        .document-content ol li::marker {
          color: #3b82f6;
          font-weight: 600;
        }

        .document-content strong {
          color: #1e293b;
          font-weight: 600;
        }

        .document-content hr {
          margin: 3rem 0;
          border: none;
          border-top: 1px solid #e2e8f0;
        }

        .document-content table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          margin: 1.75rem 0;
          font-size: 0.95rem;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.05);
          border: 1px solid #e2e8f0;
        }

        .document-content thead tr {
          background: linear-gradient(to right, #f8fafc, #f1f5f9);
        }

        .document-content th {
          padding: 1rem 1.25rem;
          text-align: left;
          font-weight: 600;
          color: #334155;
          border-bottom: 2px solid #e2e8f0;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .document-content td {
          padding: 1rem 1.25rem;
          border-bottom: 1px solid #f1f5f9;
          color: #475569;
        }

        .document-content tbody tr:last-child td {
          border-bottom: none;
        }

        .document-content tbody tr:hover {
          background-color: #fafbfc;
        }

        .document-content em {
          color: #64748b;
          font-style: italic;
        }

        /* Custom callout boxes */
        .document-content .not-prose {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        @media print {
          @page {
            size: letter;
            margin: 0.5in 0.6in;
          }

          html, body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            font-size: 10pt;
          }

          /* Hide screen elements */
          header, footer {
            display: none !important;
          }

          /* Main container adjustments */
          main {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          article {
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
          }

          /* Document header */
          .relative.bg-gradient-to-br {
            padding: 1rem 1.5rem !important;
            page-break-after: avoid;
          }

          /* Document body */
          .px-12.py-12 {
            padding: 1rem 1.5rem !important;
          }

          .document-content h2 {
            font-size: 1.2rem;
            margin-top: 1.25rem;
            page-break-after: avoid !important;
            break-after: avoid !important;
          }

          .document-content h2:first-child {
            margin-top: 0;
          }

          .document-content h3 {
            font-size: 1rem;
            margin-top: 0.875rem;
            page-break-after: avoid !important;
            break-after: avoid !important;
          }

          .document-content h4 {
            font-size: 0.9rem;
            page-break-after: avoid !important;
            break-after: avoid !important;
          }

          .document-content p, .document-content li {
            font-size: 9pt;
            line-height: 1.5;
            margin-bottom: 0.5rem;
          }

          .document-content ul, .document-content ol {
            margin: 0.5rem 0;
            padding-left: 1.25rem;
          }

          .document-content li {
            margin-bottom: 0.25rem;
          }

          .document-content table {
            font-size: 8.5pt;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          .document-content th, .document-content td {
            padding: 0.375rem 0.5rem !important;
          }

          .document-content hr {
            margin: 1rem 0;
            page-break-after: avoid !important;
          }

          /* Prevent page breaks inside callout boxes */
          .document-content .not-prose,
          .document-content .bg-emerald-50,
          .document-content .bg-blue-50,
          .document-content .bg-green-50,
          .document-content .bg-purple-50,
          .document-content .bg-amber-50,
          .document-content .bg-gray-50 {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            margin: 0.5rem 0 !important;
            padding: 0.75rem !important;
          }

          /* Keep grids together */
          .document-content .grid {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* Print-safe section class */
          .print-section {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* Section breaks before major sections */
          .print-page-break {
            page-break-before: always !important;
            break-before: page !important;
          }

          /* Typography for title */
          h1 {
            font-size: 1.35rem !important;
          }

          /* Reduce spacing */
          .my-6, .my-4 {
            margin-top: 0.5rem !important;
            margin-bottom: 0.5rem !important;
          }

          .p-6, .p-4 {
            padding: 0.625rem !important;
          }

          .mb-8 {
            margin-bottom: 0.75rem !important;
          }

          /* Round corners for print */
          .rounded-lg, .rounded-xl, .rounded-3xl {
            border-radius: 4px !important;
          }

          /* Decorative elements */
          .absolute {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
