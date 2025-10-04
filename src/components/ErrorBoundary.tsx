import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
          <div className="max-w-md text-center">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h1 className="text-2xl text-slate-100 mb-2">Oops! Something went wrong</h1>
              <p className="text-slate-400">
                We apologize for the inconvenience. Please try refreshing the page.
              </p>
            </div>
            
            <Button 
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              <RefreshCw className="mr-2" size={18} />
              Refresh Page
            </Button>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-slate-300 cursor-pointer">Error Details</summary>
                <pre className="mt-2 text-xs text-red-400 bg-slate-900 p-4 rounded overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}