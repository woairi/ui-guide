import React, { useState } from 'react';
import {
  Layout,
  Box,
  Layers,
  Grid,
  Activity,
  Search,
  Bell,
  User,
  ArrowRight,
  BarChart2,
  PieChart,
  Settings,
  MoreHorizontal,
  CreditCard,
  Zap,
  CheckCircle2,
  AlertCircle,
  Menu,
  ChevronRight,
  ToggleRight,
  Type,
  Maximize2,
  Droplet,
  Command,
  Monitor,
  Palette
} from 'lucide-react';

// --- 1. Modern Minimalism (Tailwind Clean) ---
const ModernMinimalism = () => (
  <div className="p-8 bg-gray-50 rounded-xl h-full flex flex-col items-center justify-center">
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
              <User size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">내 프로필</h3>
              <p className="text-sm text-gray-500">Personal Account</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <Settings size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <CreditCard size={18} className="text-gray-700" />
              </div>
              <span className="text-sm font-medium text-gray-700">구독 플랜</span>
            </div>
            <span className="text-sm font-bold text-gray-900">$24.00</span>
          </div>
        </div>

        <button className="w-full mt-6 bg-gray-900 text-white py-3 rounded-xl font-medium text-sm hover:bg-gray-800 transition-colors">
          플랜 업그레이드
        </button>
      </div>
    </div>
    <p className="mt-4 text-sm text-gray-500 text-center">
      여백을 충분히 활용하고, 옅은 그림자와 경계선으로 깔끔함을 강조합니다.
    </p>
  </div>
);

// --- 2. Glassmorphism ---
const Glassmorphism = () => (
  <div className="p-8 h-full flex flex-col items-center justify-center rounded-xl relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"></div>
    <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute top-10 right-10 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

    <div className="relative w-full max-w-sm bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-xl text-white">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-2xl font-bold">Glass UI</h2>
          <p className="text-white/70 text-sm">Premium Design</p>
        </div>
        <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
          <Zap size={20} className="text-yellow-300" />
        </div>
      </div>

      <div className="space-y-3">
        <div className="h-2 bg-white/20 rounded-full w-3/4"></div>
        <div className="h-2 bg-white/20 rounded-full w-1/2"></div>
      </div>

      <div className="mt-8 flex gap-3">
        <button className="flex-1 bg-white/30 hover:bg-white/40 border border-white/40 text-white py-2 rounded-lg text-sm font-medium transition-all backdrop-blur-md">
          Decline
        </button>
        <button className="flex-1 bg-white text-purple-600 py-2 rounded-lg text-sm font-bold shadow-lg hover:shadow-xl transition-all">
          Accept
        </button>
      </div>
    </div>
    <p className="mt-4 text-sm text-white/90 text-center relative z-10 font-medium">
      배경 블러(Backdrop blur)와 반투명한 레이어를 사용하여 깊이감을 줍니다.
    </p>
  </div>
);

// --- 3. Neo-Brutalism ---
const NeoBrutalism = () => (
  <div className="p-8 bg-[#f0f0f0] rounded-xl h-full flex flex-col items-center justify-center font-mono">
    <div className="w-full max-w-sm bg-[#FFDE59] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
      <div className="flex justify-between items-center border-b-4 border-black pb-4 mb-4">
        <h2 className="text-2xl font-black uppercase tracking-tighter">Warning</h2>
        <AlertCircle size={32} strokeWidth={2.5} />
      </div>

      <p className="font-bold text-lg mb-6 leading-tight">
        이 스타일은 매우 강렬합니다. 사용자의 시선을 확실하게 사로잡습니다.
      </p>

      <div className="flex gap-4">
        <button className="flex-1 bg-[#FF5757] border-2 border-black p-3 font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
          NO
        </button>
        <button className="flex-1 bg-[#5CE1E6] border-2 border-black p-3 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
          YES
        </button>
      </div>
    </div>
    <p className="mt-6 text-sm font-bold text-black text-center bg-white border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      고대비 색상, 굵은 테두리, 하드 섀도우가 특징입니다.
    </p>
  </div>
);

// --- 4. Fluent Design (Microsoft) ---
const FluentDesign = () => (
  <div className="p-8 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center rounded-xl h-full flex flex-col items-center justify-center">
    {/* Acrylic-like Panel */}
    <div className="w-full max-w-sm bg-white/70 backdrop-blur-md border border-white/50 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-1">System Update</h2>
      <p className="text-sm text-gray-600 mb-6">Windows is ready to install updates.</p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-300 h-1 rounded-full mb-6 overflow-hidden">
        <div className="bg-blue-600 h-full w-2/3 rounded-full"></div>
      </div>

      <div className="flex flex-col gap-3">
        {/* Fluent Button: Subtle elevation, clean borders */}
        <button className="w-full bg-white/80 hover:bg-white border border-gray-300 text-gray-800 py-2 rounded-md shadow-sm text-sm font-medium transition-all">
          Schedule for later
        </button>
        <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md shadow-md text-sm font-medium transition-all">
          Restart now
        </button>
      </div>
    </div>
    <p className="mt-4 text-sm text-white drop-shadow-md text-center font-medium">
      아크릴(Acrylic) 소재, 깊이감(Depth), 부드러운 그림자. B2B 및 데스크톱 앱에 적합.
    </p>
  </div>
);

// --- 5. iOS Human Interface ---
const IOSStyle = () => (
  <div className="p-8 bg-gray-100 rounded-xl h-full flex flex-col items-center justify-center">
    <div className="w-full max-w-[320px] bg-white rounded-[40px] shadow-xl overflow-hidden border border-gray-200">
      {/* iOS Header */}
      <div className="bg-gray-50/90 backdrop-blur-xl px-6 pt-12 pb-2 border-b border-gray-200 sticky top-0 z-10">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Settings</h2>
      </div>

      {/* iOS List Group */}
      <div className="p-4 bg-gray-100 space-y-6">
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-100 active:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-blue-500 rounded-md flex items-center justify-center text-white">
                <Monitor size={16} />
              </div>
              <span className="text-[17px] text-gray-900">Display</span>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </div>
          <div className="flex items-center justify-between p-4 active:bg-gray-50 cursor-pointer">
             <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-green-500 rounded-md flex items-center justify-center text-white">
                <Bell size={16} />
              </div>
              <span className="text-[17px] text-gray-900">Notifications</span>
            </div>
             <ChevronRight size={18} className="text-gray-400" />
          </div>
        </div>

        {/* Toggle Section */}
        <div className="bg-white rounded-2xl p-4 flex items-center justify-between">
           <span className="text-[17px] text-gray-900">Airplane Mode</span>
           <div className="w-12 h-7 bg-green-500 rounded-full relative shadow-inner cursor-pointer">
             <div className="absolute right-0.5 top-0.5 w-6 h-6 bg-white rounded-full shadow-sm"></div>
           </div>
        </div>
      </div>
    </div>
    <p className="mt-4 text-sm text-gray-500 text-center">
      둥근 모서리, 명확한 타이포그래피, 네이티브 앱 같은 친숙함.
    </p>
  </div>
);

// --- 6. Ant Design (Enterprise) ---
const AntDesignStyle = () => (
  <div className="p-8 bg-gray-50 rounded-xl h-full flex flex-col items-center justify-center">
    <div className="w-full max-w-lg bg-white border border-gray-200 shadow-sm text-sm">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
        <h3 className="font-medium text-gray-800">사용자 목록 관리</h3>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded-sm hover:border-blue-400 hover:text-blue-500 transition-colors text-xs">
            필터 설정
          </button>
          <button className="px-3 py-1 bg-[#1677ff] text-white rounded-sm hover:bg-[#4096ff] transition-colors text-xs shadow-sm">
            + 신규 등록
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white">
        <div className="grid grid-cols-12 gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100 text-xs font-medium text-gray-500">
          <div className="col-span-1"><input type="checkbox" className="rounded-sm border-gray-300" /></div>
          <div className="col-span-3">User Name</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-4">Last Login</div>
          <div className="col-span-2 text-right">Action</div>
        </div>

        {[1, 2, 3].map((item) => (
          <div key={item} className="grid grid-cols-12 gap-2 px-4 py-3 items-center border-b border-gray-50 hover:bg-[#e6f4ff] transition-colors text-gray-700">
            <div className="col-span-1"><input type="checkbox" className="rounded-sm border-gray-300" /></div>
            <div className="col-span-3 text-[#1677ff] cursor-pointer hover:opacity-80">User_240{item}</div>
            <div className="col-span-2">
              <span className={`px-2 py-0.5 rounded-[2px] text-[11px] border ${item === 2 ? 'bg-[#fff1f0] text-[#cf1322] border-[#ffa39e]' : 'bg-[#f6ffed] text-[#389e0d] border-[#b7eb8f]'}`}>
                {item === 2 ? 'Error' : 'Success'}
              </span>
            </div>
            <div className="col-span-4 text-xs text-gray-400 font-mono">2024-01-15 10:23</div>
            <div className="col-span-2 text-right text-[#1677ff] text-xs cursor-pointer hover:underline">
              Edit
            </div>
          </div>
        ))}
      </div>
    </div>
    <p className="mt-4 text-xs text-gray-500 text-center">
      데이터 중심, 고밀도(Compact), 기능적 색상. 관리자/ERP 시스템에 최적.
    </p>
  </div>
);

// --- 7. Tailwind System (Token Based) ---
const TailwindSystem = () => (
  <div className="p-8 bg-slate-50 rounded-xl h-full flex flex-col items-center justify-center">
    <div className="w-full max-w-sm space-y-6">
      {/* Design Tokens Showcase */}
      <div className="flex gap-2 mb-4">
        <div className="h-8 w-8 rounded bg-primary shadow-sm" title="Primary"></div>
        <div className="h-8 w-8 rounded bg-secondary shadow-sm" title="Secondary"></div>
        <div className="h-8 w-8 rounded bg-accent shadow-sm" title="Accent"></div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
            <Command className="w-5 h-5 text-slate-900" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Custom Component</h3>
            <p className="text-xs text-slate-500">Built with utility tokens</p>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-xs font-medium text-slate-700">Email Address</label>
          <input type="text" placeholder="name@example.com" className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all" />

          <button className="w-full bg-slate-900 text-white py-2.5 rounded-md text-sm font-medium hover:bg-slate-800 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-all">
            Sign In with Token
          </button>
        </div>
      </div>

      {/* Badge/Tag System */}
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
          Default
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          Brand
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
          Destructive
        </span>
      </div>
    </div>
    <p className="mt-6 text-sm text-slate-500 text-center">
      Tailwind 유틸리티 기반. 디자인 토큰(색상, 간격, 폰트)으로 일관성 확보.
    </p>
  </div>
);

// --- 8. Neumorphism (Soft UI) ---
const Neumorphism = () => (
  <div className="p-8 bg-[#EFEEEE] rounded-xl h-full flex flex-col items-center justify-center">
    <div className="w-full max-w-xs space-y-8">
      {/* Card */}
      <div className="p-6 rounded-[20px] bg-[#EFEEEE] shadow-[6px_6px_12px_#c8c8c8,-6px_-6px_12px_#ffffff]">
        <div className="flex justify-between items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-[#EFEEEE] shadow-[4px_4px_8px_#c8c8c8,-4px_-4px_8px_#ffffff] flex items-center justify-center text-gray-500">
            <ArrowRight size={18} />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#EFEEEE] shadow-[inset_4px_4px_8px_#c8c8c8,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center text-blue-500">
            <Activity size={18} />
          </div>
        </div>

        <h3 className="text-gray-700 font-bold text-lg mb-1">Soft UI</h3>
        <p className="text-gray-500 text-xs mb-4">Tactile Experience</p>

        <div className="h-2 w-full bg-[#EFEEEE] rounded-full shadow-[inset_2px_2px_4px_#c8c8c8,inset_-2px_-2px_4px_#ffffff] overflow-hidden">
          <div className="h-full w-2/3 bg-blue-400 rounded-full"></div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="flex-1 py-3 rounded-[12px] bg-[#EFEEEE] text-gray-600 font-bold text-sm shadow-[5px_5px_10px_#c8c8c8,-5px_-5px_10px_#ffffff] active:shadow-[inset_5px_5px_10px_#c8c8c8,inset_-5px_-5px_10px_#ffffff] transition-all">
          Cancel
        </button>
        <button className="flex-1 py-3 rounded-[12px] bg-[#EFEEEE] text-blue-500 font-bold text-sm shadow-[5px_5px_10px_#c8c8c8,-5px_-5px_10px_#ffffff] active:shadow-[inset_5px_5px_10px_#c8c8c8,inset_-5px_-5px_10px_#ffffff] transition-all">
          Confirm
        </button>
      </div>
    </div>
    <p className="mt-8 text-sm text-gray-500 text-center font-medium">
      부드러운 양각/음각 그림자. 독특하고 친근하지만 상태 구분(Active/Inactive) 주의 필요.
    </p>
  </div>
);

// --- 9. Swiss / Bauhaus (Editorial) ---
const SwissStyle = () => (
  <div className="p-8 bg-[#f4f4f0] rounded-xl h-full flex flex-col items-center justify-center">
    <div className="w-full max-w-md border border-black bg-[#FF4400]">
      {/* Grid Layout Header */}
      <div className="grid grid-cols-2 border-b border-black">
        <div className="p-4 border-r border-black bg-white">
          <span className="text-xs font-bold uppercase tracking-widest text-black">Vol.01</span>
        </div>
        <div className="p-4 bg-white flex items-center justify-end">
           <div className="w-4 h-4 rounded-full bg-[#FF4400]"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 bg-[#f4f4f0] relative overflow-hidden">
        <h1 className="text-6xl font-black text-black leading-[0.85] tracking-tighter mb-6 relative z-10 mix-blend-multiply">
          HELV<br/>ETICA
        </h1>

        <div className="grid grid-cols-3 gap-4 border-t border-black pt-4">
          <div className="col-span-1 text-xs font-bold">
            THE GRID<br/>SYSTEM
          </div>
          <div className="col-span-2 text-sm font-medium leading-snug">
            Objective photography and typography. Clear visual hierarchy.
          </div>
        </div>

        <div className="mt-8 border-t border-b border-black py-4 flex justify-between items-center">
          <span className="font-bold text-xl">READ MORE</span>
          <ArrowRight size={24} strokeWidth={3} />
        </div>
      </div>
    </div>
    <p className="mt-4 text-sm text-black font-bold text-center">
      강력한 그리드, 거대한 타이포그래피, 원색의 대비. 신뢰감과 예술성.
    </p>
  </div>
);

// --- 10. Bento Grid ---
const BentoGrid = () => (
  <div className="p-8 bg-gray-900 rounded-xl h-full flex flex-col items-center justify-center text-white">
    <div className="grid grid-cols-4 grid-rows-3 gap-4 w-full max-w-md h-80">
      <div className="col-span-2 row-span-2 bg-neutral-800 rounded-2xl p-4 flex flex-col justify-between hover:bg-neutral-700 transition-colors cursor-pointer group">
        <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <BarChart2 size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-100">Analytics</h3>
          <p className="text-xs text-gray-400">View real-time data</p>
        </div>
      </div>
      <div className="col-span-2 bg-green-500 rounded-2xl p-4 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-black">System</h3>
          <p className="text-xs text-black/70">Operational</p>
        </div>
        <Activity className="text-black/50" />
      </div>
      <div className="bg-neutral-800 rounded-2xl flex items-center justify-center hover:bg-neutral-700 transition-colors">
        <Settings className="text-gray-400" />
      </div>
      <div className="bg-purple-500 rounded-2xl flex items-center justify-center">
        <Zap className="text-white" />
      </div>
      <div className="col-span-4 bg-neutral-800 rounded-2xl p-4 flex items-center gap-4 hover:bg-neutral-700 transition-colors">
         <div className="w-12 h-12 bg-gray-700 rounded-lg flex-shrink-0"></div>
         <div>
           <h3 className="text-sm font-semibold">Project X</h3>
           <p className="text-xs text-gray-400">Updated now</p>
         </div>
      </div>
    </div>
    <p className="mt-6 text-sm text-gray-400 text-center">
      Bento Grid: 정보를 모듈화하여 직관적으로 배치.
    </p>
  </div>
);

// --- 11. Material Design (Google) ---
const MaterialDesignStyle = () => (
  <div className="p-8 bg-gray-100 rounded-xl h-full flex flex-col items-center justify-center font-sans">
    <div className="w-full max-w-[320px] bg-[#FEF7FF] rounded-[24px] shadow-md border border-gray-200 overflow-hidden relative flex flex-col h-[500px]">

      {/* Top App Bar */}
      <div className="bg-[#FEF7FF] px-4 py-4 flex items-center justify-between shadow-sm z-10 text-[#1D1B20]">
        <Menu size={24} />
        <span className="text-[22px] font-normal">Material 3</span>
        <div className="w-8 h-8 rounded-full bg-[#6750A4] text-white flex items-center justify-center text-sm">M</div>
      </div>

      {/* Content Body */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">

        {/* Outlined Card */}
        <div className="rounded-[12px] border border-[#79747E] p-4 bg-white">
          <div className="flex items-center gap-4 mb-3">
             <div className="w-10 h-10 rounded-full bg-[#EADDFF] text-[#21005D] flex items-center justify-center font-bold">A</div>
             <div>
               <h3 className="text-base font-medium text-[#1D1B20]">Headline</h3>
               <p className="text-sm text-[#49454F]">Subhead</p>
             </div>
          </div>
          <p className="text-sm text-[#49454F] leading-relaxed mb-4">
            Material Design은 빛과 그림자, 그리고 종이의 물성을 디지털로 해석한 시스템입니다.
          </p>
          <div className="flex justify-end gap-2">
             <button className="px-3 py-2 text-[#6750A4] text-sm font-medium hover:bg-[#6750A4]/10 rounded-full transition-colors">Enabled</button>
             <button className="px-5 py-2 bg-[#6750A4] text-white text-sm font-medium rounded-full shadow hover:shadow-md transition-shadow">Filled</button>
          </div>
        </div>

        {/* Text Field (Filled) */}
        <div className="relative bg-[#E7E0EC] rounded-t-md border-b border-[#49454F] px-4 pt-6 pb-2">
          <label className="absolute top-2 left-4 text-xs text-[#49454F]">Label</label>
          <span className="text-base text-[#1D1B20]">Input text</span>
        </div>

        {/* Chips */}
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1.5 rounded-[8px] border border-[#79747E] text-[#1D1B20] text-sm font-medium">Assist</span>
          <span className="px-3 py-1.5 rounded-[8px] bg-[#E8DEF8] text-[#1D192B] text-sm font-medium flex items-center gap-1">
            <CheckCircle2 size={14} /> Filter
          </span>
        </div>

      </div>

      {/* FAB */}
      <div className="absolute bottom-24 right-4">
        <button className="w-14 h-14 bg-[#EADDFF] rounded-[16px] shadow-lg hover:shadow-xl text-[#21005D] flex items-center justify-center transition-all active:scale-95">
          <Settings size={24} />
        </button>
      </div>

      {/* Navigation Bar */}
      <div className="bg-[#F3EDF7] h-20 flex justify-around items-center mt-auto">
         <div className="flex flex-col items-center gap-1">
           <div className="w-16 h-8 rounded-full bg-[#E8DEF8] flex items-center justify-center">
             <Box size={20} className="text-[#1D192B]" />
           </div>
           <span className="text-xs font-medium text-[#1D192B]">Home</span>
         </div>
         <div className="flex flex-col items-center gap-1 opacity-60">
            <Bell size={24} />
            <span className="text-xs font-medium">Alerts</span>
         </div>
      </div>

    </div>
    <p className="mt-4 text-sm text-gray-500 text-center">
      Google Material 3 (M3): 다이나믹 컬러, 둥근 모서리, 고도(Elevation)와 그림자.
    </p>
  </div>
);


const App = () => {
  const [activeTab, setActiveTab] = useState('fluent');

  const styles = [
    {
      id: 'fluent',
      name: 'Fluent Design',
      icon: <Maximize2 size={18} />,
      desc: 'Microsoft Style: 깊이감, 아크릴 효과, 데스크톱 친화적',
      component: <FluentDesign />
    },
    {
      id: 'ios',
      name: 'iOS Human Interface',
      icon: <Monitor size={18} />,
      desc: 'Apple Style: 프리미엄, 둥근 모서리, 명확한 위계',
      component: <IOSStyle />
    },
    {
      id: 'material',
      name: 'Material Design',
      icon: <Palette size={18} />,
      desc: 'Google Style: 종이 질감, 고도(Elevation), FAB',
      component: <MaterialDesignStyle />
    },
    {
      id: 'ant',
      name: 'Ant Design (B2B)',
      icon: <Grid size={18} />,
      desc: '엔터프라이즈 최적화: 고밀도 데이터, 규칙적 그리드',
      component: <AntDesignStyle />
    },
    {
      id: 'tailwind',
      name: 'Tailwind System',
      icon: <Command size={18} />,
      desc: '유틸리티 퍼스트: 커스텀 토큰 기반, 확장성',
      component: <TailwindSystem />
    },
    {
      id: 'modern',
      name: 'Modern Minimal',
      icon: <Layout size={18} />,
      desc: 'Clean UI: 여백과 타이포그래피 중심 (SaaS 표준)',
      component: <ModernMinimalism />
    },
    {
      id: 'neumorphism',
      name: 'Neumorphism',
      icon: <Droplet size={18} />,
      desc: 'Soft UI: 부드러운 음각/양각 그림자',
      component: <Neumorphism />
    },
    {
      id: 'swiss',
      name: 'Swiss / Editorial',
      icon: <Type size={18} />,
      desc: '타이포그래피 중심: 강력한 그리드와 여백',
      component: <SwissStyle />
    },
    {
      id: 'glass',
      name: 'Glassmorphism',
      icon: <Layers size={18} />,
      desc: 'Trend: 반투명한 유리 질감과 몽환적 배경',
      component: <Glassmorphism />
    },
    {
      id: 'neo',
      name: 'Neo-Brutalism',
      icon: <Box size={18} />,
      desc: 'Hip: 고대비, 굵은 선, 원색, 하드 섀도우',
      component: <NeoBrutalism />
    },
    {
      id: 'bento',
      name: 'Bento Grid',
      icon: <Activity size={18} />,
      desc: 'Layout: 격자형 정보 배치',
      component: <BentoGrid />
    },
  ];

  const activeStyle = styles.find(s => s.id === activeTab);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col md:flex-row">

      {/* Sidebar Navigation */}
      <div className="w-full md:w-80 bg-gray-50 border-r border-gray-200 flex flex-col shrink-0 h-screen overflow-hidden">
        <div className="p-6 pb-2 shrink-0">
          <h1 className="text-xl font-bold mb-1 text-gray-900">UI Style Gallery</h1>
          <p className="text-xs text-gray-500">지형근님을 위한 UI 컬렉션</p>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-1">
          {styles.map((style) => (
            <button
              key={style.id}
              onClick={() => setActiveTab(style.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                activeTab === style.id
                  ? 'bg-white text-blue-600 shadow-sm border border-gray-100 font-semibold ring-1 ring-black/5'
                  : 'text-gray-500 hover:bg-gray-200/50 hover:text-gray-900'
              }`}
            >
              <div className={`shrink-0 ${activeTab === style.id ? 'text-blue-600' : 'text-gray-400'}`}>
                {style.icon}
              </div>
              <div className="min-w-0">
                <span className="block text-sm truncate">{style.name}</span>
                <span className="block text-[10px] text-gray-400 truncate opacity-80">{style.desc.split(':')[0]}</span>
              </div>
              {activeTab === style.id && <ArrowRight size={14} className="ml-auto shrink-0" />}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">

        {/* Header Area */}
        <div className="p-8 pb-4 shrink-0">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            {activeStyle.name}
          </h2>
          <p className="text-gray-500 mt-1 text-sm">{activeStyle.desc}</p>
        </div>

        {/* Preview Canvas */}
        <div className="flex-1 p-4 md:p-8 pt-0 overflow-hidden">
          <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-xl overflow-hidden relative bg-gray-50/50">
            {/* Interactive Preview Label */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-mono text-gray-500 border border-gray-200 z-10 shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Live Component Preview
            </div>

            {/* Render Selected Component */}
            <div className="w-full h-full overflow-auto">
               {activeStyle.component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
