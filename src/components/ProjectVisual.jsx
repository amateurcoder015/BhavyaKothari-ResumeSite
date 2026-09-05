import React, { useState } from 'react';
import { TrendingUp, ShieldAlert, Cpu, Activity, Zap, CheckCircle2, ArrowRight, DollarSign } from 'lucide-react';

export default function ProjectVisual({ type, project }) {
  // State for SIP Calculator visual interaction
  const [sipAmount, setSipAmount] = useState(15000);
  const [years, setYears] = useState(5);
  const expectedRate = 0.15; // 15% CAGR

  // State for DCF sensitivity visual
  const [selectedWacc, setSelectedWacc] = useState(10.5);
  const [selectedGrowth, setSelectedGrowth] = useState(3.5);

  // State for Yield Curve visual
  const [rateShift, setRateShift] = useState(0);

  if (type === 'sip_chart') {
    const totalMonths = years * 12;
    const monthlyRate = expectedRate / 12;
    const totalInvested = sipAmount * totalMonths;
    const estimatedValue = Math.round(
      sipAmount * (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate))
    );
    const benchmarkValue = Math.round(estimatedValue * 0.84); // Nifty benchmark relative
    const alphaGain = estimatedValue - benchmarkValue;

    return (
      <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-b from-[#121212] to-[#0a0a0a] rounded-2xl border border-white/10 relative overflow-hidden font-mono text-xs">
        {/* Background glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-[11px]">SIP & Benchmark Engine</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px]">
            XIRR: 18.4%
          </span>
        </div>

        {/* Interactive Controls */}
        <div className="grid grid-cols-2 gap-3 my-3 z-10 bg-white/[0.02] p-3 rounded-xl border border-white/5">
          <div>
            <div className="flex justify-between text-gray-400 text-[10px] mb-1">
              <span>Monthly SIP</span>
              <span className="text-white font-bold">₹{sipAmount.toLocaleString('en-IN')}</span>
            </div>
            <input 
              type="range" 
              min="5000" 
              max="50000" 
              step="2500" 
              value={sipAmount} 
              onChange={(e) => setSipAmount(Number(e.target.value))}
              className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>
          <div>
            <div className="flex justify-between text-gray-400 text-[10px] mb-1">
              <span>Tenure</span>
              <span className="text-white font-bold">{years} Years</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="10" 
              step="1" 
              value={years} 
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>
        </div>

        {/* Visual Simulated SVG Growth Curve */}
        <div className="relative h-28 my-1 flex items-end justify-between px-2">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
            <div className="w-full border-b border-white" />
            <div className="w-full border-b border-white" />
            <div className="w-full border-b border-white" />
          </div>

          <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
            {/* Invested principal baseline */}
            <path d="M 0 90 L 100 65" fill="none" stroke="#4b5563" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* Nifty Benchmark Curve */}
            <path d="M 0 90 Q 50 75 100 35" fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.6" />
            {/* Strategy Alpha Curve */}
            <path d="M 0 90 Q 50 65 100 15" fill="none" stroke="#3b82f6" strokeWidth="3" />
          </svg>

          {/* Floating Data Markers */}
          <div className="z-10 flex flex-col items-start bg-[#181818]/90 backdrop-blur border border-blue-500/30 p-2 rounded-lg text-[10px] shadow-lg">
            <span className="text-gray-400">Total Outlay</span>
            <span className="text-white font-bold">₹{(totalInvested / 100000).toFixed(2)} Lakhs</span>
          </div>

          <div className="z-10 flex flex-col items-end bg-blue-950/80 backdrop-blur border border-blue-500/40 p-2 rounded-lg text-[10px] shadow-lg">
            <span className="text-blue-300 font-semibold">Corpus (Est.)</span>
            <span className="text-emerald-400 font-bold text-xs">₹{(estimatedValue / 100000).toFixed(2)} L</span>
            <span className="text-[9px] text-blue-300/80">+₹{(alphaGain / 100000).toFixed(2)} L Alpha vs Index</span>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="flex items-center justify-between text-[10px] text-gray-400 pt-2 border-t border-white/5 z-10">
          <span>CAGR: <strong className="text-emerald-400">15.0%</strong></span>
          <span>Sharpe: <strong className="text-blue-400">1.82</strong></span>
          <span>Benchmark: <strong className="text-gray-300">Nifty 50 TRI</strong></span>
        </div>
      </div>
    );
  }

  if (type === 'yield_curve') {
    return (
      <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-b from-[#121212] to-[#080d09] rounded-2xl border border-emerald-500/20 relative overflow-hidden font-mono text-xs">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-semibold uppercase text-[11px]">Fixed Income Risk Engine</span>
          </div>
          <span className="text-emerald-300/80 text-[10px]">Duration: 4.85 yrs</span>
        </div>

        {/* Shift Controller */}
        <div className="my-2 z-10 bg-emerald-950/20 p-2.5 rounded-xl border border-emerald-500/10">
          <div className="flex justify-between text-[10px] text-gray-400 mb-1">
            <span>RBI Rate Shift Scenario</span>
            <span className="text-emerald-400 font-bold">{rateShift > 0 ? `+${rateShift}` : rateShift} bps</span>
          </div>
          <input 
            type="range" 
            min="-100" 
            max="100" 
            step="25" 
            value={rateShift} 
            onChange={(e) => setRateShift(Number(e.target.value))}
            className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>

        {/* Yield Curve SVG Graph */}
        <div className="relative h-28 my-1 flex items-center justify-center">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50">
            {/* Zero Axis */}
            <line x1="0" y1="45" x2="100" y2="45" stroke="#374151" strokeWidth="1" />
            
            {/* Baseline Yield Curve */}
            <path 
              d="M 5 40 Q 30 20, 95 12" 
              fill="none" 
              stroke="#059669" 
              strokeWidth="2" 
              strokeDasharray="2 2"
              opacity="0.5" 
            />

            {/* Shifted Curve */}
            <path 
              d={`M 5 ${40 - rateShift * 0.1} Q 30 ${20 - rateShift * 0.1}, 95 ${12 - rateShift * 0.1}`} 
              fill="none" 
              stroke="#10b981" 
              strokeWidth="3" 
            />
          </svg>

          <div className="absolute top-2 right-2 bg-[#0d1611]/90 border border-emerald-500/30 p-2 rounded text-[10px]">
            <div className="text-gray-400">Price Sensitivity</div>
            <div className="text-emerald-400 font-bold">
              {rateShift === 0 ? "Baseline" : `${(-rateShift * 0.0485).toFixed(2)}% Delta`}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1 text-center text-[10px] pt-2 border-t border-white/5 text-gray-400 z-10">
          <div>YTM: <span className="text-white font-bold">7.15%</span></div>
          <div>Convexity: <span className="text-emerald-400 font-bold">0.24</span></div>
          <div>Spread: <span className="text-white font-bold">45 bps</span></div>
        </div>
      </div>
    );
  }

  if (type === 'dcf_matrix') {
    const waccValues = [9.5, 10.0, 10.5, 11.0];
    const growthValues = [2.5, 3.0, 3.5, 4.0];

    const getValuation = (wacc, growth) => {
      const base = 420;
      const diffWacc = (10.5 - wacc) * 45;
      const diffGrowth = (growth - 3.5) * 35;
      return Math.round(base + diffWacc + diffGrowth);
    };

    return (
      <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-b from-[#121212] to-[#0a0f0d] rounded-2xl border border-white/10 relative overflow-hidden font-mono text-xs">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-emerald-400 font-semibold uppercase text-[11px]">DCF Valuation Sensitivity</span>
          </div>
          <span className="text-gray-400 text-[10px]">Fair Value: <strong className="text-emerald-400">₹420.50</strong></span>
        </div>

        <div className="my-2 z-10">
          <div className="text-[10px] text-gray-400 mb-1.5 flex justify-between">
            <span>Dynamic Matrix (WACC vs Terminal Growth)</span>
            <span className="text-emerald-400">Selected: ₹{getValuation(selectedWacc, selectedGrowth)}</span>
          </div>

          <div className="grid grid-cols-5 gap-1 text-[10px]">
            <div className="p-1 text-gray-500 text-center font-bold">g \ WACC</div>
            {waccValues.map((w) => (
              <div key={w} className={`p-1 text-center font-bold rounded ${selectedWacc === w ? 'bg-emerald-500/20 text-emerald-300' : 'text-gray-400'}`}>
                {w}%
              </div>
            ))}

            {growthValues.map((g) => (
              <React.Fragment key={g}>
                <div className={`p-1 text-center font-bold rounded ${selectedGrowth === g ? 'bg-emerald-500/20 text-emerald-300' : 'text-gray-400'}`}>
                  {g}%
                </div>
                {waccValues.map((w) => {
                  const val = getValuation(w, g);
                  const isSelected = selectedWacc === w && selectedGrowth === g;
                  return (
                    <button
                      key={`${w}-${g}`}
                      onClick={() => { setSelectedWacc(w); setSelectedGrowth(g); }}
                      className={`p-1.5 rounded transition-all text-center ${
                        isSelected 
                          ? 'bg-emerald-500 text-black font-bold scale-105 shadow-md shadow-emerald-500/30' 
                          : 'bg-white/[0.03] text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      ₹{val}
                    </button>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-gray-400 pt-2 border-t border-white/5 z-10">
          <span>FCFF 10-Yr CAGR: <strong className="text-white">12.8%</strong></span>
          <span>Terminal Growth: <strong className="text-emerald-400">{selectedGrowth}%</strong></span>
        </div>
      </div>
    );
  }

  if (type === 'ai_network') {
    return (
      <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-b from-[#121212] to-[#0f0914] rounded-2xl border border-purple-500/20 relative overflow-hidden font-mono text-xs">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
            <span className="text-purple-400 font-semibold uppercase text-[11px]">Multi-Agent Self-Healing AI</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[10px]">
            ● ACTIVE
          </span>
        </div>

        {/* Node Network Map */}
        <div className="relative h-32 my-2 flex items-center justify-around px-4">
          <div className="flex flex-col items-center gap-1 z-10">
            <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-lg shadow-purple-500/20 animate-pulse">
              <ShieldAlert className="w-5 h-5 text-amber-400" />
            </div>
            <span className="text-[10px] text-gray-400">Monitor Agent</span>
            <span className="text-[9px] text-amber-300 font-bold">API Latency 404</span>
          </div>

          <div className="flex-1 h-[2px] bg-gradient-to-r from-amber-500/50 via-purple-500 to-emerald-500 relative mx-2">
            <div className="w-2 h-2 rounded-full bg-purple-400 absolute top-1/2 -translate-y-1/2 animate-shimmer" />
          </div>

          <div className="flex flex-col items-center gap-1 z-10">
            <div className="w-10 h-10 rounded-xl bg-purple-900/80 border border-purple-400 flex items-center justify-center text-white shadow-xl shadow-purple-500/30">
              <Cpu className="w-5 h-5 text-purple-300" />
            </div>
            <span className="text-[10px] text-purple-200 font-bold">Diagnostic Agent</span>
            <span className="text-[9px] text-purple-300">Reroute Microservice</span>
          </div>

          <div className="flex-1 h-[2px] bg-gradient-to-r from-purple-500 to-emerald-500 relative mx-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 absolute top-1/2 -translate-y-1/2" />
          </div>

          <div className="flex flex-col items-center gap-1 z-10">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="text-[10px] text-gray-400">Healing Agent</span>
            <span className="text-[9px] text-emerald-400 font-bold">State Restored</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-gray-400 pt-2 border-t border-white/5 z-10">
          <span>MTTR Reduction: <strong className="text-purple-300">-84%</strong></span>
          <span>Success Rate: <strong className="text-emerald-400">99.4%</strong></span>
        </div>
      </div>
    );
  }

  if (type === 'bert_nlp') {
    return (
      <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-b from-[#121212] to-[#110a18] rounded-2xl border border-purple-500/20 relative overflow-hidden font-mono text-xs">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span className="text-purple-300 font-semibold uppercase text-[11px]">BERT Threat Token Attribution</span>
          </div>
          <span className="text-purple-400 font-bold text-[10px]">SHAP Confidence: 99.2%</span>
        </div>

        <div className="my-3 z-10 bg-black/40 p-3 rounded-xl border border-white/5 space-y-2">
          <div className="text-[10px] text-gray-400">Sample Text Token Analysis:</div>
          <div className="flex flex-wrap gap-1 text-[11px] leading-relaxed">
            <span className="px-1.5 py-0.5 rounded bg-white/5 text-gray-300">Urgent:</span>
            <span className="px-1.5 py-0.5 rounded bg-purple-500/30 text-purple-200 border border-purple-500/40 font-bold">Verify</span>
            <span className="px-1.5 py-0.5 rounded bg-white/5 text-gray-300">your</span>
            <span className="px-1.5 py-0.5 rounded bg-purple-600/40 text-purple-100 border border-purple-400 font-bold shadow-sm shadow-purple-500/30">account credentials</span>
            <span className="px-1.5 py-0.5 rounded bg-white/5 text-gray-300">immediately</span>
            <span className="px-1.5 py-0.5 rounded bg-purple-500/30 text-purple-200 border border-purple-500/40 font-bold">click here</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-gray-400 pt-2 border-t border-white/5 z-10">
          <span>Model: <strong className="text-purple-300">BERT-base-uncased</strong></span>
          <span>Classification: <strong className="text-purple-400">PHISHING / HIGH RISK</strong></span>
        </div>
      </div>
    );
  }

  // Default Matcha Platform Visual
  return (
    <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-b from-[#121212] to-[#090d14] rounded-2xl border border-blue-500/20 relative overflow-hidden font-mono text-xs">
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-blue-400 font-semibold uppercase text-[11px]">Matcha Creator Platform</span>
        </div>
        <span className="text-blue-300 text-[10px]">Dual Opt-in Match</span>
      </div>

      <div className="my-2 z-10 bg-blue-950/30 p-3 rounded-xl border border-blue-500/20 flex items-center justify-between">
        <div>
          <div className="text-gray-400 text-[10px]">Campaign Budget</div>
          <div className="text-emerald-400 font-extrabold text-sm">$4,500 Payout</div>
        </div>
        <div className="flex items-center gap-1 bg-blue-500 text-white px-2.5 py-1 rounded-lg font-bold text-[10px]">
          <span>MATCHED</span>
          <CheckCircle2 className="w-3 h-3" />
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-gray-400 pt-2 border-t border-white/5 z-10">
        <span>Payout Transparency: <strong className="text-emerald-400">100%</strong></span>
        <span>Realtime Chat: <strong className="text-blue-300">Unlocked</strong></span>
      </div>
    </div>
  );
}
