import Link from "next/link";
import { TrackerDashboard } from "@/components/tracker/TrackerDashboard";
import { ArrowRight, FileText, FolderOpen, Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Texas ETPL Application Tracker
              </h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">
                Master Workflow & Documentation Tracker
              </p>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <Link
                href="/documents"
                className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium flex-1 sm:flex-none"
              >
                <FolderOpen className="h-4 w-4" />
                <span>Documents</span>
              </Link>
              <Link
                href="/next-steps"
                className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex-1 sm:flex-none"
              >
                <FileText className="h-4 w-4" />
                <span>Next Steps</span>
                <ArrowRight className="h-4 w-4 hidden sm:block" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        <TrackerDashboard />
      </main>

      <footer className="border-t bg-white mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          Texas Eligible Training Provider List (ETPL) Application Progress Tracker
        </div>
      </footer>
    </div>
  );
}
