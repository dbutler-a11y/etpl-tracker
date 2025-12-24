"use client";

import { Globe, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function LocationsSection() {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  const houstonLocations = [
    {
      id: 1,
      address: "11139 Homestead Rd",
      city: "Houston, TX 77016",
      lat: 29.8574,
      lng: -95.3195,
      mapX: 55, // percentage position on SVG map
      mapY: 42,
    },
    {
      id: 2,
      address: "9132 Pembrook St",
      city: "Houston, TX 77016",
      lat: 29.8521,
      lng: -95.3142,
      mapX: 58,
      mapY: 48,
    },
  ];

  return (
    <section id="locations" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How You'll Learn
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flexible learning options designed to fit your schedule and lifestyle
          </p>
        </div>

        {/* Primary Online Delivery */}
        <div className="mb-8">
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="default" className="text-xs sm:text-sm">
                      <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                      Online Delivery
                    </Badge>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                    Primarily delivered online - learn from anywhere
                  </h3>
                  <p className="text-gray-600">
                    Access your coursework and training materials from the comfort of your home
                    or any location with internet access. Our online platform provides a
                    seamless learning experience with recorded sessions, interactive modules,
                    and 24/7 resource availability.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* In-Person Support & Locations */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Houston Locations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                In-Person Support Available
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Need hands-on assistance? Visit us at our Houston locations:
              </p>
              <div className="space-y-4">
                {houstonLocations.map((location, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary/50 transition-colors"
                  >
                    <p className="font-semibold text-gray-900">{location.address}</p>
                    <p className="text-sm text-gray-600">{location.city}</p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        location.address + ", " + location.city
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline inline-flex items-center gap-1 mt-2"
                    >
                      Get directions
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Flexible Scheduling */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Flexible Scheduling Options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We understand you have commitments. That's why we offer:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Self-Paced Learning</p>
                    <p className="text-sm text-gray-600">
                      Complete modules on your own schedule
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Evening & Weekend Sessions</p>
                    <p className="text-sm text-gray-600">
                      Options for working professionals
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">No Fixed Class Times</p>
                    <p className="text-sm text-gray-600">
                      Access materials 24/7 at your convenience
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Service Map */}
        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Houston Service Area
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative h-80 sm:h-96 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
              {/* Grid lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Houston area outline (simplified) */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                {/* Service area circle */}
                <circle
                  cx="56"
                  cy="45"
                  r="25"
                  fill="rgba(59, 130, 246, 0.1)"
                  stroke="rgba(59, 130, 246, 0.4)"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                />
                <circle
                  cx="56"
                  cy="45"
                  r="35"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.2)"
                  strokeWidth="0.3"
                  strokeDasharray="4 4"
                />

                {/* Major roads representation */}
                <path
                  d="M 20 45 L 90 45"
                  stroke="rgba(148, 163, 184, 0.4)"
                  strokeWidth="0.8"
                  fill="none"
                />
                <path
                  d="M 56 10 L 56 90"
                  stroke="rgba(148, 163, 184, 0.4)"
                  strokeWidth="0.8"
                  fill="none"
                />
                <path
                  d="M 30 20 L 80 70"
                  stroke="rgba(148, 163, 184, 0.3)"
                  strokeWidth="0.5"
                  fill="none"
                />
                <path
                  d="M 30 70 L 80 20"
                  stroke="rgba(148, 163, 184, 0.3)"
                  strokeWidth="0.5"
                  fill="none"
                />

                {/* Downtown Houston marker */}
                <circle cx="56" cy="50" r="2" fill="rgba(148, 163, 184, 0.6)" />
                <text x="56" y="56" textAnchor="middle" fill="rgba(148, 163, 184, 0.8)" fontSize="3" fontFamily="system-ui">
                  Downtown
                </text>
              </svg>

              {/* Location markers */}
              {houstonLocations.map((location, index) => (
                <div
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-full cursor-pointer group"
                  style={{ left: `${location.mapX}%`, top: `${location.mapY}%` }}
                  onMouseEnter={() => setActiveLocation(location.id)}
                  onMouseLeave={() => setActiveLocation(null)}
                  onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(location.address + ", " + location.city)}`, '_blank')}
                >
                  {/* Pulse animation */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <div className={`w-8 h-8 rounded-full bg-primary/30 animate-ping ${activeLocation === location.id ? 'opacity-100' : 'opacity-50'}`} />
                  </div>

                  {/* Pin */}
                  <div className={`relative transition-transform duration-200 ${activeLocation === location.id ? 'scale-125' : 'scale-100'}`}>
                    <svg width="32" height="40" viewBox="0 0 32 40" fill="none" className="drop-shadow-lg">
                      <path
                        d="M16 0C7.16 0 0 7.16 0 16c0 12 16 24 16 24s16-12 16-24c0-8.84-7.16-16-16-16z"
                        fill={activeLocation === location.id ? "#3b82f6" : "#60a5fa"}
                      />
                      <circle cx="16" cy="14" r="6" fill="white" fillOpacity="0.9"/>
                      <text x="16" y="17" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">
                        {index + 1}
                      </text>
                    </svg>
                  </div>

                  {/* Tooltip */}
                  <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 transition-all duration-200 ${activeLocation === location.id ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="bg-white rounded-lg shadow-xl p-3 whitespace-nowrap border border-gray-200">
                      <p className="font-semibold text-gray-900 text-sm">{location.address}</p>
                      <p className="text-xs text-gray-500">{location.city}</p>
                      <p className="text-xs text-primary mt-1">Click for directions →</p>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                      <div className="border-8 border-transparent border-t-white" />
                    </div>
                  </div>
                </div>
              ))}

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200">
                <p className="text-xs font-semibold text-gray-700 mb-2">Training Locations</p>
                {houstonLocations.map((location, index) => (
                  <div
                    key={location.id}
                    className={`flex items-center gap-2 text-xs py-1 cursor-pointer transition-colors ${activeLocation === location.id ? 'text-primary' : 'text-gray-600'}`}
                    onMouseEnter={() => setActiveLocation(location.id)}
                    onMouseLeave={() => setActiveLocation(null)}
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold ${activeLocation === location.id ? 'bg-primary' : 'bg-blue-400'}`}>
                      {index + 1}
                    </div>
                    <span>{location.address}</span>
                  </div>
                ))}
              </div>

              {/* Service area badge */}
              <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white rounded-full px-4 py-2 text-sm font-medium shadow-lg">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Serving Greater Houston
                </span>
              </div>

              {/* Decorative glows */}
              <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
