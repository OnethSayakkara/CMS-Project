import React, { useState, useRef } from "react"
import {
  ZoomIn,
  ZoomOut,
  Download,
  ChevronLeft,
  ChevronRight,
  Printer
} from "lucide-react"
export function PDFViewer({ onProgressUpdate, initialProgress }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(100)
  const [maxScrollReached, setMaxScrollReached] = useState(initialProgress)
  const containerRef = useRef(null)
  const totalPages = 12
  // Simulated PDF content pages
  const pages = Array.from(
    {
      length: totalPages
    },
    (_, i) => i + 1
  )
  const handleScroll = () => {
    if (!containerRef.current) return
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current
    const scrollPercentage = Math.round(
      ((scrollTop + clientHeight) / scrollHeight) * 100
    )
    // Only update if we've scrolled further than before
    if (scrollPercentage > maxScrollReached) {
      const newProgress = Math.min(scrollPercentage, 100)
      setMaxScrollReached(newProgress)
      onProgressUpdate(newProgress)
    }
    // Update current page indicator based on scroll position
    const pageHeight = scrollHeight / totalPages
    const currentPageIndex =
      Math.floor((scrollTop + clientHeight / 2) / pageHeight) + 1
    setCurrentPage(Math.min(currentPageIndex, totalPages))
  }
  const handleZoomIn = () => setZoom(prev => Math.min(prev + 25, 200))
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 25, 50))
  const scrollToPage = page => {
    if (!containerRef.current) return
    const pageElement = document.getElementById(`pdf-page-${page}`)
    if (pageElement) {
      pageElement.scrollIntoView({
        behavior: "smooth"
      })
      setCurrentPage(page)
    }
  }
  return (
    <div className="flex flex-col h-[calc(100vh-140px)] bg-slate-100 rounded-xl border border-slate-200 overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200 shadow-sm z-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
            <button
              onClick={() => scrollToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-1 hover:bg-white rounded disabled:opacity-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-slate-600" />
            </button>
            <span className="text-sm font-medium text-slate-600 px-2 min-w-[80px] text-center">
              Page {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => scrollToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-1 hover:bg-white rounded disabled:opacity-50 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </button>
          </div>

          <div className="h-6 w-px bg-slate-200" />

          <div className="flex items-center gap-1">
            <button
              onClick={handleZoomOut}
              className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-sm font-medium text-slate-600 min-w-[50px] text-center">
              {zoom}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors"
            title="Print"
          >
            <Printer className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>

      {/* PDF Content Area */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto bg-slate-200 p-8 text-center"
      >
        <div
          className="inline-block transition-transform duration-200 origin-top"
          style={{
            transform: `scale(${zoom / 100})`
          }}
        >
          {pages.map(page => (
            <div
              key={page}
              id={`pdf-page-${page}`}
              className="bg-white w-[800px] h-[1131px] mx-auto mb-8 shadow-lg relative text-left p-16 flex flex-col"
            >
              {/* Simulated Page Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-12 border-b-2 border-slate-100 pb-4">
                  <div>
                    <h2 className="text-slate-400 text-sm uppercase tracking-widest font-bold">
                      Universal Recovery Curriculum
                    </h2>
                    <p className="text-slate-300 text-xs mt-1">
                      Module 1: The PEER Model
                    </p>
                  </div>
                  <div className="text-slate-300 font-mono text-xl font-bold">
                    URC
                  </div>
                </div>

                {page === 1 ? (
                  <div className="flex flex-col items-center justify-center h-[600px] text-center">
                    <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                      The PEER Model:
                      <br />
                      Foundations of Recovery Support
                    </h1>
                    <div className="w-24 h-1 bg-blue-600 mb-8" />
                    <p className="text-xl text-slate-600 max-w-lg">
                      A comprehensive guide to building sustainable peer support
                      networks and fostering recovery capital.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-800">
                      Section {page - 1}: Core Concepts
                    </h3>
                    <div className="space-y-4 text-slate-600 leading-relaxed text-justify">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>

                      {page % 2 === 0 && (
                        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-500 my-8">
                          <h4 className="font-bold text-slate-900 mb-2">
                            Key Principle
                          </h4>
                          <p className="italic">
                            "Recovery is a process of change through which
                            individuals improve their health and wellness, live
                            a self-directed life, and strive to reach their full
                            potential."
                          </p>
                        </div>
                      )}

                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Page Footer */}
              <div className="mt-auto pt-8 border-t border-slate-100 flex justify-between items-center text-slate-400 text-sm">
                <span>© 2025 Universal Curricula</span>
                <span>Page {page}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
