'use client'
import React, { useState, useEffect, FormEvent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from 'recharts';
import { Eye, Users, Clock, LayoutList } from 'lucide-react';

interface AnalyticsEvent {
  page: string;
  userAgent: string;
  referrer: string;
  timestamp: number;
  sessionId: string;
  sessionDuration?: number;
  ip: string;
  device: string;
  browser: string;
  eventType?: 'page_view' | 'section_view';
  section?: string;
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

const SECTION_ORDER = [
  'Hero',
  'About',
  'Impact Numbers',
  'Featured Work',
  'Career Timeline',
  'How I Work',
  'Education',
  'Contact',
]

export default function AnalyticsPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);

  useEffect(() => {
    fetch('/api/analytics/auth')
      .then(res => {
        if (res.ok) {
          setAuthenticated(true);
          loadData();
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const loadData = async () => {
    const res = await fetch('/api/analytics');
    if (res.ok) {
      const data = await res.json();
      setEvents(data.events || []);
    }
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    const res = await fetch('/api/analytics/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setAuthenticated(true);
      loadData();
    } else {
      setError('Invalid password');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="text-slate-400">Loading...</div>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
        <form onSubmit={handleLogin} className="bg-slate-900 rounded-xl p-8 w-full max-w-sm shadow-2xl">
          <h1 className="text-xl font-bold text-white mb-6">Analytics Dashboard</h1>
          <label htmlFor="password" className="block text-sm text-slate-400 mb-2">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            autoFocus
          />
          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }

  const pageViews   = events.filter(e => e.eventType !== 'section_view');
  const sectionViews = events.filter(e => e.eventType === 'section_view' && e.section);

  // Views by IP
  const ipCounts: Record<string, number> = {};
  pageViews.forEach(e => { ipCounts[e.ip] = (ipCounts[e.ip] || 0) + 1; });
  const ipData = Object.entries(ipCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .map(([ip, count]) => ({ ip: ip.length > 18 ? ip.slice(0, 15) + '...' : ip, views: count }));

  // Device breakdown
  const deviceCounts: Record<string, number> = {};
  pageViews.forEach(e => { deviceCounts[e.device] = (deviceCounts[e.device] || 0) + 1; });
  const deviceData = Object.entries(deviceCounts).map(([name, value]) => ({ name, value }));

  // Session length distribution
  const sessionsWithDuration = events.filter(e => e.sessionDuration && e.sessionDuration > 0);
  const sessionBuckets: Record<string, number> = {
    '0-10s': 0, '10-30s': 0, '30-60s': 0, '1-3m': 0, '3-10m': 0, '10m+': 0,
  };
  sessionsWithDuration.forEach(e => {
    const d = e.sessionDuration!;
    if (d <= 10)       sessionBuckets['0-10s']++;
    else if (d <= 30)  sessionBuckets['10-30s']++;
    else if (d <= 60)  sessionBuckets['30-60s']++;
    else if (d <= 180) sessionBuckets['1-3m']++;
    else if (d <= 600) sessionBuckets['3-10m']++;
    else               sessionBuckets['10m+']++;
  });
  const sessionData = Object.entries(sessionBuckets).map(([range, count]) => ({ range, count }));

  // Section view counts ordered by page position
  const sectionCounts: Record<string, number> = {};
  sectionViews.forEach(e => {
    if (e.section) sectionCounts[e.section] = (sectionCounts[e.section] || 0) + 1;
  });
  const sectionData = SECTION_ORDER
    .filter(s => sectionCounts[s] !== undefined)
    .map(s => ({ section: s, views: sectionCounts[s] }));

  // Drop-off: what % of page viewers reached each section
  const totalPageViews = pageViews.length;
  const sectionDropoff = SECTION_ORDER
    .filter(s => sectionCounts[s] !== undefined)
    .map(s => ({
      section: s,
      pct: totalPageViews > 0 ? Math.round((sectionCounts[s] / totalPageViews) * 100) : 0,
    }));

  // Summary stats
  const totalViews  = pageViews.length;
  const uniqueIPs   = Object.keys(ipCounts).length;
  const avgSession  = sessionsWithDuration.length > 0
    ? Math.round(sessionsWithDuration.reduce((sum, e) => sum + e.sessionDuration!, 0) / sessionsWithDuration.length)
    : 0;
  const totalSectionViews = sectionViews.length;

  const formatDuration = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`;
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <StatCard icon={<Eye className="w-5 h-5" />}        label="Total Views"       value={totalViews.toString()} />
          <StatCard icon={<Users className="w-5 h-5" />}      label="Unique Visitors"   value={uniqueIPs.toString()} />
          <StatCard icon={<Clock className="w-5 h-5" />}      label="Avg Session"       value={formatDuration(avgSession)} />
          <StatCard icon={<LayoutList className="w-5 h-5" />} label="Section Views"     value={totalSectionViews.toString()} />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Section Engagement */}
          <div className="bg-slate-900 rounded-xl p-6 lg:col-span-2">
            <h2 className="text-lg font-semibold mb-1">Section Engagement</h2>
            <p className="text-slate-500 text-sm mb-4">Visitors who spent 3+ seconds on each section</p>
            {sectionData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={sectionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="section" stroke="#94a3b8" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: 8 }} />
                  <Bar dataKey="views" fill="#d97706" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <EmptyState />
            )}
          </div>

          {/* Section Drop-off */}
          <div className="bg-slate-900 rounded-xl p-6 lg:col-span-2">
            <h2 className="text-lg font-semibold mb-1">Section Reach</h2>
            <p className="text-slate-500 text-sm mb-4">Percentage of page visitors who reached each section</p>
            {sectionDropoff.length > 0 ? (
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={sectionDropoff}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="section" stroke="#94a3b8" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#94a3b8" unit="%" domain={[0, 100]} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: 8 }}
                    formatter={(v: number) => [`${v}%`, 'Reached']}
                  />
                  <Bar dataKey="pct" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <EmptyState />
            )}
          </div>

          {/* Views by IP */}
          <div className="bg-slate-900 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Views by IP</h2>
            {ipData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ipData} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis type="number" stroke="#94a3b8" />
                  <YAxis dataKey="ip" type="category" stroke="#94a3b8" width={120} tick={{ fontSize: 12 }} />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: 8 }} />
                  <Bar dataKey="views" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <EmptyState />
            )}
          </div>

          {/* Device Breakdown */}
          <div className="bg-slate-900 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Device Breakdown</h2>
            {deviceData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={deviceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={4}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {deviceData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: 8 }} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <EmptyState />
            )}
          </div>

          {/* Session Length Distribution */}
          <div className="bg-slate-900 rounded-xl p-6 lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Session Length Distribution</h2>
            {sessionsWithDuration.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={sessionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="range" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: 8 }} />
                  <Bar dataKey="count" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <EmptyState />
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-slate-900 rounded-xl p-5">
      <div className="flex items-center gap-2 text-slate-400 mb-2">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}

function EmptyState() {
  return <p className="text-slate-500 text-sm py-12 text-center">No data yet</p>;
}