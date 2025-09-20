"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface IPhoneXRMockupProps {
  children?: React.ReactNode
  className?: string
  screenContent?: React.ReactNode
}

export function IPhoneXRMockup({ children, className, screenContent }: IPhoneXRMockupProps) {
  return (
    <div
      className={cn("flex items-center justify-center p-8 min-h-screen", className)}
      style={{ perspective: "1200px" }}
    >
      {/* iPhone XR Frame */}
      <div className="relative transform-gpu">
        {/* Enhanced 3D Shadow */}
        <div className="absolute inset-0 bg-gray-900/30 rounded-[3rem] blur-2xl transform translate-y-8 translate-x-4 scale-110" />
        <div className="absolute inset-0 bg-gray-900/20 rounded-[3rem] blur-xl transform translate-y-12 translate-x-6 scale-115" />
        <div className="absolute inset-0 bg-gray-900/10 rounded-[3rem] blur-3xl transform translate-y-16 translate-x-8 scale-120" />

        {/* Main Device Body */}
        <div
          className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[3rem] p-2 shadow-2xl transform-gpu transition-all duration-700 ease-out hover:scale-105"
          style={{
            transform: "rotateX(-5deg) rotateY(15deg) rotateZ(2deg)",
            transformStyle: "preserve-3d",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1.05)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "rotateX(-5deg) rotateY(15deg) rotateZ(2deg)"
          }}
        >
          <div className="bg-black rounded-[2.5rem] p-1 shadow-inner" style={{ transform: "translateZ(2px)" }}>
            {/* Screen Container */}
            <div
              className="relative bg-gradient-to-br from-card via-card to-card/95 rounded-[2.25rem] overflow-hidden shadow-inner"
              style={{
                aspectRatio: "9/19.5",
                transform: "translateZ(4px)",
                boxShadow: "inset 0 0 20px rgba(0,0,0,0.3), 0 0 40px rgba(255,255,255,0.1)",
              }}
            >
              {/* Notch */}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10"
                style={{ transform: "translateX(-50%) translateZ(6px)" }}
              >
                <div className="bg-gradient-to-b from-black to-gray-900 rounded-b-2xl px-6 py-1 flex items-center justify-center shadow-lg">
                  <div className="w-12 h-1 bg-gray-700 rounded-full mr-2" />
                  <div className="w-3 h-3 bg-gray-700 rounded-full" />
                </div>
              </div>

              {/* Status Bar */}
              <div
                className="absolute top-0 left-0 right-0 z-20 pt-8 pb-2 px-6 bg-gradient-to-b from-card to-transparent"
                style={{ transform: "translateZ(5px)" }}
              >
                <div className="flex justify-between items-center text-xs font-medium text-card-foreground">
                  <span>9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 border border-card-foreground rounded-sm">
                      <div className="w-3 h-1 bg-card-foreground rounded-sm m-0.5" />
                    </div>
                    <div className="w-1 h-2 bg-card-foreground rounded-full" />
                    <div className="w-6 h-3 border border-card-foreground rounded-sm">
                      <div className="w-4 h-1 bg-green-500 rounded-sm m-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Screen Content */}
              <div className="h-full w-full pt-16 pb-8" style={{ transform: "translateZ(3px)" }}>
                {screenContent || children || (
                  <div className="h-full flex flex-col bg-gradient-to-br from-red-900 via-red-800 to-black relative overflow-hidden">
                    {/* Header */}
                    <div className="flex justify-between items-center p-4 bg-black/20 backdrop-blur-sm">
                      <h1 className="text-white text-lg font-bold">Sneakers.co</h1>
                      <div className="flex items-center space-x-3">
                        <span className="text-white text-sm">Shop</span>
                        <div className="relative">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
                            />
                          </svg>
                          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                            0
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">M</span>
                          </div>
                          <span className="text-white text-xs">Muhamad Yoga</span>
                        </div>
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
                      {/* Sneaker Image */}
                      <div className="relative mb-6 transform rotate-12 hover:rotate-6 transition-transform duration-500">
                        <Image
                          src="/jordan-low.png"
                          alt="Jordan Retro X-1"
                          className="w-80 h-52 object-contain drop-shadow-2xl"
                            width={192}
                            height={128}
                        />
                      </div>

                      {/* Product Title */}
                      <div className="text-center space-y-2">
                        <h2 className="text-white text-4xl font-bold tracking-wider">Jordan</h2>
                        <h3 className="text-white/90 text-2xl font-light tracking-widest">Retro Low OG</h3>
                      </div>

                      {/* Navigation Arrows */}
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                      </div>

                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="p-4 space-y-3">
                      <button className="w-full bg-white text-black py-3 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                        Add to Cart
                      </button>
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-white/20 backdrop-blur-sm text-white py-2 px-4 rounded-xl font-medium hover:bg-white/30 transition-colors">
                          Wishlist
                        </button>
                        <button className="flex-1 bg-white/20 backdrop-blur-sm text-white py-2 px-4 rounded-xl font-medium hover:bg-white/30 transition-colors">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Home Indicator */}
              <div
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
                style={{ transform: "translateX(-50%) translateZ(5px)" }}
              >
                <div className="w-32 h-1 bg-gray-400 rounded-full shadow-sm" />
              </div>
            </div>
          </div>

          {/* Side Buttons */}
          <div
            className="absolute left-0 top-20 w-1 h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded-r-full shadow-lg"
            style={{ transform: "translateZ(8px) rotateY(-10deg)" }}
          />
          <div
            className="absolute left-0 top-32 w-1 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-r-full shadow-lg"
            style={{ transform: "translateZ(8px) rotateY(-10deg)" }}
          />
          <div
            className="absolute left-0 top-48 w-1 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-r-full shadow-lg"
            style={{ transform: "translateZ(8px) rotateY(-10deg)" }}
          />
          <div
            className="absolute right-0 top-32 w-1 h-16 bg-gradient-to-l from-gray-600 to-gray-800 rounded-l-full shadow-lg"
            style={{ transform: "translateZ(8px) rotateY(10deg)" }}
          />
        </div>
      </div>
    </div>
  )
}
